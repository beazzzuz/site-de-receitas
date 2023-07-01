import receitas from './utils/allrecipes-receitas.json' assert {type: 'json'};

//Pega o parametro da URL

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);

//Id que está vindo quando voce clica na página
//esse id na verdade é o key(valor em que aparece) no map do arquivo js da página principal
const id = urlParams.get('id');

//pegando exatamente o produto com esse id:

let receitaDados;


receitas.map((receita, key)=>{
    if(key == id){
        //agora pode trabalhar com os dados da receita pela variavel receitaDados
        receitaDados = receita;
    }
})
console.log(receitaDados);

    const tituloDiv = document.querySelector(".titulo");
    const nomeReceita = document.createElement('h1');
    nomeReceita.innerHTML = receitaDados.title;
    tituloDiv.appendChild(nomeReceita);


    const receitaImg = document.createElement('ImgReceita');
    receitaImg.src=receita.photo_url;
    const imgDiv = document.createElement('div');
    imgDiv.Idname = 'FotoReceita';
    imgDiv.appendChild(receitaImg);

