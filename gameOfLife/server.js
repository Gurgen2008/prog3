var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);


app.use(express.static("."));

app.get('/', function (req, res) {
    res.redirect('index.html');
});
server.listen(3000, () => {
    console.log('connected');
});

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
 matrix = matrixGenerator(30,40,20,5,3,8,2)

 io.sockets.emit('send matrix', matrix)

 grassArr = [];
 grassEaterArr = [];
 predatorArr = []; 
 BombArr = [];
 dirtArr = [];
 hunterArr = [];

const Grass = require("./grass.js")
const GrassEater = require("./grassEater.js")
const Predator = require("./predator.js")
const Bomb = require("./bomb.js")
const Dirt = require("./dirt.js")
const Hunter = require("./hunter.js")

 function createObj(){
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
        io.sockets.emit('send matrix', matrix)
 }

 createObj();


 function gameMove(){
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
  io.sockets.emit("send matrix", matrix);
 }


 setInterval(gameMove,1000)


 io.on('connection', function () {
    createObject(matrix)
})