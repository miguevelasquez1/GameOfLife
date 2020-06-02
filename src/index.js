var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

canvas.width = 600;
canvas.height = 600;

ctx.strokeStyle = "#a0a0a0";


var nyC = 25;
var nxC = 25;

var tamaño = nyC - 1;

var nzC = 8;
var dimCW = canvas.width  / nxC;
var dimCH = canvas.height / nyC;

var gameState = [];
var random = () => Math.floor(Math.random() * (2 - 0) + 0);


for (var y = 0; y < nxC; y++) {
    gameState[y] = [];
    for (var x = 0; x < nyC; x++) {
        ctx.strokeRect( ( (x-1)*dimCW   ) , ( (y-1)*dimCH   ), dimCW, dimCH );
        ctx.strokeRect( ( (x  )*dimCW   ) , ( (y-1)*dimCH   ), dimCW, dimCH );
        ctx.strokeRect( ( (x  )*dimCW   ) , ( (y  )*dimCH   ), dimCW, dimCH );
        ctx.strokeRect( ( (x-1)*dimCW   ) , ( (y  )*dimCH   ), dimCW, dimCH );
    }
}

var newGameState = [[]];

for(var y = 0; y < nxC; y++){
    newGameState[y] = [];
    for(var x = 0; x < nyC; x ++){
        newGameState[y][x] = [];
    }
}






for (var j = 0; j < nxC; j++) {
    for (var i = 0; i < nyC; i++) {
        gameState[j][i] = 0;
    }
}



for (var j = 0; j < nxC; j++) {
    for (var i = 0; i < nyC; i++) {
        gameState[j][i] = random();
    }
}


// gameState[0][1] = 1;
// gameState[2][2] = 1;
// gameState[2][3] = 1;
// gameState[1][3] = 1;
// gameState[0][3] = 1;

// gameState[19][7] = 1;
// gameState[19][8] = 1;
// gameState[19][9] = 1;

// gameState[0][3] = 1;
// gameState[1][4] = 1;
// gameState[2][5] = 1;
// gameState[3][6] = 1;
// gameState[4][7] = 1;
// gameState[0][7] = 1;
// gameState[1][6] = 1;
// gameState[3][4] = 1;
// gameState[4][3] = 1;







var total2 = [[[]]];
for (var y = 0; y < nxC; y++) {
    total2[y] = [];
    for (var x = 0; x < nyC; x++) {
        total2[y][x] = [];
        for (var z = 0; z < nzC; z++) {
            total2[y][x][z] = [];
        }
    }
}


var n_neigh = [[]];

for (var y = 0; y < nxC; y++) {
    n_neigh[y] = [];
    for (var x = 0; x < nyC; x++) {
        n_neigh[y][x] = [];
        
    }
}




var total = [[[]]];




