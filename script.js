let canvas = document.getElementById("snake");
let context = canvas.getContext("2d");
let box = 32;
let snake = [];
snake[0] = {
    x: 8 * box,
    y: 8 * box
}
let direction = "right";

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

function iniciarJogo(){
    criarBG();
    criarCobrinha();

    //ponto de partida da cobrinha
    let snakeX = snake[0].x;
    let snakeY = snake[0].y;

    //coordenadas para o lado que a cobra vai
    if(direction == 'right') snakeX +=box; 
    if(direction == 'left') snakeX -=box; 

    if(direction == 'Up') snakeY -=box; 
    if(direction == 'Donw') snakeY +=box; 

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



