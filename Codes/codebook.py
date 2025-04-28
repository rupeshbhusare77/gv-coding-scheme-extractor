import numpy as np
import math 

def hamming_distance(a, b):
    """Compute the Hamming distance between two codewords."""
    return np.sum(a != b)

def GV(n, q, d): 
    top = q**n 
    down = sum([math.comb(n, i) * pow((q - 1), i) for i in range(d)])
    return math.ceil(top / down)

def generate_codebook(n, q, d, M, max_attempts=10**5):
    """
    Generates a random coding scheme satisfying the GV bound using pre-seeding + random sampling.
    
    Parameters:
    - n: Codeword length
    - q: Alphabet size (field F_q)
    - d: Minimum Hamming distance
    - max_attempts: Max attempts to find a valid codeword
    
    Returns:
    - codebook: A NumPy array of shape (M, n) containing M valid codewords
    """
    if M < GV(n, q, d): 
        print("The taken k is way less than the limit of the GV bound.")
        return None

    if np.log(M) / np.log(q) >= n: 
        print("The given k is more than n")
        return None 

    codebook = []
    
    # *Step 1: Pre-seed the codebook with diverse words*
    # 1. Add the all-zero codeword
    codebook.append(np.zeros(n, dtype=int))
    
    # 2. Add q-1 codewords where first d symbols are unique
    for j in range(n // d): 
        for i in range(1, q):
            new_codeword = np.zeros(n, dtype=int)
            new_codeword[j * d:(j + 1) * d] = i  # Assign first d positions unique values
            codebook.append(new_codeword)
    
    # Convert list to NumPy array
    codebook = np.array(codebook)

    attempts = 0
    
    while True:
        if len(codebook) == M: 
            break
        # Generate a random candidate codeword
        candidate = np.random.randint(0, q, n)
        
        # Check if the candidate satisfies the minimum Hamming distance condition
        valid = np.all([hamming_distance(candidate, cw) >= d for cw in codebook])
        
        if valid:
            codebook = np.vstack([codebook, candidate])  # Append new codeword
            
        
        else:
            attempts += 1

        # Stop if no valid words are found for too long
        if attempts > max_attempts:
            print("The max reached.")
            break
    # print(codebook)
    return codebook