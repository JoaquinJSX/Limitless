from flask import request, jsonify
from config import app, db
from models import User

@app.route("/users", methods=["GET"])
def get_users():
    users = User.query.all()
    json_users = list(map(lambda x: x.to_json(), users))
    return jsonify({"users": json_users})

@app.route("/create_user", methods=["POST"])
def create_user():
    user_name = request.json.get("userName")
    password = request.json.get("password")

    if not user_name or not password:
        return jsonify({"error": "User name and password are required"}), 400
    
    new_user = User(user_name=user_name, password=password)
    try:
        db.session.add(new_user)
        db.session.commit()
    except Exception as e:
        return jsonify({"error": str(e)}), 400
    
    return jsonify({"message" : "User created"}), 201

if __name__ == "__main__":
    with app.app_context():
        db.create_all()
    
    app.run(debug=True)