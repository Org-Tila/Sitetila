let currentPage = 0;

function showPage(page) {
  currentPage = page;
  document.getElementById("storyText").innerHTML = texts[page];

  // Atualiza os botões de página (ativa só os correspondentes às páginas 1,2,3,4)
  document.querySelectorAll(".page-btn").forEach((btn, index) => {
    btn.classList.toggle("active", index + 1 === page); // botão 01 = page 1
  });
}

function previousPage() {
  if (currentPage > 0) showPage(currentPage - 1);
}

function nextPage() {
  if (currentPage < texts.length - 1) showPage(currentPage + 1);
}

// Mostra a tela de parabéns (página 0) ao iniciar
const texts = [
  `Era uma vez, há muito tempo, um rei e uma rainha jovens, poderosos e ricos, mas pouco felizes, porque não tinham concretizado maior sonho deles: terem filhos.<br/>
— Se pudéssemos ter um filho! — suspirava o rei.<br>
— E se Deus quisesse, que nascesse uma menina! —animava-se a rainha.<br>
— E por que não gêmeos? — acrescentava o rei.<br>
Mas os filhos não chegavam, e o casal real ficava cada vez mais triste. Não se alegravam nem com os bailes da corte, nem com as caçadas, nem com os gracejos dos bufões, e em todo o castelo reinava uma grande melancolia.<br>
Mas, numa tarde de verão, a rainha foi banhar-se no riacho que passava no fundo do parque real. E, de repente, pulou para fora da água uma rãzinha.<br>
— Majestade, não fique triste, o seu desejo se realizará logo: Antes que passe um ano a senhora dará à luz uma menina.<br>
E a profecia da rã se concretizou, e meses depois a rainha deu a luz a uma linda menina.<br>
O rei, que estava tão feliz, deu uma grande festa de batizado para a pequena princesa que se chamava Aurora.<br>
Convidou uma multidão de súditos: parentes, amigos, nobres do reino e, como convidadas de honra, as treze fadas que viviam nos confins do reino. Mas, quando os mensageiros iam saindo com os convites, o camareiro-mor correu até o rei, preocupadíssimo.
— Majestade, as fadas são treze, e nós só temos doze pratos de ouro. O que faremos? A fada que tiver de comer no prato de prata, como os outros convidados, poderá se ofender. E uma fada ofendida…<br>
O rei refletiu longamente e decidiu:<br>
— Não convidaremos a décima terceira fada — disse, resoluto. — Talvez nem saiba que nasceu a nossa filha e que daremos uma festa. Assim, não teremos complicações. Partiram somente doze mensageiros, com convites para doze fadas, conforme o rei resolvera.<br>
No dia da festa, cada uma das fadas chegou perto do berço em que dormia a princesa Aurora e ofereceu à recém-nascida um presente maravilhoso.
— Será a mais bela moça do reino — disse a primeira fada, debruçando-se sobre o berço.<br>
— E a de caráter mais justo — acrescentou a segunda.<br>
— Terá riquezas a perder de vista — proclamou a terceira.<br>
— Ninguém terá o coração mais caridoso que o seu — afirmou a quarta.<br>
— A sua inteligência brilhará como um sol — comentou a quinta.
Onze fadas já tinham passado em frente ao berço e dado a pequena princesa um dom; faltava somente uma (entretida em tirar uma mancha do vestido, no qual um garçom desajeitado tinha virado uma taça de sorvete) quando chegou a décima terceira, aquela que não tinha sido convidada por falta de pratos de ouro.<br>
Estava com a expressão muito sombria e ameaçadora, terrivelmente ofendida por ter sido excluída. Lançou um olhar maldoso para a princesa Aurora, que dormia tranqüila, e disse: — Aos quinze anos a princesa vai se ferir com o fuso de uma roca e morrerá.
E foi embora, deixando um silêncio desanimador e os pais desesperados.<br>
Então aproximou-se a décima segunda fada, que devia ainda oferecer seu presente.<br>
— Não posso cancelar a maldição que agora atingiu a princesa. Tenho poderes só para modificá-la um pouco. Por isso, Aurora não morrerá; dormirá por cem anos, até a chegada de um príncipe que a acordará com um beijo.`,

  `Passados os primeiros momentos de espanto e temor, o rei, decidiu tomar providências, mandou queimar todas as rocas do reino. E, daquele dia em diante, ninguém mais fiava, nem linho, nem algodão, nem lã. Ninguém além da torre do castelo.<br>
Aurora crescia, e os presentes das fadas, apesar da maldição, estavam dando resultados. Era bonita, boa, gentil e caridosa, os súditos a adoravam.<br>
No dia em que completou quinze anos, o rei e a rainha estavam ausentes, ocupados numa partida de caça. Talvez, quem sabe, em todo esse tempo tivessem até esquecido a profecia da fada malvada.<br>
A princesa Aurora, porém, estava se aborrecendo por estar sozinha e começou a andar pelas salas do castelo. Chegando perto de um portãozinho de ferro que dava acesso à parte de cima de uma velha torre, abriu-o, subiu a longa escada e chegou, enfim, ao quartinho.<br>
Ao lado da janela estava uma velhinha de cabelos brancos, fiando com o fuso uma meada de linho. A garota olhou, maravilhada. Nunca tinha visto um fuso.<br>
— Bom dia, vovozinha.<br>
— Bom dia a você, linda garota.<br>
— O que está fazendo? Que instrumento é esse?<br>
Sem levantar os olhos do seu trabalho, a velhinha respondeu com ar bonachão:<br>
— Não está vendo? Estou fiando!<br>
A princesa, fascinada, olhava o fuso que girava rapidamente entre os dedos da velhinha.<br>
— Parece mesmo divertido esse estranho pedaço de madeira que gira assim rápido. Posso experimentá-lo também? Sem esperar resposta, pegou o fuso. E, naquele instante, cumpriu-se o feitiço. Aurora furou o dedo e sentiu um grande sono. Deu tempo apenas para deitar-se na cama que havia no aposento, e seus olhos se fecharam.<br>
Na mesma hora, aquele sono estranho se difundiu por todo o palácio.<br>Adormeceram no trono o rei e a rainha, recém-chegados da partida de caça.<br>Adormeceram os cavalos na estrebaria, as galinhas no galinheiro, os cães no pátio e os pássaros no telhado.<br>
Adormeceu o cozinheiro que assava a carne e o servente que lavava as louças; adormeceram os cavaleiros com as espadas na mão e as damas que enrolavam seus cabelos.<br>
Também o fogo que ardia nos braseiros e nas lareiras parou de queimar, parou também o vento que assobiava na floresta. Nada e ninguém se mexia no palácio, mergulhado em profundo silêncio.<br>
Em volta do castelo surgiu rapidamente uma extensa mata. Tão extensa que, após alguns anos, o castelo ficou oculto.<br>
Nem os muros apareciam, nem a ponte levadiça, nem as torres, nem a bandeira hasteada que pendia na torre mais alta. Nas aldeias vizinhas, passava de pai para filho a história da princesa Aurora, a bela adormecida que descansava, protegida pelo bosque cerrado. A princesa Aurora, a mais bela, a mais doce das princesas, injustamente castigada por um destino cruel.<br>
Alguns cavalheiros, mais audaciosos, tentaram sem êxito chegar ao castelo. A grande barreira de mato e espinheiros, cerrada e impenetrável, parecia animada por vontade própria: os galhos avançavam para cima dos coitados que tentavam passar: seguravam-nos, arranhavam-nos até fazê-los sangrar, e fechavam as mínimas frestas.
Aqueles que tinham sorte conseguiam escapar, voltando em condições lastimáveis, machucados e sangrando. Outros, mais teimosos, sacrificavam a própria vida.<br>
Um dia, chegou nas redondezas um jovem príncipe, bonito e corajoso. Soube pelo bisavô a história da bela adormecida que, desde muitos anos, tantos jovens a procuravam em vão alcançar.`,

  `— Quero tentar também — disse o príncipe aos habitantes de uma aldeia pouco distante do castelo.<br>
Aconselharam-no a não ir. — Ninguém nunca conseguiu!<br>
— Outros jovens, fortes e corajosos como você, falharam…<br>
— Alguns morreram entre os espinheiros…<br></br>
— Desista!<br></br>
Muitos foram, os que tentarem desanimá-lo. No dia em que o príncipe decidiu satisfazer a sua vontade se completavam justamente os cem anos da festa do batizado e das predições das fadas. Chegara, finalmente, o dia em que a bela adormecida poderia despertar.<br></br>
Quando o príncipe se encaminhou para o castelo viu que, no lugar das árvores e galhos cheios de espinhos, se estendiam aos milhares, bem espessas, enormes carreiras de flores perfumadas. E mais, aquela mata de flores cheirosas se abriu diante dele, como para encorajá-lo a prosseguir; e voltou a se fechar logo, após sua passagem.<br></br>
O príncipe chegou em frente ao castelo. A ponte elevadiça estava abaixada e dois guardas dormiam ao lado do portão, apoiados nas armas. No pátio havia um grande número de cães, alguns deitados no chão, outros encostados nos cantos; os cavalos que ocupavam as estrebarias dormiam em pé.<br></br>
Nas grandes salas do castelo reinava um silêncio tão profundo que o príncipe ouvia sua própria respiração, um pouco ofegante, ressoando naquela quietude. A cada passo do príncipe se levantavam nuvens de poeira.<br></br>Salões, escadarias, corredores, cozinha… Por toda parte, o mesmo espetáculo: gente que dormia nas mais estranhas posições.<br></br>
O príncipe perambulou por longo tempo no castelo. Enfim, achou o portãozinho de ferro que levava à torre, subiu a escada e chegou ao quartinho em que dormia A princesa Aurora.<br></br>
A princesa estava tão bela, com os cabelos soltos, espalhados nos travesseiros, o rosto rosado e risonho. O príncipe ficou deslumbrado. Logo que se recobrou se inclinou e deu-lhe um beijo.<br></br>
Imediatamente, Aurora despertou, olhou par ao príncipe e sorriu. Todo o reino também despertara naquele instante. Acordou também o cozinheiro que assava a carne; o servente, bocejando, continuou lavando as louças, enquanto as damas da corte voltavam a enrolar seus cabelos.<br></br>
O fogo das lareiras e dos braseiros subiu alto pelas chaminés, e o vento fazia murmurar as folhas das árvores. A vida voltara ao normal. Logo, o rei e a rainha correram à procura da filha e, ao encontrá-la, chorando, agradeceram ao príncipe por tê-la despertado do longo sono de cem anos.<br></br>
O príncipe, então, pediu a mão da linda princesa em casamento que, por sua vez, já estava apaixonada pelo seu valente salvador.
Eles, então, se casaram e viveram felizes para sempre!`,

  `<div style="text-align: center; margin-top: 30px;">
    <p><strong>Parabéns, você concluiu essa leitura, abra seu prêmio</strong></p>
    <img src="/img/Presente.png" alt="Presente" style="width: 150px; margin: 20px auto;" />
    <br />
    <button onclick="location.href='index.html'" style="background-color: #2a00b8; color: white; border: none; padding: 10px 20px; border-radius: 10px; cursor: pointer;">
      Voltar ao Home
    </button>
  </div>`,
];
showPage(0);
