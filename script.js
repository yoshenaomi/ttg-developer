document.getElementById('registrationForm').addEventListener('submit', async function(event) {
    event.preventDefault(); 

    const fullName = document.getElementById('fullName').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const messageDiv = document.getElementById('message');

    // Validasi email
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        messageDiv.textContent = 'Email tidak valid.';
        messageDiv.style.color = 'red';
        return;
    }

    // Validasi password
    if (password.length < 8) {
        messageDiv.textContent = 'Password harus terdiri dari minimal 8 karakter.';
        messageDiv.style.color = 'red';
        return;
    }

    // Validasi konfirmasi password
    if (password !== confirmPassword) {
        messageDiv.textContent = 'Password dan konfirmasi password tidak cocok.';
        messageDiv.style.color = 'red';
        return;
    }

    // Jika semua validasi berhasil, kirim data ke API
    try {
        const response = await fetch('http://localhost:3000/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                fullName: fullName,
                email: email,
                password: password
            })
        });

        if (!response.ok) {
            throw new Error('Gagal mendaftar, silakan coba lagi.');
        }

        const result = await response.json();
        messageDiv.textContent = 'Pendaftaran Berhasil';
        messageDiv.style.color = 'green';
    } catch (error) {
        messageDiv.textContent = error.message;
        messageDiv.style.color = 'red';
    }
});
