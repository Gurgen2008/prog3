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

// function matrixGenerator(matrixSize,grass,grassEater,predator,bomb,dirt,hunter) {
//     var matrix = []

//     for (let i = 0; i < matrixSize; i++) {
//         matrix.push([])
//         for (let j = 0; j < matrixSize; j++) {
//         matrix[i].push(0)
        
//         }
//     }


//     for (let i = 0; i < grass; i++) {
        
//         var x = Math.floor(Math.random() * matrixSize)
//         var y = Math.floor(Math.random() * matrixSize)

//         matrix[y][x] = 1
        
//     } 

//     for (let i = 0; i < grassEater; i++) {
        
//         var x = Math.floor(Math.random() * matrixSize)
//         var y = Math.floor(Math.random() * matrixSize)

//         matrix[y][x] = 2
        
//     }
    


//     for (let i = 0; i < predator; i++) {
        
//         var x = Math.floor(Math.random() * matrixSize)
//         var y = Math.floor(Math.random() * matrixSize)

//         matrix[y][x] = 3

        
//     }

//     for (let i = 0; i < bomb; i++) {
        
//         var x = Math.floor(Math.random() * matrixSize)
//         var y = Math.floor(Math.random() * matrixSize)

//         matrix[y][x] = 4

        
//     }

    // for(let i = 0 ; i < matrixSize;i++){
    //     for(let j = 0 ; j < matrixSize;j++){
    //             if(i == j || i < j == matrix.length - 1){
    //                     matrix[i][j] = 4
    //             }
    //     }
    
    // }

//     for (let i = 0; i < dirt; i++) {
        
//         var x = Math.floor(Math.random() * matrixSize)
//         var y = Math.floor(Math.random() * matrixSize)

//         matrix[y][x] = 5

        
//     }

//     for (let i = 0; i < hunter; i++) {
        
//         var x = Math.floor(Math.random() * matrixSize)
//         var y = Math.floor(Math.random() * matrixSize)

//         matrix[y][x] = 6

        
//     }





//     return matrix
// }
// var matrix = matrixGenerator(30,40,20,5,3,8,2)

var socket = io();

var side = 25

//

// var grassArr = [];
// var grassEaterArr = [];
// var predatorArr = []; 
// var BombArr = [];
// var dirtArr = [];
// var hunterArr = [];



function setup() {
    frameRate(15)
    createCanvas(25 * side,25 * side)
    // for (let y = 0; y < matrix.length; y++) {
    //     for (let x = 0; x < matrix[y].length; x++) {
       
    //        if(matrix[y][x] == 1){
    //             var gr = new Grass(x,y)
    //             grassArr.push(gr)
    //        }else  if(matrix[y][x] == 2){
    //             var grEat = new GrassEater(x,y)
    //             grassEaterArr.push(grEat)
    //        }else if(matrix[y][x] == 3){
    //             var pred = new Predator(x,y)
    //             predatorArr.push(pred)
    //        }else if(matrix[y][x] == 4){
    //             var bm = new Bomb(x,y)
    //             BombArr.push(bm)
    //        }else if(matrix[y][x] == 5){
    //             var dr = new Dirt(x,y)
    //             dirtArr.push(dr)
    //        }else if(matrix[y][x] == 6){
    //             var ht = new Hunter(x,y)
    //             hunterArr.push(ht)
    //        }

    //        }
    //     }
        
    }


    let Ses = ["green","orange","red","black","brown","purple"]
    function Season(s){
      let  color =[]
        if(s == 1){
            color =["#ffffff","#008000","#d3d3d3","#000000","#744700","#800080"]
        }else if(s == 2){
            color =["#90ee90","#f7f792","#d3d3d3","#000000","#d48100","#800080"]
        }else if(s == 3){
            // color =["#006400","#edff00","#a9a9a9","#000000","#744700","#800080"]
            color = ["green","orange","red","black","brown","purple"]
        }else if(s == 4){
            color =["#ffa500","#d2d201","#ff0000","#000000","#a52a2a","#800080"]
        }
        Ses = color 
        return Ses

    }
