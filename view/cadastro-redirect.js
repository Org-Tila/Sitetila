// Redireciona para a home ao enviar o cadastro
window.addEventListener('DOMContentLoaded', function() {
  var form = document.querySelector('form');
  if (form) {
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      window.location.href = 'home.html';
    });
  }
});
