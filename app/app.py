from flask import Flask, render_template, Response, request, flash, redirect, url_for, jsonify

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route("/summarize")
def summarize():
    text=""

    if request.method == 'POST':
        if "file" not in request.files:
            return render_template("index.html", text=text)

        file = request.files['file']

        if file.filename == "":
            return render_template("index.html", text=text)

        if file:
            return render_template("index.html", text=text)


