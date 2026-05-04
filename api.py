from flask import Flask

app = Flask(__name__)

@app.route('/')
def home():
    return "Selamat Datang"

@app.route('/user/<nama>/<kelas>/<npm>/<jurusan>')
def user(nama, kelas, npm, jurusan):
    return f"""
    Nama saya {'Yusuf Maulana Wahyudi'}<br>
    Kelas: {'1IA11'}<br>
    NPM: {'51425323'}<br>
    Jurusan: {'Informatika'}
    """

if __name__ == '_main_':
    app.run(debug=True)