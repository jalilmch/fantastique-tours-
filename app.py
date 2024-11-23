from flask import Flask, request, jsonify

app = Flask(__name__)

@app.route('/submit-message', methods=['POST'])
def submit_message():
    data = request.form
    name = data.get('name')
    email = data.get('email')
    message = data.get('message')

    # Example: Print the message or send it via email
    print(f"Message from {name} ({email}): {message}")
    return jsonify({"status": "success", "message": "Message received!"})

if __name__ == '__main__':
    app.run(debug=True)
