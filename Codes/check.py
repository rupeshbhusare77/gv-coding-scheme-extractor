import numpy as np
from math import comb, ceil
import itertools

def is_prime(q):
    if q <= 1:
        return False
    for i in range(2, int(q**0.5) + 1):
        if q % i == 0:
            while q != 1 and q % i == 0:
                q = q // i
            if q == 1:
                return True
            return False
    return True

def check_gv_bound(n, k, d, q):
    if not is_prime(q):
        print("q must be prime")
        return False

    top = q**n
    down = sum(comb(n, i) * (q-1)**i for i in range(d))
    right = top / down
    min_k = ceil(np.log(right) / np.log(q))
    satisfies = min_k <= k and k < n
    return satisfies

# Construct H with minimum distance >= d
def construct_parity_check_matrix(n, k, d, q, max_attempts=10000):
    m = n - k
    for attempt in range(max_attempts):
        # Start with systematic form H = [P | I_{n-k}]
        P = np.random.randint(0, q, size=(m, k))
        H = np.hstack([P, np.eye(m, dtype=int)])
        
        # Check linear independence of all sets of up to d-1 columns
        independent = True
        for r in range(1, d):
            for cols in itertools.combinations(range(n), r):
                submatrix = H[:, cols]
                if np.linalg.matrix_rank(submatrix % q) < min(r, m):
                    independent = False
                    break
            if not independent:
                break
        if independent:
            return H
    return None

# Derive G from H
def generator_from_parity_check(H, n, k, q):
    m = n - k
    # Assuming H = [P | I_{n-k}], G = [I_k | -P^T]
    P = H[:, :k]
    G = np.hstack([np.eye(k, dtype=int), (-P.T) % q])
    if np.all((G @ H.T) % q == 0):  # Verify G * H^T = 0
        return G
    return None  # Fallback if derivation fails

def coding_scheme_extractor(n, k, d, q, max_attempts=10000):
    print(f"Extracting for n={n}, k={k}, d={d}, q={q}")
    satisfies = check_gv_bound(n, k, d, q)
  
    if not satisfies:
        print("No code exists.")
        return None
    
    H = construct_parity_check_matrix(n, k, d, q, max_attempts)
    if H is None:
        print(f"Failed to construct H after {max_attempts} attempts.")
        return None
    
    G = generator_from_parity_check(H, n, k, q)
    if G is None:
        print("Failed to derive G from H.")
        return None

    print(f"Success! Found code d >= {d}")
    print("Generator matrix:")
    print(G)
    print("Parity-check matrix:")
    print(H)
    return G