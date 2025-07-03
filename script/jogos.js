document.addEventListener('DOMContentLoaded', () => {
    // Exemplo de interatividade futura:
    // const menuIcon = document.querySelector('.menu-icon');
    // const sidebar = document.querySelector('.sidebar');

    // if (menuIcon && sidebar) {
    //     menuIcon.addEventListener('click', () => {
    //         sidebar.classList.toggle('active'); // Adiciona/remove uma classe 'active' para mostrar/ocultar a sidebar
    //     });
    // }

    // Exemplo de controle de navegação de jogos (simples)
    const gameCards = document.querySelectorAll('.game-card');
    const navArrows = document.querySelectorAll('.nav-arrow');
    let currentIndex = 0;

    function showGameCard(index) {
        gameCards.forEach((card, i) => {
            card.style.display = (i === index) ? 'block' : 'none';
        });
    }

    if (gameCards.length > 0 && navArrows.length > 0) {
        // Mostra apenas o primeiro jogo por padrão
        showGameCard(currentIndex);

        navArrows.forEach(arrow => {
            arrow.addEventListener('click', (event) => {
                const direction = event.target.textContent === '>' ? 1 : -1;
                currentIndex = (currentIndex + direction + gameCards.length) % gameCards.length;
                showGameCard(currentIndex);
            });
        });
    }

    // Funcionalidade de "Visualizar"
    const viewButton = document.querySelector('.view-button');
    if (viewButton) {
        viewButton.addEventListener('click', () => {
            alert('Funcionalidade de Visualizar ainda não implementada.');
            // Aqui você pode redirecionar para uma página de detalhes ou abrir um modal
        });
    }

    // Funcionalidade do botão "Jogar"
    const playButtons = document.querySelectorAll('.play-button');
    playButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            const gameTitle = event.target.closest('.game-card').querySelector('img').alt.replace(' Game', '');
            alert(`Iniciando o jogo: ${gameTitle}`);
            // Aqui você pode iniciar a lógica do jogo
        });
    });

    // Funcionalidade de inscrição de email
    const emailArrowButton = document.querySelector('.email-arrow-button');
    const emailInput = document.querySelector('.email-signup input[type="email"]');
    if (emailArrowButton && emailInput) {
        emailArrowButton.addEventListener('click', () => {
            const email = emailInput.value;
            if (email) {
                alert(`Email "${email}" cadastrado para novidades!`);
                emailInput.value = ''; // Limpa o campo
            } else {
                alert('Por favor, informe seu email.');
            }
        });
    }
});