from flask import Flask, render_template, request

app = Flask(__name__)

@app.route('/', methods=['GET']) 
def hello_world():
    return render_template('index.html')

@app.route('/', methods=['POST'])
def summarize():
    textfile=request.files['textfile']
    text_path= "./files/"+textfile.filename
    textfile.save(text_path)
    return render_template('index.html')

if __name__ == '__main__':
    app.run(debug=True)