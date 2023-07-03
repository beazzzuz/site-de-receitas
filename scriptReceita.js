// import receitas from './utils/allrecipes-receitas.json' assert {type: 'json'};

//Pega o parametro da URL

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);

//Id que está vindo quando voce clica na página
//esse id na verdade é o key(valor em que aparece) no map do arquivo js da página principal
const id = urlParams.get('id');

//pegando exatamente o produto com esse id:

async function fetchData(){
    await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`).then(response => response.json())
    .then((data)=>{
        const receitaDados=data.meals[0];
        console.log(receitaDados); 
        loadItens(receitaDados);
    })
    .catch(error => {
        console.log('Ocorreu um erro:', error);
    });
}

fetchData();
console.log('oi');

function loadItens(receitaDados){
    const tituloDiv = document.querySelector(".titulo");
    const nomeReceita = document.createElement('h1');
    console.log(receitaDados.strMeal);
    nomeReceita.innerHTML = receitaDados.strMeal;
    tituloDiv.appendChild(nomeReceita);
    
    const receitaImg = document.getElementById('receitaImg');
    receitaImg.src=receitaDados.strMealThumb;
    
    const receitasOl = document.querySelector('.ingredientesOl');

    //essa api retorna as receitas fora de um array, então vou ter que contornar isso

    for(let i=1; i<=20;i++){
        let ingredientKey = 'strIngredient' + i;
        let ingredient = receitaDados[ingredientKey];
        if (ingredient != ""){
            const ingredientLi = document.createElement('li');
            ingredientLi.innerHTML = ingredient;
            receitasOl.appendChild(ingredientLi);
        }
    }

}

// const preparoOl = document.querySelector(".preparoOl");
// receitaDados.instructions.map((instructions, key)=>{
//     const instructionDiv = document.createElement('div');
//     if(key%2==0){
//         instructionDiv.className = "esquerda";
//     }else{
//         instructionDiv.className = "direita";
//     }
//     const instructionLi = document.createElement('li');
//     instructionLi.innerHTML = "Modo de preparo"
//     const br = document.createElement('br');
//     const p = document.createElement('p');
//     p.innerHTML = instructions;

//     instructionDiv.appendChild(instructionLi);
//     instructionDiv.appendChild(br);
//     instructionDiv.appendChild(p);
//     preparoOl.appendChild(instructionDiv);
// })
