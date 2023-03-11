// let song = document.getElementById("player")
// var song  = new Audio()
// song.src = "sound.mp3"

// console.log(song);
// window.onload = () => {
//     autoplay()
//   };
  
// window.onload = function(){
//     // document.getElementById('player').play();
//     autoplay()
// }

function matrixGenerator(matrixSize,grass,grassEater,predator,bomb,dirt,hunter) {
    var matrix = []

    for (let i = 0; i < matrixSize; i++) {
        matrix.push([])
        for (let j = 0; j < matrixSize; j++) {
        matrix[i].push(0)
        
        }
    }


    for (let i = 0; i < grass; i++) {
        
        var x = Math.floor(Math.random() * matrixSize)
        var y = Math.floor(Math.random() * matrixSize)

        matrix[y][x] = 1
        
    } 

    for (let i = 0; i < grassEater; i++) {
        
        var x = Math.floor(Math.random() * matrixSize)
        var y = Math.floor(Math.random() * matrixSize)

        matrix[y][x] = 2
        
    }
    


    for (let i = 0; i < predator; i++) {
        
        var x = Math.floor(Math.random() * matrixSize)
        var y = Math.floor(Math.random() * matrixSize)

        matrix[y][x] = 3

        
    }

    for (let i = 0; i < bomb; i++) {
        
        var x = Math.floor(Math.random() * matrixSize)
        var y = Math.floor(Math.random() * matrixSize)

        matrix[y][x] = 4

        
    }

    // for(let i = 0 ; i < matrixSize;i++){
    //     for(let j = 0 ; j < matrixSize;j++){
    //             if(i == j || i < j == matrix.length - 1){
    //                     matrix[i][j] = 4
    //             }
    //     }
    
    // }

    for (let i = 0; i < dirt; i++) {
        
        var x = Math.floor(Math.random() * matrixSize)
        var y = Math.floor(Math.random() * matrixSize)

        matrix[y][x] = 5

        
    }

    for (let i = 0; i < hunter; i++) {
        
        var x = Math.floor(Math.random() * matrixSize)
        var y = Math.floor(Math.random() * matrixSize)

        matrix[y][x] = 6

        
    }





    return matrix
}
var matrix = matrixGenerator(30,40,20,5,3,8,2)
var side = 25
console.log(matrix);
//

var grassArr = [];
var grassEaterArr = [];
var predatorArr = []; 
var BombArr = [];
var dirtArr = [];
var hunterArr = [];



function setup() {
    frameRate(15)
    createCanvas(matrix[0].length * side ,matrix.length * side)
    for (let y = 0; y < matrix.length; y++) {
        for (let x = 0; x < matrix[y].length; x++) {
       
           if(matrix[y][x] == 1){
                var gr = new Grass(x,y)
                grassArr.push(gr)
           }else  if(matrix[y][x] == 2){
                var grEat = new GrassEater(x,y)
                grassEaterArr.push(grEat)
           }else if(matrix[y][x] == 3){
                var pred = new Predator(x,y)
                predatorArr.push(pred)
           }else if(matrix[y][x] == 4){
                var bm = new Bomb(x,y)
                BombArr.push(bm)
           }else if(matrix[y][x] == 5){
                var dr = new Dirt(x,y)
                dirtArr.push(dr)
           }else if(matrix[y][x] == 6){
                var ht = new Hunter(x,y)
                hunterArr.push(ht)
           }

           }
        }
        
    }

function draw() {
    
      for (let y = 0; y < matrix.length; y++) {
        for (let x = 0; x < matrix[y].length; x++) {
            var toBot = side - side * 0.3
            textSize(toBot);
                if(matrix[y][x] == 1){
                    fill("green");
                    rect(x * side, y * side, side, side);
                    text('🍀', x * side, y * side + toBot);
                }else if (matrix[y][x] == 2){
                    fill ("yellow")
                    rect(x * side, y * side, side, side);
                    text('🐛', x * side, y * side + toBot);
                }else if(matrix[y][x] == 3){
                    fill ("red")
                    rect(x * side, y * side, side, side);
                    text('🐺', x * side, y * side + toBot);
                }else if(matrix[y][x] == 4){
                    fill ("black")
                    rect(x * side, y * side, side, side);
                    text('💣', x * side, y * side + toBot);
                }else if(matrix[y][x] == 5){
                    fill ("brown")
                    rect(x * side, y * side, side, side);
                    text('⛑', x * side, y * side + toBot);
                }else if(matrix[y][x] == 6){
                    fill ("purple")   
                    rect(x * side, y * side, side, side);
                    text('🕵🏻‍♂️', x * side, y * side + toBot);
                }else if(matrix[y][x] == 7){
                    fill ("orange")   
                    rect(x * side, y * side, side, side);
                }
                else{
                    fill ("gray")
                    rect(x * side, y * side, side, side);
                    // text('🤪', x * side, y * side + toBot);
                }
        }
          
      }

      for(let i in  grassArr){
            grassArr[i].mul()
      }

      for(let i in  grassEaterArr){
        grassEaterArr[i].eat()
        
      }

      for(let i in predatorArr){
         predatorArr[i].eat()
      }
      for(let i in  BombArr){
          BombArr[i].mul()
        }
        for(let i in  hunterArr){
            hunterArr[i].eat()
            hunterArr[i].die()
            // console.log(hunterArr.length);
      }
}


// function muteAudio() {
//     var audio = document.getElementById('audioPlayer');
    
//     if (audio.mute = false) {
//         document.getElementById('audioPlayer').muted = true;
//     }
//     else {
//         audio.mute = true 
//         document.getElementById('audioPlayer').muted = false;
//     }
// }
function autoplay(){
    //   var r = confirm("Would You Like To AutoPlay Music?"); .play();
    // var song = document.getElementById('player')
        document.getElementById("player").play();

}
function toggleMute() {
    var myAudio = document.getElementById('player');
    myAudio.muted = !myAudio.muted;   
}
function pictureChange(){
    var x = document.getElementById('mute_img');

    if (x.src.indexOf("mute_off.png")>0){
        x.src="mute_on.png";
    }else{
        x.src="mute_off.png";
    }
}
