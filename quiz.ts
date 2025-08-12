class Pergunta {
  constructor(
    public pergunta: string,
    public opcoes: string[],
    public respostaCorreta: number
  ) {}
}

class Temas {
  constructor(
    public nome: string,
    public perguntas: Pergunta[]
  ) {}
}

// =====================
// Temas e Perguntas
// =====================
let cinemaClassico: Temas = new Temas("Tema 1: Cinema Clássico", [
  new Pergunta("Qual é o nome do navio no filme \"Titanic\"?", ["Queen Mary", "Titanic", "Britannic", "Poseidon"], 1),
  new Pergunta("Quem interpreta Forrest Gump?", ["Brad Pitt", "Tom Cruise", "Tom Hanks", "Leonardo DiCaprio"], 2),
  new Pergunta("Em que ano foi lançado \"O Poderoso Chefão\"?", ["1972", "1980", "1965", "1990"], 0),
  new Pergunta("Qual diretor é conhecido por \"Psicose\" e \"Os Pássaros\"?", ["Stanley Kubrick", "Alfred Hitchcock", "Steven Spielberg", "Francis Ford Coppola"], 1),
  new Pergunta("\"Casablanca\" se passa durante qual guerra?", ["Primeira Guerra Mundial", "Guerra Fria", "Segunda Guerra Mundial", "Guerra do Vietnã"], 2),
  new Pergunta("Quem é o vilão em \"O Silêncio dos Inocentes\"?", ["Hannibal Lecter", "Norman Bates", "Darth Vader", "Jack Torrance"], 0),
  new Pergunta("Qual filme tem a frase \"Frankly, my dear, I don't give a damn\"?", ["Casablanca", "E o Vento Levou", "Cidadão Kane", "Ben-Hur"], 1),
  new Pergunta("\"A Noviça Rebelde\" é ambientado em qual país?", ["Alemanha", "França", "Áustria", "Suíça"], 2),
  new Pergunta("Quantos filmes compõem a trilogia original de Star Wars?", ["3", "4", "6", "9"], 0),
  new Pergunta("Qual filme venceu o Oscar de Melhor Filme em 1994?", ["Um Sonho de Liberdade", "Forrest Gump", "Pulp Fiction", "Quatro Casamentos e um Funeral"], 1)
]);

let literatura: Temas = new Temas("Tema 2: Literatura e Livros Famosos", [
  new Pergunta("Quem escreveu \"Dom Quixote\"?", ["William Shakespeare", "Miguel de Cervantes", "Camões", "Machado de Assis"], 1),
  new Pergunta("Personagem principal de \"O Pequeno Príncipe\":", ["Um aviador", "Um rei", "Um menino de outro planeta", "Um cientista"], 2),
  new Pergunta("Autor de \"1984\" e \"A Revolução dos Bichos\":", ["George Orwell", "Aldous Huxley", "Ray Bradbury", "Arthur C. Clarke"], 0),
  new Pergunta("Em qual país nasceu Harry Potter?", ["EUA", "Inglaterra", "Escócia", "Irlanda"], 1),
  new Pergunta("Personagem que vive em Baker Street, 221B:", ["Dr. House", "Sherlock Holmes", "James Bond", "Hercule Poirot"], 1),
  new Pergunta("\"Romeu e Julieta\" é uma obra de:", ["Victor Hugo", "William Shakespeare", "Dante Alighieri", "Oscar Wilde"], 1),
  new Pergunta("Qual dessas é uma obra de Machado de Assis?", ["Iracema", "Dom Casmurro", "Senhora", "O Guarani"], 1),
  new Pergunta("Livro onde animais assumem o controle de uma fazenda:", ["A Revolução dos Bichos", "A Ilha do Dr. Moreau", "O Senhor das Moscas", "Moby Dick"], 0),
  new Pergunta("Quem é o autor de \"As Crônicas de Nárnia\"?", ["C.S. Lewis", "J.K. Rowling", "Tolkien", "Rick Riordan"], 0),
  new Pergunta("Nome do detetive criado por Agatha Christie:", ["Sherlock Holmes", "Poirot", "Dupin", "Watson"], 1)
]);

