// static/script.js

// Get DOM elements for generator parameters
const nInput = document.getElementById("nValue");
const kInput = document.getElementById("kValue");
const dInput = document.getElementById("dValue");
const qInput = document.getElementById("qValue");
const generateBtn = document.getElementById("generateBtn");
const downloadBtn = document.getElementById("downloadBtn");
const generateCodeBtn = document.getElementById("generateCodeBtn");
const generateLinearCodeCheckbox = document.getElementById("generateLinearCode");


// Get DOM elements for toggle functionality
const optionGenerator = document.getElementById("option-generator");
const optionResearch = document.getElementById("option-research");
const mainContainer = document.querySelector(".main-container");
const researchTab = document.createElement("section");

// Create the Research tab dynamically
researchTab.classList.add("research-card");
researchTab.innerHTML = `

  <div class="tab-content" id="research-content">
    <div class="research-container">
      <h3 class="gradient-text research-title">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon">
          <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
          <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5z"></path>
        </svg>
        Coding Scheme Extractor
      </h3>
      
      
      <div class="research-content">
        <section class="research-section">
          <h4>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon">
              <circle cx="12" cy="8" r="7"></circle>
              <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline>
            </svg>
            Abstract
          </h4>
          <p>
            Error-correcting codes are fundamental for ensuring reliable data transmission and storage.
            The Gilbert–Varshamov (GV) bound provides a theoretical limit on the maximum achievable code size
            for a given alphabet size <code>q</code>, code length <code>n</code>, and minimum distance <code>d</code>.
            However, constructing codes that meet this bound is computationally challenging. This project presents
            a Coding Scheme Extractor that employs various strategies—including exhaustive search, greedy methods,
            and randomized algorithms—to generate codes that meet or exceed the GV bound.
          </p>
        </section>
        
        <section class="research-section">
          <h4>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon">
              <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
            </svg>
            Gilbert–Varshamov Bound
          </h4>
          <p>
            The GV bound guarantees the existence of codes with certain parameters. In particular, for an
            <code>[n, k, d]</code> linear code over <code>F<sub>q</sub></code>, the bound is expressed as:
            <br/>
            <span class="formula">
              q<sup>k</sup> ≤ q<sup>n</sup> / V<sub>q</sub>(n, d-1)
            </span>
            <br/>
            where V<sub>q</sub>(n, d-1) is the volume of a sphere with radius <code>d-1</code> in
            <code>F<sub>q</sub><sup>n</sup></code>. In rate terms, the lower bound can be written as:
            <br/>
            <span class="formula">
              R = k/n ≥ 1 − H<sub>q</sub>(d/n)
            </span>
            <br/>
            and the q-ary entropy function H<sub>q</sub>(x) is defined by:
            <br/>
            <span class="formula">
              H<sub>q</sub>(x) = x·log<sub>q</sub>(q − 1) − x·log<sub>q</sub>(x) − (1 − x)·log<sub>q</sub>(1 − x)
            </span>
          </p>
        </section>
        
        <section class="research-section">
          <h4>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon">
              <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
              <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
              <line x1="12" y1="22.08" x2="12" y2="12"></line>
            </svg>
            Implementation Details & Proof Outline
          </h4>
          <div>
            <p>
              The matrix generator utilizes a randomized algorithm to construct a generator matrix for a linear
              code with parameters (<code>n, k, d, q</code>). The implementation workflow is as follows:
            </p>
            <ul>
              <li>
                <strong>GV Bound Verification:</strong>
                Verifies that the parameters satisfy:
                <br/><span class="formula">
                  |C| ≥ q<sup>n</sup> / ∑<sub>j=0</sub><sup>d−1</sup> (n choose j)(q−1)<sup>j</sup>
                </span>
              </li>
              <li>Constructs a parity-check matrix <code>H</code> with the desired properties.</li>
              <li>Transforms <code>H</code> into its systematic form.</li>
              <li>Derives the generator matrix <code>G</code> using the relation <code>G = [I<sub>k</sub> | −P<sup>T</sup>]</code>, ensuring <code>G·H<sup>T</sup> ≡ 0</code> (mod q).</li>
              <li>
                <strong>Proof Outline:</strong> By covering <code>F<sub>q</sub><sup>n</sup></code> with spheres of radius <code>d−1</code>
                centered at each codeword, and using the volume formula:
                <br/><span class="formula">
                  V<sub>q</sub>(n, d-1) = ∑<sub>j=0</sub><sup>d−1</sup> (n choose j)(q − 1)<sup>j</sup>
                </span>,
                the bound on |C| is derived.
              </li>
            </ul>
          </div>
        </section>
        
        <div class="research-grid">
          <section class="research-card research-card-purple">
            <h4>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                <polyline points="15 3 21 3 21 9"></polyline>
                <line x1="10" y1="14" x2="21" y2="3"></line>
              </svg>
              Applications
            </h4>
            <div>
              <p>
                
              </p>
              <ul>
                <li>Error Correction in Communication Systems</li>
                <li>Data Storage and Retrieval</li>
                <li>Deep space communications</li>
                <li>Cryptography and Secure Communications</li>
                <li>Biometric Authentication and Identification</li>
                <li>Coding Theory Research and Combinatorial Optimization</li>
              </ul>
            </div>
          </section>
          
          <section class="research-card research-card-indigo">
            <h4>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon">
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
              </svg>
              References
            </h4>
            <div>
              <p>
                
              </p>
              <ul>
                <li> J. H. van Lint, <em>Introduction to Coding Theory</em>, Springer-Verlag, 1999.</li>
                <li> Venkatesan Guruswami, Atri Rudra, Madhu Sudan, <em>Essential Coding Theory</em>, Cambridge University Press, 2012.</li>
                <li> Gilbert-Varshamov Bound, Available: <a href="https://en.wikipedia.org/wiki/Gilbert%E2%80%93Varshamov_bound" target="_blank">Wikipedia</a></li>
                <li> Gilbert-Varshamov Bound for Linear Codes, Available: <a href="https://en.wikipedia.org/wiki/Gilbert%E2%80%93Varshamov_bound_for_linear_codes" target="_blank">Wikipedia</a></li>
                <li> Venkatesan Guruswami, Coding Theory Lecture Notes, Available: <a href="https://www.cs.cmu.edu/~venkatg/teaching/codingtheory/notes/notes2.pdf" target="_blank">CMU Lecture Notes</a></li>
                <li> Jian Gu and Tom Fuja, “A generalized Gilbert-Varshamov bound derived via analysis of a code-search algorithm,” <em>IEEE Transactions on Information Theory</em>, vol. 39, no. 3, pp. 1089-1093, 1993.</li>
                <li> John Orth, “The Salmon Algorithm—A New Population Based Search Metaheuristic,” 2012.</li>
                <li> Wolfgang Haas and Sheridan Houghten, “Evolutionary Algorithms for Optimal Error-Correcting Codes,” Brock University, 2005.</li>
                <li>Our detailed report<a href="report.pdf" target="_blank"> here</a></li>
              </ul>
            </div>
          </section>
        </div>
        <p>Created by Tanmay, Anshit, Rupesh | ©2025 All rights reserved</p>
      </div>
    </div>
  </div>
`;



