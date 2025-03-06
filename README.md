# TTG-Developer

Berikut tata cara running kode program yang telah diberikan 

## Front-end pendaftaran akun

- Formulir pendaftaran dengan input:
  - Nama lengkap
  - Email
  - Password
  - Konfirmasi password
- Validasi:
  - Email harus berformat valid.
  - Password dan konfirmasi password harus cocok.
  - Password harus terdiri dari minimal 8 karakter.
- Responsif dan mobile-friendly.
- Pesan "Pendaftaran Berhasil" ditampilkan setelah form divalidasi.

- Proyek ini terdiri dari 3 file utama:

1. `index.html` – File HTML untuk struktur halaman web.
2. `styles.css` – File CSS untuk pengaturan tampilan dan desain halaman.
3. `script.js` – File JavaScript untuk pengaturan validasi form.

- Cara Menjalankan
1. Pastikan Anda sudah mengunduh atau meng-clone repositori ini.
2. Buka file `index.html` menggunakan browser pilihan Anda.

- Langkah-langkah untuk Menggunakan Formulir Pendaftaran:
1. Masukkan nama lengkap Anda di field "Nama lengkap".
2. Masukkan email yang valid di field "Email".
3. Masukkan password yang terdiri dari minimal 8 karakter di field "Password".
4. Masukkan kembali password Anda di field "Konfirmasi password".
5. Jika password dan konfirmasi password cocok serta email valid, klik tombol submit.
6. Setelah berhasil, pesan "Pendaftaran Berhasil" akan muncul di bawah formulir.

- Screenshot
**Contoh tampilan formulir pendaftaran:**
![Pendaftaran Pengguna](halaman%20daftar.png)

## Back-end API with Node.js
Proyek ini merupakan aplikasi **web sederhana** dan **API** untuk melakukan pendaftaran pengguna. Aplikasi ini terdiri dari dua bagian utama:
1. **Halaman Pendaftaran Pengguna** yang menggunakan HTML, CSS, dan JavaScript untuk menampilkan form pendaftaran dengan validasi yang sesuai.
2. **API Backend** yang dibangun menggunakan Node.js, Express, dan MySQL untuk menyimpan dan mengelola data pengguna.

- Fitur:
- **Form Pendaftaran Pengguna** yang terdiri dari:
  - Nama Lengkap
  - Email
  - Password
  - Konfirmasi Password
- **Validasi**:
  - Email harus berformat valid.
  - Password dan konfirmasi password harus cocok.
  - Password harus terdiri dari minimal 8 karakter.
- **API** untuk:
  - Menambahkan pengguna baru ke database MySQL.
  - Mengambil daftar seluruh pengguna.
  - Mengambil data pengguna berdasarkan ID.
  - Menghapus pengguna berdasarkan ID.
- **Tampilan responsif** untuk memastikan halaman dapat digunakan di perangkat mobile.

- Teknologi yang Digunakan
- **Frontend**:
  - HTML
  - CSS
  - JavaScript
- **Backend**:
  - Node.js
  - Express.js
  - MySQL (dengan Sequelize ORM)

- Instalasi
  - Menyiapkan Proyek Node.js
Untuk memulai proyek ini, pastikan Anda memiliki **Node.js** dan **npm** terinstal di sistem Anda. Ikuti langkah-langkah berikut:
1. Clone repositori ini atau unduh file sumber.
2. Buka terminal dan navigasi ke direktori proyek:
   ```bash
   cd path/to/your/project
3. Lakukan checkout pada branch Back-End-API-Pengguna
   ```bash
   git checkout Back-End-API-Pengguna
4. Inisialisasi proyek Node.js dengan perintah:
   ```bash
   npm init -y
5. Install dependensi yang diperlukan:
   ```bash
   npm install express sequelize mysql2 body-parser bcrypt
6. Siapkan database MySQL:
   ```sql
   CREATE DATABASE userdb;
Sesuaikan pengaturan database di file db.js dan di bawah ini merupakan format table users:
![Format Table Users](format%20table%20users.png)

7. Jalankan server backend:
   ```bash
   node server.js

  - Menjalankan Halaman Web
Buka file index.html di browser untuk mengakses form pendaftaran pengguna.

  - Menggunakan API
    - POST /users: Menambahkan pengguna baru.
    - GET /users: Mengambil seluruh daftar pengguna.
    - GET /users/:id: Mengambil pengguna berdasarkan ID.
    - DELETE /users/:id: Menghapus pengguna berdasarkan ID.
      
## Cari Angka Hilang
1. Lakukan checkout pada branch Back-End-API-Pengguna
   ```bash
   git checkout Cari-Angka-Yang-Hilang
2. Running pada terminal code editor dengan:
   ```bash
   node angka-hilang.js
![Angka Hilang](angka%20hilang.png)

## Create Formula Hitung Angka 
1. Lakukan checkout pada branch Back-End-API-Pengguna
   ```bash
   git checkout Formula-Hitung-Angka
2. Running pada terminal code editor dengan:
   ```bash
   node formula-hitung.js
![Formula Hitung](formula%20hitung.png)

## Penulis
- Nama: [Yoshe Naomi Vici Aflaha]

---
