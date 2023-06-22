import receitas from './utils/allrecipes-receitas.json' assert {type: 'json'};

console.log(receitas[0]);


//Load nas receitas
let quadroReceitas = document.querySelector(".quadrodereceitas");

//mapeia cada receita
receitas.map((receita, key)=>{
    //Cria elemento por elemento que tem na div de cada receita
    let div = document.createElement('div')
    div.addEventListener('click',()=>{handleMoveToRecipes(key)})
    
    let receitaDiv = document.createElement('div')
    receitaDiv.id = `receita-${key}` //Id para identificação do conteúdo
    receitaDiv.className = 'r1' //coloquei a classe que tava no HTML se mudar la, é necessário mudar aqui para ir o CSS
    
    let text = document.createElement('p');
    text.innerHTML = receita.title;
    
    //adiciona os elementos no html
    receitaDiv.appendChild(text);
    div.appendChild(receitaDiv);
    quadroReceitas.appendChild(div);
})

function handleMoveToRecipes(key){
    //essa key vai ser utilizada para passar por parametro para a página de cada receita
    window.location.href = "Receita.html";
}