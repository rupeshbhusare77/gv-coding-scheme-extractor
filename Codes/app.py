from flask import Flask, render_template, request, jsonify, Response
from check import coding_scheme_extractor
from codebook import generate_codebook
import numpy as np

app = Flask(__name__)

# Route to serve the homepage
@app.route('/')
def index():
    return render_template('index.html')

# API endpoint for generating the matrix
@app.route('/generate_matrix', methods=['POST'])
def generate_matrix():
    data = request.get_json()
    try:
        n = int(data.get('n'))
        k = int(data.get('k'))
        d = int(data.get('d'))
        q = int(data.get('q'))
    except (ValueError, TypeError):
        return jsonify({'error': 'Invalid parameters'}), 400

    # Use the updated coding_scheme_extractor
    matrix = coding_scheme_extractor(n, k, d, q)
    if matrix is None:
        return jsonify({'error': 'Matrix generation failed. Check parameters or try again.'}), 400

    matrix_list = matrix.tolist() if isinstance(matrix, np.ndarray) else matrix
    return jsonify({'matrix': matrix_list})

# API endpoint for generating and downloading the codebook
@app.route('/generate_codebook', methods=['POST'])
def generate_codebook_route():
    data = request.get_json()
    try:
        n = int(data.get('n'))
        k = int(data.get('k'))
        d = int(data.get('d'))
        q = int(data.get('q'))
    except (ValueError, TypeError):
        return jsonify({'error': 'Invalid parameters'}), 400

    M = q ** k  # Maximum number of codewords
    codebook = generate_codebook(n, q, d, M)
    if codebook is None:
        return jsonify({'error': 'Codebook generation failed. Check parameters or try again.'}), 400

    # Convert codebook to CSV format
    csv_content = "\n".join([" ".join(map(str, row)) for row in codebook])  # Space-separated format

    # Return as a downloadable response
    return Response(
        csv_content,
        mimetype="text/plain",
        headers={"Content-Disposition": "attachment;filename=codebook.txt"}
    )

if __name__ == '__main__':
    app.run(debug=True)