// Открытие модального окна авторизации
document.getElementById('login-modal-btn').addEventListener('click', function() {
    document.getElementById('login-modal').style.display = 'block';
});

// Открытие модального окна регистрации
document.getElementById('register-modal-btn').addEventListener('click', function() {
    document.getElementById('register-modal').style.display = 'block';
});

// Закрытие модальных окон при нажатии на крестик
document.querySelectorAll('.close').forEach(function(closeButton) {
    closeButton.addEventListener('click', function() {
        this.closest('.modal').style.display = 'none';
    });
});

// Закрытие модальных окон при клике вне контента
window.addEventListener('click', function(event) {
    if (event.target.classList.contains('modal')) {
        event.target.style.display = 'none';
    }
});
