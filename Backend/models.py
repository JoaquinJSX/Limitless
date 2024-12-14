from config import db

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    user_name = db.Column(db.String(20), unique=True, nullable=False)
    password = db.Column(db.String(20), unique=False, nullable=False)

    def to_json(self):
        return {
            "id": self.id,
            "userName": self.user_name,
            "password": self.password
        }