// Function to toggle between Generator and Research modes
function toggleMode() {
  if (optionGenerator.checked) {
    // Show Generator tabs
    mainContainer.style.display = "flex";
    if (researchTab.parentElement) {
      researchTab.parentElement.removeChild(researchTab);
    }
  } else if (optionResearch.checked) {
    // Show Research tab
    mainContainer.style.display = "none";
    document.body.appendChild(researchTab);
  }
}

// Attach event listeners to the toggle buttons
optionGenerator.addEventListener("change", toggleMode);
optionResearch.addEventListener("change", toggleMode);

// Initialize the correct mode on page load
toggleMode();



// Get DOM elements for visualization and stats
const matrixContainer = document.getElementById("matrixContainer");
const matrixSize = document.getElementById("matrixSize");

/**
 * Displays the generator matrix in the visualization card.
 */
function displayMatrix(matrix) {
  matrixContainer.innerHTML = "";
  const rows = matrix.length;
  const cols = matrix[0]?.length || 0;

  const grid = document.createElement("div");
  grid.classList.add("matrix-grid");
  grid.style.gridTemplateColumns = `repeat(${cols}, minmax(30px, 1fr))`;

  // Add mobile-friendly grid sizing
  if (window.innerWidth <= 480) {
    grid.style.gridTemplateColumns = `repeat(${cols}, minmax(25px, 1fr))`;
  } else {
    grid.style.gridTemplateColumns = `repeat(${cols}, minmax(30px, 1fr))`;
  }


  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      const cell = document.createElement("div");
      cell.classList.add("matrix-cell");
      cell.textContent = matrix[i][j];
      grid.appendChild(cell);
    }
  }
  matrixContainer.appendChild(grid);
  matrixSize.textContent = `${rows} x ${cols}`;
}

/**
 * Converts a 2D array (matrix) into a CSV string.
 */
function convertMatrixToCSV(matrix) {
  return matrix.map(row => row.join(",")).join("\n");
}

/**
 * Triggers the download of the matrix as a CSV file.
 */
