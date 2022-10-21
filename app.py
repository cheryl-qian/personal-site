from flask import Flask, redirect, url_for, render_template, request, flash, send_file

app = Flask(__name__)

@app.route("/")
def home():
    return render_template('index.html')

@app.route("/about")
def about():
    return render_template('about.html')

@app.route("/projects")
def projects():
    return render_template('projects.html')

@app.route('/resume')
def resume():
    return send_file('static/cheryl-qian_resume.pdf')

if __name__ == '__main__':
    app.run(debug=True)