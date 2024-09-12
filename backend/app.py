# Run `python3 app.py`

from flask import Flask, request, jsonify
from flask_cors import CORS
from calc import sum_simulations
import numpy as np

app = Flask(__name__)
CORS(app)

@app.route('/simulate', methods=['POST'])
def simulate():
    try:
        # Extract data from JSON
        data = request.json
        variables = data.get('variables')  # e.g., 'normal', 'triangular'
        size = data.get('size')  # e.g., [0, 1, 4999] for normal distribution
        bins = data.get('bins')
        
        # Check if req. params
        # if not distribution or not params or not data:
        #     return jsonify({"error": "Missing 'distribution' or 'params' in request"}), 400
        
        # Run Monte Carlo simulation
        results, bin_edges, frequencies = sum_simulations(variables, size, bins)
        
        # Convert NumPy arrays to lists for JSON
        bin_edges_list = bin_edges.tolist()
        frequencies_list = frequencies.tolist()

        # Prepare response data
        response = {
            "bin_edges": bin_edges_list,
            "frequencies": frequencies_list,
            "mean": float(np.mean(results)),
            "stddev": float(np.std(results)),
            "message": f"Monte Carlo simulation for XXX distribution completed."
        }
        return jsonify(response), 200

    except Exception as e:
        return jsonify({"error": str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True)
