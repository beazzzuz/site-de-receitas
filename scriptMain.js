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
    window.location.href = `Receita.html?id=${key}`;
}

//Carrossel

const carousel = document.querySelector('.carousel');
const carouselInner = carousel.querySelector('.carousel-inner');
const carouselItems = carousel.querySelectorAll('.carousel-item');
const prevBtn = carousel.querySelector('.prev-btn');
const nextBtn = carousel.querySelector('.next-btn');

let currentIndex = 0;
const itemWidth = carouselItems[0].offsetWidth;
const itemsPerScreen = 3;

function moveToIndex(index) {
  const position = -index * itemWidth * itemsPerScreen;
  carouselInner.style.transform = `translateX(${position}px)`;
  currentIndex = index;
}

function updateButtons() {
  prevBtn.disabled = currentIndex === 0;
  nextBtn.disabled = currentIndex >= Math.ceil(carouselItems.length / itemsPerScreen) - 1;
}

prevBtn.addEventListener('click', () => {
  if (currentIndex > 0) {
    moveToIndex(currentIndex - 1);
    updateButtons();
  }
});

nextBtn.addEventListener('click', () => {
  if (currentIndex < Math.ceil(carouselItems.length / itemsPerScreen) - 1) {
    moveToIndex(currentIndex + 1);
    updateButtons();
  }
});

updateButtons();
