document.getElementById('login-toggle').addEventListener('click', function() {
    document.getElementById('login-form').style.display = 'block';
    document.getElementById('signup-form').style.display = 'none';
    this.classList.add('active');
    document.getElementById('signup-toggle').classList.remove('active');
});

document.getElementById('signup-toggle').addEventListener('click', function() {
    document.getElementById('signup-form').style.display = 'block';
    document.getElementById('login-form').style.display = 'none';
    this.classList.add('active');
    document.getElementById('login-toggle').classList.remove('active');
});

document.getElementById('signup-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('signup-username').value;
    const password = document.getElementById('signup-password').value;
    const confirmPassword = document.getElementById('signup-confirm-password').value;
    if (username.length<8) {
        document.getElementById('error-message').innerText = "Username too short!";
    } 
    else if (password !== confirmPassword) {
        document.getElementById('error-message').innerText = "Passwords don't match!";
    } else {
        document.getElementById('error-message').innerText = '';
        alert('YAY! Signup successful!');
    }
});