let curiosidades: Temas = new Temas("Tema 3: Curiosidades Gerais", [
  new Pergunta("Qual é o maior animal terrestre?", ["Elefante-africano", "Urso-pardo", "Rinoceronte", "Girafa"], 0),
  new Pergunta("Qual é o metal líquido à temperatura ambiente?", ["Ferro", "Mercúrio", "Prata", "Estanho"], 1),
  new Pergunta("Quantos planetas existem no sistema solar (oficialmente)?", ["8", "9", "7", "10"], 0),
  new Pergunta("Em que país se localiza a Torre Eiffel?", ["Itália", "França", "Inglaterra", "Alemanha"], 1),
  new Pergunta("Qual é o menor osso do corpo humano?", ["Esterno", "Fêmur", "Estribo", "Rádio"], 2),
  new Pergunta("Qual gás os humanos respiram?", ["Hidrogênio", "Gás Carbônico", "Oxigênio", "Nitrogênio"], 2),
  new Pergunta("O Sol é uma:", ["Estrela", "Planeta", "Lua", "Galáxia"], 0),
  new Pergunta("Qual país tem o formato de uma bota?", ["Grécia", "Espanha", "Itália", "México"], 2),
  new Pergunta("Qual é a capital da Austrália?", ["Sydney", "Melbourne", "Canberra", "Brisbane"], 2),
  new Pergunta("Quem pintou a \"Mona Lisa\"?", ["Van Gogh", "Leonardo da Vinci", "Picasso", "Michelangelo"], 1)
]);

let jogos: Temas = new Temas("Tema 4: Jogos e Cultura Gamer", [
  new Pergunta("Qual personagem é conhecido por resgatar princesas em jogos?", ["Sonic", "Mario", "Link", "Donkey Kong"], 1),
  new Pergunta("\"The Legend of Zelda\" é exclusivo de qual empresa?", ["Sony", "Microsoft", "Nintendo", "Sega"], 2),
  new Pergunta("Em \"Minecraft\", o que explode quando se aproxima de você?", ["Creeper", "Zumbi", "Slime", "Esqueleto"], 0),
  new Pergunta("Qual é o nome do criador do jogo \"Tetris\"?", ["Alexey Pajitnov", "Shigeru Miyamoto", "Markus Persson", "Gabe Newell"], 0),
  new Pergunta("O jogo \"Among Us\" se passa em:", ["Um castelo", "Uma nave espacial", "Um navio pirata", "Uma prisão"], 1),
  new Pergunta("Qual é a arma inicial clássica em \"Counter-Strike\"?", ["AK-47", "Glock", "Desert Eagle", "UMP"], 1),
  new Pergunta("Personagem principal da série \"Halo\":", ["Master Chief", "Shepard", "Samus", "Kratos"], 0),
  new Pergunta("Jogo onde se usa cartas para batalhar:", ["League of Legends", "Clash Royale", "Fortnite", "Valorant"], 1),
  new Pergunta("Qual desses é um battle royale?", ["GTA V", "The Sims", "Fortnite", "FIFA"], 2),
  new Pergunta("No universo de \"Pokémon\", o Pikachu é de qual tipo?", ["Fogo", "Voador", "Elétrico", "Planta"], 2)
]);

const listaTemas: Temas[] = [cinemaClassico, literatura, curiosidades, jogos];

// =====================
// Função do jogo
// =====================
function iniciarQuiz() {
  const nomeJogador = prompt("Qual seu nome?") || "Jogador";

  while (true) {
    // Monta lista de temas
    const listaFormatada = listaTemas
      .map((t, i) => `${i + 1} - ${t.nome}`)
      .join("\n");

    // Pergunta o tema
    let escolha = prompt(`Olá ${nomeJogador}! Escolha um tema (0 para sair):\n${listaFormatada}`);

    if (!escolha || escolha === "0") break; // Sai do jogo

    const temaIndex = Number(escolha) - 1;

    if (!listaTemas[temaIndex]) {
      alert("Tema inválido! Tente novamente.");
      continue;
    }

    let pontos = 0;

    for (const pergunta of listaTemas[temaIndex].perguntas) {
      const opcoesFormatadas = pergunta.opcoes
        .map((op, i) => `${i + 1} - ${op}`)
        .join("\n");

      const resposta = prompt(
        pergunta.pergunta + "\n" +
        opcoesFormatadas +
        "\n0 - Sair do tema"
      );

      if (!resposta || resposta === "0") break; // Sai do tema

      if (Number(resposta) - 1 === pergunta.respostaCorreta) {
        alert("✅ Acertou!");
        pontos++;
      } else {
        alert("❌ Errou! Resposta certa: " + pergunta.opcoes[pergunta.respostaCorreta]);
      }
    }

    alert(`${nomeJogador}, você fez ${pontos} pontos no tema "${listaTemas[temaIndex].nome}".`);

    if (!confirm("Quer jogar outro tema?")) break;
  }

  alert(`🎉 Obrigado por jogar, ${nomeJogador}!`);
}

// =====================
// Introdução e início
// =====================
alert("🎯 Bem-vindo ao Quiz Divertido!\n\nTeste seus conhecimentos e veja quantos pontos consegue fazer!");
alert("Você responderá perguntas de diferentes temas e ganhará pontos pelas respostas corretas.");
alert("Pronto para começar?");
iniciarQuiz();
