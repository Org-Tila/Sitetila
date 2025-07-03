const capitulos = [
  {
    imagem: "/img/historiaTila1.png",
    titulo: "Capítulo 01 - O Surgimento do Vilão",
    texto: `Dentro da colorida plataforma Tila, vivia Tilinho — um robozinho curioso, feito de metal reluzente e olhos que brilhavam como dois faróis de esperança.<br><br>
    Todos os dias, Tilinho cuidava para que os jogos, histórias e desafios estivessem sempre prontos para as crianças que chegavam, cheias de vontade de aprender e imaginar.<br><br>

    Mas numa noite silenciosa, algo estranho aconteceu. De uma fenda escura na parede de códigos e fios, surgiu uma criatura feita de telas rachadas, cabos enrolados como serpentes e um brilho vermelho nos olhos.
    Seu nome era Tecnotrix.<br><br>

    Tecnotrix era astuto e tinha um plano: prender as crianças em vídeos vazios, jogos repetidos e curtidas sem sentido, fazendo-as esquecer da imaginação.<br><br>
    Ele sabia que, se conseguisse, o Reino da Criatividade ficaria cinza, sem histórias novas, sem risadas e sem descobertas. `,
  },
  {
    imagem: "/img/historiaTila2.png",
    titulo: "Capítulo 02 - O Ataque ao Reino da Criatividade",
    texto: `Na manhã seguinte, Tilinho percebeu que algo estava errado.<br><br>
As cores da Trilha da Imaginação estavam sumindo, as histórias apareciam com páginas em branco, e os desafios criativos piscavam e desapareciam antes mesmo de começar.<br><br>

Tilinho andou pelos corredores digitais da Tila e encontrou crianças paradas, hipnotizadas olhando para uma tela que só repetia vídeos sem graça.<br>

No alto de uma torre de dados corrompidos, Tecnotrix gargalhava:<br><br>

— “Deixem de inventar, crianças! Fiquem aqui comigo, sem pensar, sem criar… só deslizando para baixo, para sempre!”
        `,
  },
  {
    imagem: "/img/historiaTila3.png",
    titulo: "Capítulo 03 - A Jornada do Tilinho",
    texto: `Tilinho sabia que precisava agir.<br><br>
Ele pegou a Chave da Curiosidade, que podia abrir portas para novas ideias.<br><br>
Levantou o Escudo da Alegria, que brilhava mais forte quando ele lembrava das risadas das crianças.<br><br>
E acendeu a Luz da Coragem, uma lanterna especial que espantava sombras de dúvida.<br><br>

Pelo caminho, enfrentou armadilhas montadas por Tecnotrix:<br><br>
	•	Túneis de distração, cheios de sons e imagens vazias para confundir quem passasse;<br><br>
	•	As Teias do Tédio, que prendiam quem não ousava imaginar;<br><br>
	•	E as Sombras da Pressa, que faziam todos esquecer por que estavam ali.<br><br>

Tilinho tropeçou, quase desistiu… mas lembrava de cada criança que sorria ao brincar, e isso reacendia sua chama interior.        `,
  },
  {
    imagem: "/img/historiaTila4.png",
    titulo: "Capítulo 04 - O Confronto",
    texto: `No centro do Reino da Criatividade, Tilinho encontrou Tecnotrix de frente.<br>
O vilão espalhava suas garras digitais, tentando apagar de vez a Última Ideia: uma pequena esfera brilhante, pulsando devagar.<br><br>

Tilinho gritou:<br>
— “As crianças não nasceram para só assistir, Tecnotrix! Elas nasceram para criar, imaginar e descobrir!”<br><br>

Tecnotrix soltou um rugido que fez tremer as paredes de códigos.<br>
Ele tentou envolver Tilinho com fios escuros de esquecimento. Mas Tilinho ergueu o Escudo da Alegria, que brilhou tão forte que espantou as sombras.<br><br>

Com a Chave da Curiosidade, Tilinho destrancou a caixa que guardava a Última Ideia — e, ao tocá-la, lembrou cada momento que já viveu com as crianças: risadas, perguntas, invenções, erros e acertos.<br><br>

A Luz da Coragem brilhou, e Tecnotrix, enfraquecido, sumiu num sopro de poeira digital.`,
  },
  {
    imagem: "/img/historiaTila5.png",
    titulo: "Capítulo 05 - O Retorno da Cor",
    texto: `As cores voltaram a brilhar.<br>
As histórias apareceram de novo, cheias de páginas novas para serem escritas.<br>
Os jogos piscavam, convidando todos a brincar, não só a olhar.<br><br>

Tilinho olhou ao redor, cansado, mas feliz:<br><br>

— “A tecnologia é parte da aventura, mas é só uma ferramenta. O que faz a diferença mesmo… é o que a gente cria com ela.”<br><br>

As crianças se libertaram do feitiço de Tecnotrix, voltaram a inventar, a desenhar, a rir.<br>
E o Reino da Criatividade ficou mais vivo do que nunca. `,
  },
];

let paginaAtual = 0;

function mostrarCapitulo(index) {
  const cap = capitulos[index];
  document.getElementById("capitulo-container").innerHTML = `
        <img src="${cap.imagem}" class="capitulo-img" alt="${cap.titulo}">
        <h2>${cap.titulo}</h2>
        <p>${cap.texto}</p>
      `;
  document.getElementById("contador").innerText = `${index + 1} / ${
    capitulos.length
  }`;
}

function nextPage() {
  if (paginaAtual < capitulos.length - 1) {
    paginaAtual++;
    mostrarCapitulo(paginaAtual);
  }
}

function previousPage() {
  if (paginaAtual > 0) {
    paginaAtual--;
    mostrarCapitulo(paginaAtual);
  }
}

window.onload = () => mostrarCapitulo(paginaAtual);