function changeColor(matrix) {
    
      for (let y = 0; y < matrix.length; y++) {
        for (let x = 0; x < matrix[y].length; x++) {
            var toBot = side - side * 0.3
            
                if(matrix[y][x] == 1){
                    fill(Ses[0]);
                    rect(x * side, y * side, side, side);
                    text('🍀', x * side, y * side + toBot);
                }else if (matrix[y][x] == 2){
                    fill (Ses[1])
                    rect(x * side, y * side, side, side);
                    text('🐛', x * side, y * side + toBot);
                }else if(matrix[y][x] == 3){
                    fill (Ses[2])
                    rect(x * side, y * side, side, side);
                    text('🐺', x * side, y * side + toBot);
                }else if(matrix[y][x] == 4){
                    fill (Ses[3])
                    rect(x * side, y * side, side, side);
                    text('💣', x * side, y * side + toBot);
                }else if(matrix[y][x] == 5){
                    fill (Ses[4])
                    rect(x * side, y * side, side, side);
                    text('⛑', x * side, y * side + toBot);
                }else if(matrix[y][x] == 6){
                    fill (Ses[5])   
                    rect(x * side, y * side, side, side);
                    text('🕵🏻‍♂️', x * side, y * side + toBot);
                }else if(matrix[y][x] == 7){
                    fill ("orange")   
                    rect(x * side, y * side, side, side);
                }
                else{
                    fill("gray")
                    rect(x * side, y * side, side, side);
                    // text('🤪', x * side, y * side + toBot);
                }
        }
          
      }

    //   for(let i in  grassArr){
    //         grassArr[i].mul()
    //   }

    //   for(let i in  grassEaterArr){
    //     grassEaterArr[i].eat()
        
    //   }

    //   for(let i in predatorArr){
    //      predatorArr[i].eat()
    //   }
    //   for(let i in  BombArr){
    //       BombArr[i].mul()
    //     }
    //     for(let i in  hunterArr){
    //         hunterArr[i].eat()
    //         hunterArr[i].die()
            // console.log(hunterArr.length);
    //   }
}


    
    socket.on('send matrix', changeColor)

    function AddGrass(){
        socket.emit("addGrass");
    }
    function AddGrassEater(){
        socket.emit("addGrassEater");
    }
    function AddHunter(){
        socket.emit("addHunter");
    }
    function AddPredator(){
        socket.emit("addPredator");
    }
    function AddBomb(){
        socket.emit("addBomb");
    }
    function Kill() {
        socket.emit("killAll");
    }
    function restart(){
        socket.emit("restartServ",true)
    }
    
    socket.on ("send datas", function(counts){
    
        document.getElementById("grass").innerHTML = "Grass:  " + counts.grass;
        document.getElementById("grassEater").innerHTML = "GrassEater: " + counts.grassEater;
        document.getElementById("predator").innerHTML = "Predator: " + counts.predator;
        document.getElementById("hunter").innerHTML = "Hunter: " + counts.hunter;
        document.getElementById("bomb").innerHTML = "Bomb: " + counts.bomb;
        document.getElementById("dirt").innerHTML = "Dirt: " + counts.dirt;

      })
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




// function winter(matrix) {
    
//     for (let y = 0; y < matrix.length; y++) {
//       for (let x = 0; x < matrix[y].length; x++) {
//           var toBot = side - side * 0.3
          
//               if(matrix[y][x] == 1){
//                   fill("white");
//                   rect(x * side, y * side, side, side);
//                   text('🍀', x * side, y * side + toBot);
//               }else if (matrix[y][x] == 2){
//                   fill ("green")
//                   rect(x * side, y * side, side, side);
//                   text('🐛', x * side, y * side + toBot);
//               }else if(matrix[y][x] == 3){
//                   fill ("lightgray")
//                   rect(x * side, y * side, side, side);
//                   text('🐺', x * side, y * side + toBot);
//               }else if(matrix[y][x] == 4){
//                   fill ("black")
//                   rect(x * side, y * side, side, side);
//                   text('💣', x * side, y * side + toBot);
//               }else if(matrix[y][x] == 5){
//                   fill ("darkbrown")
//                   rect(x * side, y * side, side, side);
//                   text('⛑', x * side, y * side + toBot);
//               }else if(matrix[y][x] == 6){
//                   fill ("purple")   
//                   rect(x * side, y * side, side, side);
//                   text('🕵🏻‍♂️', x * side, y * side + toBot);
//               }else if(matrix[y][x] == 7){
//                   fill ("orange")   
//                   rect(x * side, y * side, side, side);
//               }
//               else{
//                   fill ("gray")
//                   rect(x * side, y * side, side, side);
                  // text('🤪', x * side, y * side + toBot);
    //           }
    //   }
        
    // }

  //   for(let i in  grassArr){
  //         grassArr[i].mul()
  //   }

  //   for(let i in  grassEaterArr){
  //     grassEaterArr[i].eat()
      
  //   }

  //   for(let i in predatorArr){
  //      predatorArr[i].eat()
  //   }
  //   for(let i in  BombArr){
  //       BombArr[i].mul()
  //     }
  //     for(let i in  hunterArr){
  //         hunterArr[i].eat()
  //         hunterArr[i].die()
          // console.log(hunterArr.length);
  //   }
// }


