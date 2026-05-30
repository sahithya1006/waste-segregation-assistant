from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

def classify_waste(filename):
    name = filename.lower()

    if "banana" in name or "food" in name:
        return "Wet Waste", "Compost it in organic bin"
    elif "plastic" in name or "bottle" in name:
        return "Plastic Waste", "Send to recycling/recovery center"
    elif "battery" in name or "phone" in name:
        return "E-Waste", "Dispose at authorized e-waste center"
    else:
        return "Dry Waste", "Use dry waste bin"

@app.route("/predict", methods=["POST"])
def predict():
    if "file" not in request.files:
        return jsonify({"error": "No file uploaded"}), 400

    file = request.files["file"]
    category, suggestion = classify_waste(file.filename)

    return jsonify({
        "category": category,
        "suggestion": suggestion
    })

if __name__ == "__main__":
    app.run(debug=True)