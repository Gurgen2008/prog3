var socket = io();
var side = 25

function setup() {
    frameRate(15)
    createCanvas(25 * side,25 * side)
    }

    let Ses = ["green","orange","red","black","brown","purple"]
    function Season(s){
      let  color =[]
        if(s == 1){
            color =["#ffffff","#008000","#d3d3d3","#000000","#744700","#800080"]
        }else if(s == 2){
            color =["#90ee90","#f7f792","#d3d3d3","#000000","#d48100","#800080"]
        }else if(s == 3){
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
                    
                }
        }
          
      }

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
function autoplay(){
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
