let canvas = document.getElementById("snake");
let context = canvas.getContext("2d");
let box = 32;
let snake = [];
snake[0] = {
    x: 8 * box,
    y: 8 * box
}
let direction = "right";

//direcionando a comida da cobrinha para locais aleatórios
let food = {
    x: Math.floor(Math.random() * 15 + 1) * box,
    y: Math.floor(Math.random() * 15 + 1) * box
}

function criarBG(){
    context.fillStyle = "lightgreen";
    context.fillRect(0, 0, 16 * box, 16 * box);
}

function criarCobrinha(){
    for (i=0; i < snake.length; i++){
        context.fillStyle="green";
        context.fillRect(snake[i].x, snake[i].y, box,box);
    }
}

//criando a comida da cobrinha
function drawFood(){
    context.fillStyle = "red";
    context.fillRect(food.x, food.y, box, box);
}


//transmitindo o toque da tecla para o jogo(evento)
document.addEventListener("keydown",update);

function update(event){
    //Aqui você impossibilita ela ir na direção ao contrário da cabeça dela
    if(event.keyCode == 37 && direction !="right") direction="left";
    if(event.keyCode == 38 && direction !="Down") direction="Up";
    if(event.keyCode == 39 && direction !="left") direction="right";
    if(event.keyCode == 40 && direction !="Up") direction="Down";
}

function iniciarJogo(){
     
    //Criando plano cartesiano atravessando as paredes
    if(snake[0].x > 15 * box && direction == "right") snake[0].x = 0;
    if(snake[0].x < 0 && direction == "left") snake[0].x = 16 * box;
    if(snake[0].y > 15 * box && direction == "Down") snake[0].y = 0;
    if(snake[0].y < 0 && direction == "Up") snake[0].y = 16 * box;
    
    criarBG();
    criarCobrinha();
    drawFood();

    //ponto de partida da cobrinha
    let snakeX = snake[0].x;
    let snakeY = snake[0].y;

    //coordenadas para o lado que a cobra vai
    if(direction == "right") snakeX +=box; 
    if(direction == "left") snakeX -=box; 

    if(direction == "Up") snakeY -=box; 
    if(direction == "Down") snakeY +=box; 

    // retirando o ultimo elemento da array
    snake.pop();

    //acrescetando um elemento a frente(cabeça)
    let newHead={
        x: snakeX,
        y: snakeY
    }
    snake.unshift(newHead);
}

//tempo para inicialização do jogo
let jogo = setInterval(iniciarJogo,100);




