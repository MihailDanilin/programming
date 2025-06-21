from flask import Flask, render_template, request

app = Flask(__name__)

@app.route('/', methods=['GET'])
def main():
    return render_template('index.html')

@app.route('/login', methods=['GET'])
def login():
    return render_template('index.html')

if __name__ == "__main__":
    app.run('0.0.0.0', 5433, True)