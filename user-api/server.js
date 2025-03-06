const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const User = require('./user'); // Import model User
const sequelize = require('./db'); // Impor sequelize dari db.js

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors());  // Allow cross-origin requests

// POST: Menambahkan pengguna baru
app.post('/users', async (req, res) => {
    const { fullName, email, password } = req.body;

    try {
        const user = await User.create({ fullName, email, password });
        res.status(201).send(user); // Kirim response dengan status 201 jika berhasil
    } catch (error) {
        res.status(400).send(error); // Error jika gagal menyimpan data
    }
});

// GET: Mengambil daftar seluruh pengguna
app.get('/users', async (req, res) => {
    const users = await User.findAll();
    res.send(users);
});

// GET: Mengambil data pengguna berdasarkan ID
app.get('/users/:id', async (req, res) => {
    const user = await User.findByPk(req.params.id);
    if (!user) {
        return res.status(404).send();
    }
    res.send(user);
});

// DELETE: Menghapus pengguna berdasarkan ID
app.delete('/users/:id', async (req, res) => {
    const user = await User.findByPk(req.params.id);
    if (!user) {
        return res.status(404).send({ message: 'Pengguna tidak ditemukan' });
    }

    await user.destroy();
    res.status(204).send(); 
});

// Sinkronisasi database dan menjalankan server
sequelize.sync()
    .then(() => {
        console.log('Database terhubung dan disinkronkan!');
        const PORT = process.env.PORT || 3000;
        app.listen(PORT, () => {
            console.log(`Server berjalan di port ${PORT}`);
        });
    })
    .catch(err => {
        console.error('Gagal menyinkronkan database:', err);
    });