var ciclo =
setInterval(
    function xd(){

        for (var y = 0; y < nzC; y++) {
            total[y] = [];
            for (var x = 0; x < nyC; x++) {
                total[y][x] = [];
                for (var z = 0; z < nxC; z++) {
                    total[y][x][z] = [];
                }
            }
        }
        
        
        for (var p = 0; p<1; p++) {
        for (var h = 0; h < 1; h++) { 
            for (var j = tamaño; j < (nxC*2)-1; j++) {  // Filas
                for (var i = tamaño; i < (nyC*2)-1; i++) { //Columnas
                    total[h][j-tamaño][i-tamaño] = gameState[j%nyC][i%nxC];
                }
            }
        }
        
        // Celda(x, y-1)
        for (var h = 1; h < 2; h++) { 
            for (var j = tamaño; j < (nxC*2)-1; j++) {  // Filas
                for (var i = 0; i < nyC; i++) { //Columnas
                    total[h][j-tamaño][i] = gameState[j%nyC][i%nxC];
                }
            }
        }
        
        // Celda(x+1, y-1)
        for (var h = 2; h < 3; h++) { 
            for (var j = tamaño; j < (nxC*2)-1; j++) {  // Filas
                for (var i = 1; i < nyC+1; i++) { //Columnas
                    total[h][j-tamaño][i-1] = gameState[j%nyC][i%nxC];
                }
            }
        }
        
        // Celda(x+1, y)
        for (var h = 3; h < 4; h++) { 
            for (var j = 0; j < nxC; j++) {  // Filas
                for (var i = 1; i < nyC+1; i++) { //Columnas
                    total[h][j][i-1] = gameState[j%nyC][i%nxC];
                }
            }
        }
        
        // Celda(x+1, y+1)
        for (var h = 4; h < 5; h++) { 
            for (var j = 1; j < nxC+1; j++) {  // Filas
                for (var i = 1; i < nyC+1; i++) { //Columnas
                    total[h][j-1][i-1] = gameState[j%nyC][i%nxC];
                }
            }
        }
        
        // Celda(x, y+1)
        for (var h = 5; h < 6; h++) { 
            for (var j = 1; j < nxC+1; j++) {  // Filas
                for (var i = 0; i < nyC; i++) { //Columnas
                    total[h][j-1][i] = gameState[j%nyC][i%nxC];
                }
            }
        }
        
        // Celda(x-1, y+1)
        for (var h = 6; h < 7; h++) { 
            for (var j = 1; j < nxC+1; j++) {  // Filas
                for (var i = tamaño; i < (nyC*2)-1; i++) { //Columnas
                    total[h][j-1][i-tamaño] = gameState[j%nyC][i%nxC];
                }
            }
        }
        
        // Celda(x-1, y)
        for (var h = 7; h < 8; h++) { 
            for (var j = 0; j < nxC; j++) {  // Filas
                for (var i = tamaño; i < (nyC*2)-1; i++) { //Columnas
                    total[h][j][i-tamaño] = gameState[j%nyC][i%nxC];
                }
            }
        }
        
            }
        
for (var h = 0; h < nzC; h++) { 
    for (var j = 0; j < nyC; j++) {  
        for (var i = 0; i < nxC; i++) {
            total2[i][j][h] = total[h][i][j];
        }
    }
}


const reducer = (accumulator, currentValue) => accumulator + currentValue;
for (var j = 0; j < nxC; j++) {
    for (var i = 0; i < nyC; i++) {
n_neigh[j][i] = total2[j][i].reduce(reducer);
    }
}

        for (var j = 0; j < nxC; j++) {
            for (var i = 0; i < nyC; i++) {
                newGameState[j][i] = gameState[j][i];
                
                
            }
        }

        for (var j = 0; j < nxC; j++) {
            for (var i = 0; i < nyC; i++) {
                if (gameState[j][i] == 0 && n_neigh[j][i] == 3  ) {
                    newGameState[j][i] = 1;
                } else if(gameState[j][i] == 1 && (n_neigh[j][i] < 2 || n_neigh[j][i] > 3)){
                    newGameState[j][i] = 0;
                }
        
            }
        }

        
        
    
            for (var j = 0; j < nxC; j++) {
                
        for (var i = 0; i < nyC; i++) {

            

            if (gameState[j][i] == 1) {
                ctx.fillStyle = "#a0a0a0";
                ctx.fillRect(i*dimCW, j*dimCW, dimCW, dimCW);
            } else {
                ctx.fillStyle = "#030303";
                ctx.fillRect(i*dimCW, j*dimCW, dimCW, dimCW);
            }
            ctx.strokeRect( ( (x-1)*dimCW   ) , ( (y-1)*dimCH   ), dimCW, dimCH );
            ctx.strokeRect( ( (i  )*dimCW   ) , ( (j-1)*dimCH   ), dimCW, dimCH );
            ctx.strokeRect( ( (i  )*dimCW   ) , ( (j  )*dimCH   ), dimCW, dimCH );
            ctx.strokeRect( ( (i-1)*dimCW   ) , ( (j  )*dimCH   ), dimCW, dimCH );
        }
    }   

    for (var j = 0; j < nxC; j++) {
        for (var i = 0; i < nyC; i++) {
            gameState[j][i] = newGameState[j][i];
        }
    }



    
    // if(gameState[0][0] == 0) 
    //     {
    //         clearInterval(ciclo);
    //     }
      
    }, 40);
    ;


    window.onload = function(){
        document.onkeyup = teclas;
    }
    function teclas(event){
        var codigo = event.keyCode;
        console.log(codigo);
        
}

    

    