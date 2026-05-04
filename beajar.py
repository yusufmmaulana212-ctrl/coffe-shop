from flask import Flask

app = Flask(__name__)

@app.route('/')
def home():
    return "Selamat Datang"

@app.route('/user/<nama>/<kelas>/<npm>/<jurusan>')
def user(nama, kelas, npm, jurusan):
    return f"""
    Nama saya: {nama}<br>
    Kelas: {kelas}<br>
    NPM: {npm}<br>
    Jurusan: {jurusan}
    """

if __name__ == '__main__':
    app.run(debug=True)