const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);

const type = urlParams.get('id');


async function fetchData(){
    await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${type}`).then(response => response.json())
    .then((data)=>{
        const receitaDados=data.meals;
        console.log(receitaDados); 
        loadItens(receitaDados);
    })
    .catch(error => {
        console.log('Ocorreu um erro:', error);
    });
}

fetchData();

const title = document.querySelector(".title");
title.innerHTML = type;

function loadItens(receitaDados){
    receitaDados.map((receita)=>{


        //hr
        const hr = document.createElement("hr");
        hr.setAttribute('size', '1');
        hr.setAttribute('width', 'auto');
        hr.setAttribute('align', 'center');

        //section
        const section = document.createElement('section');
        section.className = "lista";

        //divImg
        const imgdiv = document.createElement('div');
        imgdiv.className="imagem_div";

        //img 
        const img = document.createElement('img');
        img.src = receita.strMealThumb;
        img.alt = receita.strMeal;

        //sectionDivTime
        const sectionDivTime = document.createElement('section');
        sectionDivTime.className="div_time";

        //divTime
        const divTime = document.createElement("div");
        divTime.className = 'time'

        //svg
        const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        svg.setAttribute("xmlns", "http://www.w3.org/2000/svg");
        svg.setAttribute("width", "16");
        svg.setAttribute("height", "16");
        svg.setAttribute("viewBox", "0 0 16 16");

        //path
        const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
        path.setAttribute("d", "M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0ZM1.5 8a6.5 6.5 0 1 0 13 0 6.5 6.5 0 0 0-13 0Zm7-3.25v2.992l2.028.812a.75.75 0 0 1-.557 1.392l-2.5-1A.751.751 0 0 1 7 8.25v-3.5a.75.75 0 0 1 1.5 0Z");

        //pTime
        const pTime = document.createElement("div");
        pTime.className="p_time"

        //ptimeP
        const pTimeP = document.createElement('p');
        pTimeP.innerHTML="01:30";

        //divTexto
        const textoDiv = document.createElement("div");
        textoDiv.className = "texto_div";

        //pTexto
        const textoP = document.createElement("p");
        textoP.className = "p_texto";
        textoP.innerHTML = receita.strMeal

        //button
        const button = document.createElement('button');
        button.className="keepReading";

        //buttonP
        const buttonP = document.createElement("p");
        buttonP.innerHTML=" See more"


        const types = document.querySelector('.types');
        types.appendChild(section)

        svg.appendChild(path);
        divTime.appendChild(svg);
        pTime.appendChild(pTimeP);

        sectionDivTime.appendChild(divTime);
        sectionDivTime.appendChild(pTime)

        imgdiv.appendChild(img);
        imgdiv.appendChild(sectionDivTime);

        //
        button.appendChild(buttonP);
        textoDiv.appendChild(textoP);
        textoDiv.appendChild(button);
        
        
        section.appendChild(imgdiv);
        section.appendChild(textoDiv);

        types.appendChild(hr);

        
        button.addEventListener("click",()=>{
            handleMoveToRecipes(receita.idMeal);
        })

    })
    function handleMoveToRecipes(key) {
        //essa key vai ser utilizada para passar por parametro para a página de cada receita
        window.location.href = `Receita.html?id=${key}`;
      }
      
}