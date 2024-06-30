const accounts = [
    { username: 'user1', password: 'password1' },
    { username: 'user2', password: 'password2' },
    { username: 'user3', password: 'password3' },
    { username: 'user4', password: 'password4' },
    { username: 'user5', password: 'password5' },
    { username: 'user6', password: 'password6' },
    { username: 'user7', password: 'password7' },
    { username: 'user8', password: 'password8' },
    { username: 'user9', password: 'password9' },
    { username: 'user10', password: 'password10' },
    { username: 'user11', password: 'password11' },
    { username: 'user12', password: 'password12' },
    { username: 'user13', password: 'password13' },
    { username: 'user14', password: 'password14' },
    { username: 'user15', password: 'password15' },
    { username: 'user16', password: 'password16' },
    { username: 'user17', password: 'password17' },
    { username: 'user18', password: 'password18' },
    { username: 'user19', password: 'password19' },
    { username: 'user20', password: 'password20' },
    { username: 'user21', password: 'password21' },
    { username: 'user22', password: 'password22' },
    { username: 'user23', password: 'password23' },
    { username: 'user24', password: 'password24' },
    { username: 'user25', password: 'password25' },
    { username: 'user26', password: 'password26' },
    { username: 'user27', password: 'password27' },
    { username: 'user28', password: 'password28' },
    { username: 'user29', password: 'password29' },
    { username: 'user30', password: 'password30' },
    { username: 'admin', password: 'adminpassword' }
];

document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('errorMessage');
    
    const account = accounts.find(acc => acc.username === username && acc.password === password);
    
    if (account) {
        localStorage.setItem('loggedInUser', username);
        window.location.href = 'table.html';
    } else {
        errorMessage.style.display = 'block';
        errorMessage.textContent = 'Invalid username or password';
    }
});

window.onload = function() {
    const loggedInUser = localStorage.getItem('loggedInUser');
    if (loggedInUser) {
        window.location.href = 'table.html';
    }
};
