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

const tituloDiv = document.querySelector(".titulo");
const nomeReceita = document.createElement('h1');
nomeReceita.innerHTML = receitaDados.title;
tituloDiv.appendChild(nomeReceita);


const receitaImg = document.getElementById('receitaImg');
receitaImg.src=receitaDados.photo_url;


const receitasOl = document.querySelector('.ingredientesOl');
receitaDados.ingredients.map((ingredient, key)=>{
    const ingredientLi = document.createElement('li');
    ingredientLi.innerHTML = ingredient;
    receitasOl.appendChild(ingredientLi);
})


const preparoOl = document.querySelector(".preparoOl");
receitaDados.instructions.map((instructions, key)=>{
    const instructionDiv = document.createElement('div');
    if(key%2==0){
        instructionDiv.className = "esquerda";
    }else{
        instructionDiv.className = "direita";
    }
    const instructionLi = document.createElement('li');
    instructionLi.innerHTML = "Step"
    const br = document.createElement('br');
    const p = document.createElement('p');
    p.innerHTML = instructions;

    instructionDiv.appendChild(instructionLi);
    instructionDiv.appendChild(br);
    instructionDiv.appendChild(p);
    preparoOl.appendChild(instructionDiv);
})


console.log(receitaDados);