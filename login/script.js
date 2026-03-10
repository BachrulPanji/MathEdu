document.getElementById('login-form').addEventListener('submit', function (e) {
    e.preventDefault();
    const user = document.getElementById('username').value;
    const pass = document.getElementById('password').value;
    const alert = document.getElementById('alert-error');

    if (user === 'Semangat Belajar' && pass === 'SuksesTahun2029') {
        localStorage.setItem('ruangEdukasi_loggedIn', 'true');
        localStorage.setItem('ruangEdukasi_showWelcome', 'true');
        window.location.href = '../index.html';
    } else {
        alert.classList.remove('hidden');
        setTimeout(() => alert.classList.add('hidden'), 3000);
    }
});

// Check if already logged in
if (localStorage.getItem('ruangEdukasi_loggedIn') === 'true') {
    window.location.href = '../index.html';
}