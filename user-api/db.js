const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('userdb', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
});

sequelize.authenticate()
    .then(() => {
        console.log('Koneksi ke MySQL berhasil');
    })
    .catch(err => {
        console.error('Koneksi error:', err);
    });

module.exports = sequelize;
