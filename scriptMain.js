// import receitas from './utils/allrecipes-receitas.json' assert {type: 'json'};

// console.log(receitas[0]);


//Load nas receitas
let quadroReceitas = document.querySelector(".quadrodereceitas");

for(let i=0; i<10; i++){
  fetch('https://www.themealdb.com/api/json/v1/1/random.php')
  .then(response => response.json())
  .then(data => {
    const receita = data.meals[0];
    console.log(receita);

    //Cria elemento por elemento que tem na div de cada receita
    let receitaDiv = document.createElement('div')
    receitaDiv.addEventListener('click',()=>{handleMoveToRecipes(receita.idMeal)})

    receitaDiv.id = `receita-${receita.idMeal}` //Id para identificação do conteúdo
    receitaDiv.className = 'receitaDiv' //coloquei a classe que tava no HTML se mudar la, é necessário mudar aqui para ir o CSS
    
    const receitaText = document.createElement('p');
    receitaText.innerHTML = receita.strMeal;
    const receitaImg = document.createElement('img');
    receitaImg.src=receita.strMealThumb;

    const imgDiv = document.createElement('div');
    const propsDiv = document.createElement('div');

    imgDiv.className = 'imgDiv';
    propsDiv.className = 'propsDiv';
    
    //adiciona os elementos no html
    
    propsDiv.appendChild(receitaText);
    imgDiv.appendChild(receitaImg);

    receitaDiv.appendChild(imgDiv);
    receitaDiv.appendChild(propsDiv);
    quadroReceitas.appendChild(receitaDiv);

  })
  .catch(error => {
    console.log('Ocorreu um erro:', error);
  });
}

function handleMoveToRecipes(key){
    //essa key vai ser utilizada para passar por parametro para a página de cada receita
    window.location.href = `Receita.html?id=${key}`;
}

const typeButton = document.querySelector(".typeButton");
typeButton.addEventListener("click",()=>{
  handleMoveToTypes()
})

function handleMoveToTypes(){
  window.location.href = `Tipos.html`
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
