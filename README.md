# Coding Scheme Extractor

> A web tool for building error-correcting codes that meet or exceed the Gilbert–Varshamov (GV) bound using efficient, randomized algorithms.

---

## ✨ About  
Generates linear and general codes over finite fields by  
- Verifying GV bound parameters  
- Constructing parity-check and generator matrices  
- Employing randomized, greedy, and hybrid strategies  

Built by **Tanmay, Anshit & Rupesh**.

---

## 🔑 Highlights  
- **Random Sampling Algorithm** with pre-seeding  
- **Randomized Linear Code Generation** via systematic matrices  
- GV bound verification and **rate** calculation  
- Clean, responsive **web interface**  

---

## 🔗 Links

- **Detailed Report:**  
  <a href="https://drive.google.com/file/d/1TryO1o4dM53dLRD3mnTjXH7J70Ja5lIt/view" target="_blank" rel="noopener noreferrer">
    Download full report (PDF)
  </a>

- **Hosted version:**  
  <a href="https://gvcodingschemeextractor.pythonanywhere.com" target="_blank" rel="noopener noreferrer">
    GV Coding Scheme Extractor
  </a>


---

## 🚀 Quick Start

1. **Clone**  
   ```bash
   git clone https://github.com/your-username/your-repo.git
   cd your-repo
   ```
2. **Install**  
   ```bash
   pip install -r requirements.txt
   ```
3. **Run**  
   ```bash
   python app.py
   ```  
4. **Browse** 
   ```Visit
   http://localhost:5000
   ```

---

## 📖 GV Bound Recap  
For an \[n, k, d\]\_q code:

$$
q^k \;\le\; \frac{q^n}{\displaystyle\sum_{i=0}^{d-1} \binom{n}{i}\,(q-1)^i}
$$

Rate bound:

$$
R \;=\;\frac{k}{n}\;\ge\;1 \;-\; H_q\!\Bigl(\tfrac{d}{n}\Bigr)
$$

with

$$
H_q(x)
\;=\;
x\,\log_q(q-1)
\;-\;
x\,\log_q(x)
\;-\;
(1 - x)\,\log_q(1 - x)
$$


---

## 🌍 Applications  
- Digital communications & deep-space links  
- Data storage, RAID arrays  
- Blockchain, cryptographic protocols  
- QR/barcode generation  

---

## 📚 References  
1. J. H. van Lint, *Introduction to Coding Theory*  
2. V. Guruswami et al., *Essential Coding Theory*  
3. [GV Bound – Wikipedia](https://en.wikipedia.org/wiki/Gilbert%E2%80%93Varshamov_bound)  
4. [GV Bound for Linear Codes – Wikipedia](https://en.wikipedia.org/wiki/Gilbert%E2%80%93Varshamov_bound_for_linear_codes)  
5. [CMU Coding Theory Notes](https://www.cs.cmu.edu/~venkatg/teaching/codingtheory/notes/notes2.pdf)  

---

## 👩‍💻 Authors  
Tanmay • Anshit • Rupesh