function downloadMatrixAsCSV(matrix) {
  const csvContent = convertMatrixToCSV(matrix);
  const blob = new Blob([csvContent], { type: "text/csv" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "matrix.csv";
  a.click();
  URL.revokeObjectURL(url);
}

/**
 * Main function to generate, display, and allow CSV download of the generator matrix.
 */
function generateMatrix() {
  const N = parseInt(nInput.value, 10);
  const K = parseInt(kInput.value, 10);
  const D = parseInt(dInput.value, 10);
  const Q = parseInt(qInput.value, 10);

  if (N <= 0 || K <= 0 || isNaN(N) || isNaN(K) || isNaN(D) || isNaN(Q)) {
    alert("Please enter valid values for N, K, D, and Q.");
    return;
  }

  // Disable the button and show a loading message
  generateBtn.disabled = true;
  generateBtn.textContent = "Generating Matrix...";

  fetch('/generate_matrix', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ n: N, k: K, d: D, q: Q })
  })
    .then(response => response.json())
    .then(data => {
      if (data.error) {
        alert(data.error);
      } else {
        displayMatrix(data.matrix);
        downloadBtn.disabled = false;
        downloadBtn.onclick = () => downloadMatrixAsCSV(data.matrix);
      }
    })
    .catch(err => {
      console.error(err);
      alert('Error occurred while generating matrix.');
    })
    .finally(() => {
      // Re-enable the button and reset the text
      generateBtn.disabled = false;
      generateBtn.textContent = "Generate Matrix";
    });
}

// Attach event listener to the generate button
generateBtn.addEventListener("click", generateMatrix);

// Optionally, generate a sample matrix on page load
// window.addEventListener("load", generateMatrix);


function downloadCodebook() {
  const N = parseInt(nInput.value, 10);
  const K = parseInt(kInput.value, 10);
  const D = parseInt(dInput.value, 10);
  const Q = parseInt(qInput.value, 10);

  if (N <= 0 || K <= 0 || isNaN(N) || isNaN(K) || isNaN(D) || isNaN(Q)) {
    alert("Please enter valid values for N, K, D, and Q.");
    return;
  }

  // Disable the button and show a loading message
  generateCodeBtn.disabled = true;
  generateCodeBtn.textContent = "Generating Codebook...";

  fetch('/generate_codebook', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ n: N, k: K, d: D, q: Q })
  })
    .then(response => {
      if (!response.ok) {
        // If the server responds with an error status, throw an error
        return response.text().then(errorMessage => {
          throw new Error(errorMessage || "Failed to generate codebook.");
        });
      }
      return response.text(); // Expecting a file (txt) as a response
    })
    .then(text => {
      // Replace commas with spaces in the response text
      const spaceSeparatedContent = text.replace(/,/g, "");

      // Create a downloadable link for the file
      const blob = new Blob([spaceSeparatedContent], { type: "text/plain" });
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "codebook.txt"; // Set the file name
      a.click();
      window.URL.revokeObjectURL(url); // Clean up the URL object
    })
    .catch(err => {
      console.error(err);
      alert(`Error: ${err.message}`);
    })
    .finally(() => {
      // Re-enable the button and reset the text
      generateCodeBtn.disabled = false;
      generateCodeBtn.textContent = "Download Codebook";
    });
}

// Attach event listener to the generateCodeBtn
generateCodeBtn.addEventListener("click", downloadCodebook);


// Function to toggle button visibility based on checkbox state
function toggleButtonVisibility() {
  if (generateLinearCodeCheckbox.checked) {
    generateBtn.style.display = "flex"; // Show the "Generate Matrix" button
    generateCodeBtn.style.display = "none"; // Hide the "Download Codebook" button
  } else {
    generateBtn.style.display = "none"; // Hide the "Generate Matrix" button
    generateCodeBtn.style.display = "flex"; // Show the "Download Codebook" button
  }
}

// Attach event listener to the checkbox
generateLinearCodeCheckbox.addEventListener("change", toggleButtonVisibility);

// Initialize button visibility on page load
toggleButtonVisibility();


// Background symbols (for aesthetics)
const mathSymbols = ["+", "−", "×", "÷", "√", "π", "Σ", "∆", "∑", "∫", "∞", "≈"];
const bgContainer = document.querySelector('.background-shapes');
const numberOfSymbols = 70;

for (let i = 0; i < numberOfSymbols; i++) {
  const symbolElem = document.createElement("div");
  symbolElem.classList.add("symbol");
  const randomSymbol = mathSymbols[Math.floor(Math.random() * mathSymbols.length)];
  symbolElem.textContent = randomSymbol;
  symbolElem.style.left = Math.random() * 100 + "%";
  symbolElem.style.top = Math.random() * 100 + "%";
  symbolElem.style.fontSize = (60 + Math.random() * 40) + "px";
  symbolElem.style.animationDuration = (5 + Math.random() * 7) + "s";
  symbolElem.style.animationDelay = (Math.random() * 3) + "s";
  bgContainer.appendChild(symbolElem);
}

// Add window resize handler
window.addEventListener('resize', () => {
  const matrix = document.querySelector('.matrix-grid');
  if (matrix) {
    const cols = matrix.children.length / (matrix.parentElement.dataset.rows || 1);
    if (window.innerWidth <= 480) {
      matrix.style.gridTemplateColumns = `repeat(${cols}, minmax(25px, 1fr))`;
    } else {
      matrix.style.gridTemplateColumns = `repeat(${cols}, minmax(30px, 1fr))`;
    }
  }
});