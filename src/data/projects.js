const projects = [
    {   
        title: {
            "en-us": "Connect 4",
            "pt-br": "Ligue 4"
        },
        desc: {
            "en-us": "A web version of the game Connect 4, it can be played against an AI or a friend",
            "pt-br": "A versão web do jogo Ligue 4, pode ser jogado contra uma IA ou contra um amigo"
        },
        url: "https://brenomorim.github.io/lig4/",
        imgUrl: "https://raw.githubusercontent.com/BrenoMorim/lig4/main/imagens/pagina-jogo.png?raw=true",
        area: "front-end"
    },
    {   
        title: {
            "en-us": "Brazilian financial market analysis",
            "pt-br": "Análise do mercado financeiro brasileiro"
        },
        desc: {
            "en-us": "A statistical research about the brazilian financial market during the pandemic",
            "pt-br": "Uma pesquisa estatística do mercado financeiro brasileiro durante a pandemia"
        },
        url: "https://github.com/BrenoMorim/mercado-financeiro-na-pandemia",
        imgUrl: "https://github.com/BrenoMorim/mercado-financeiro-na-pandemia/blob/main/graficos/ibovespa.png?raw=true",
        area: "data science"
    },
    {   
        title: {
            "en-us": "HangMan",
            "pt-br": "HangMan"
        },
        desc: {
            "en-us": "A hangman mobile game, available in english, portuguese and spanish",
            "pt-br": "Um jogo da forca mobile, disponível em inglês, português e espanhol"
        },
        url: "https://github.com/BrenoMorim/hangman",
        imgUrl: "https://github.com/BrenoMorim/hangman/blob/main/imagem-projeto.png?raw=true",
        area: "mobile"
    },
    {   
        title: {
            "en-us": "ZipZop",
            "pt-br": "ZipZop"
        },
        desc: {
            "en-us": "My CS50 final project, a messaging app with WebSockets",
            "pt-br": "Meu projeto final do curso CS50, um app de mensagens com WebSockets"
        },
        url: "https://github.com/BrenoMorim/zipzop",
        imgUrl: "https://github.com/BrenoMorim/zipzop/raw/main/project-images/home-logged.png?raw=true",
        area: "back-end"
    },
    {   
        title: {
            "en-us": "Alura Geek",
            "pt-br": "Alura Geek"
        },
        desc: {
            "en-us": "A geek virtual store developed with Vue.js and used for one of the Front-end challenges of Alura",
            "pt-br": "Uma loja virtual de produtos Geek feita com Vue.js e baseada em um dos desafios de Front-end da Alura"
        },
        url: "https://github.com/BrenoMorim/alura-geek",
        imgUrl: "https://github.com/BrenoMorim/alura-geek/raw/main/paginas/detalhes-produto.png?raw=true",
        area: "front-end"
    },
    {   
        title: {
            "en-us": "HTML and CSS Summary",
            "pt-br": "Resumo HTML e CSS"
        },
        desc: {
            "en-us": "A web page containing information about HTML, CSS and web accessibility",
            "pt-br": "Páginas web com conteúdos sobre HTML, CSS e acessibilidade web"
        },
        url: "https://brenomorim.github.io/resumo-html-css/",
        imgUrl: "https://github.com/BrenoMorim/resumo-html-css/raw/main/imagem-do-projeto.png?raw=true",
        area: "front-end"
    },
    {   
        title: {
            "en-us": "Run away She She",
            "pt-br": "Foge foge She She"
        },
        desc: {
            "en-us": "A web game like PacMan, where the main character is my friend's cat, the cat's goal is to run away from me and my friend while collecting the food",
            "pt-br": "Um jogo web estilo PacMan, sendo o personagem principal o gato de uma amiga, o objetivo do gato é fugir de mim e dela enquanto come as rações"
        },
        url: "https://foge-foge-she-she.vercel.app/",
        imgUrl: "https://github.com/BrenoMorim/foge-foge-she-she/raw/main/imagens/pagina-jogo.png",
        area: "front-end"
    },
    {   
        title: {
            "en-us": "Gender unequality in Brazil",
            "pt-br": "Desigualdade de gênero no Brasil"
        },
        desc: {
            "en-us": "A statistical research about gender unequality in Brazil, considering the difference in income and study between women and men ",
            "pt-br": "Uma pesquisa estatística sobre desigualdade de gênero no Brasil, considerando a diferença em renda e estudo entre homens e mulheres"
        },
        url: "https://github.com/BrenoMorim/desigualdade-de-genero",
        imgUrl: "https://github.com/BrenoMorim/desigualdade-de-genero/raw/main/imagem-do-projeto.png?raw=true",
        area: "data science"
    },
    {   
        title: {
            "en-us": "Simplewpps",
            "pt-br": "Simplewpps"
        },
        desc: {
            "en-us": "Rest API that can be used to share and save wallpapers, made with Java and Spring",
            "pt-br": "Uma API Rest para salvar e compartilhar wallpapers, desenvolvida com Java e Spring"
        },
        url: "https://github.com/BrenoMorim/simplewpps-back-end",
        imgUrl: "https://github.com/BrenoMorim/simplewpps-back-end/raw/main/imagem-do-projeto.png?raw=true",
        area: "back-end"
    },
    {   
        title: {
            "en-us": "Breno's confectionery",
            "pt-br": "Confeitaria do Breno"
        },
        desc: {
            "en-us": "An online confectionery developed in Python with Django",
            "pt-br": "Uma confeitaria online desenvolvida com Python e Django"
        },
        url: "https://github.com/BrenoMorim/confeitaria",
        imgUrl: "https://github.com/BrenoMorim/confeitaria/raw/main/imagens/index.png?raw=true",
        area: "back-end"
    },
    {   
        title: {
            "en-us": "Determinant calculator",
            "pt-br": "Calculadora de Determinantes"
        },
        desc: {
            "en-us": "A calculator that can be used to solve for the determinant of matrices up to the order 6",
            "pt-br": "Uma calculadora que pode ser usada para calcular o determinante de matrizes até a ordem 6"
        },
        url: "https://brenomorim.github.io/calculadora-determinantes/",
        imgUrl: "https://github.com/BrenoMorim/calculadora-determinantes/raw/main/imagem-do-projeto.png?raw=true",
        area: "front-end"
    },
];

export default projects;