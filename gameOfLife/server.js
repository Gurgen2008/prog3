var express = require("express");
var app = express();
var server = require("http").Server(app);
var io = require("socket.io")(server);
var fs = require("fs")

app.use(express.static("."));

app.get('/', function (req, res) {
    res.redirect("game.html");
});
server.listen(3000, () => {
    console.log("Connected Enjoy with GameOfLife");
});

function matrixGenerator(matrixSize, grass, grassEater, predator, bomb, dirt, hunter) {
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
        if(  matrix[y][x] == 0){
            matrix[y][x] = 1
        }
      

    }

    for (let i = 0; i < grassEater; i++) {

        var x = Math.floor(Math.random() * matrixSize)
        var y = Math.floor(Math.random() * matrixSize)

        if(  matrix[y][x] == 0){
            matrix[y][x] = 2
        }

    }



    for (let i = 0; i < predator; i++) {

        var x = Math.floor(Math.random() * matrixSize)
        var y = Math.floor(Math.random() * matrixSize)

        if(  matrix[y][x] == 0){
            matrix[y][x] = 3
        }


    }

    for (let i = 0; i < bomb; i++) {

        var x = Math.floor(Math.random() * matrixSize)
        var y = Math.floor(Math.random() * matrixSize)

        if(  matrix[y][x] == 0){
            matrix[y][x] = 4
        }


    }

    for (let i = 0; i < dirt; i++) {

        var x = Math.floor(Math.random() * matrixSize)
        var y = Math.floor(Math.random() * matrixSize)

        if(  matrix[y][x] == 0){
            matrix[y][x] = 5
        }


    }

    for (let i = 0; i < hunter; i++) {

        var x = Math.floor(Math.random() * matrixSize)
        var y = Math.floor(Math.random() * matrixSize)

        if(  matrix[y][x] == 0){
            matrix[y][x] = 6
        }


    }



    io.emit('send matrix', matrix)

    return matrix


}
matrix = matrixGenerator(30, 40, 1, 5, 3, 8, 2)



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
const Hunter = require("./hunter.js");
const { dir } = require("console");


function createObj() {
    for (let y = 0; y < matrix.length; y++) {
        for (let x = 0; x < matrix[y].length; x++) {

            if (matrix[y][x] == 1) {
                var gr = new Grass(x, y)
                grassArr.push(gr)
            } else if (matrix[y][x] == 2) {
                var grEat = new GrassEater(x, y)
                grassEaterArr.push(grEat)
            } else if (matrix[y][x] == 3) {
                var pred = new Predator(x, y)
                predatorArr.push(pred)
            } else if (matrix[y][x] == 4) {
                var bm = new Bomb(x, y)
                BombArr.push(bm)
            } else if (matrix[y][x] == 5) {
                var dr = new Dirt(x, y)
                dirtArr.push(dr)
            } else if (matrix[y][x] == 6) {
                var ht = new Hunter(x, y)
                hunterArr.push(ht)
            }

        }
        io.emit('send matrix', matrix)
    }

}

createObj()

function Kill() {
    grassArr = [];
    grassEaterArr = [];
    predatorArr = [];
    BombArr = [];
    dirtArr = [];
    hunterArr = [];
    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {
            matrix[y][x] = 0;
        }
    }
    io.emit("send matrix", matrix);
}

function AddGrass() {
    for (var i = 0; i < 7; i++) {
        var x = Math.floor(Math.random() * matrix[0].length)
        var y = Math.floor(Math.random() * matrix.length)
        if (matrix[y][x] == 0) {
            matrix[y][x] = 1;
            var gr = new Grass(x, y);
            grassArr.push(gr);
        }
    }
    io.emit("send matrix", matrix);
}

function AddGrassEater() {
    for (var i = 0; i < 7; i++) {
        var x = Math.floor(Math.random() * matrix[0].length)
        var y = Math.floor(Math.random() * matrix.length)
        if (matrix[y][x] == 0) {
            matrix[y][x] = 2;
            var grEat = new GrassEater(x, y);
            grassEaterArr.push(grEat);
        }
    }
    io.emit("send matrix", matrix);
}

function AddHunter() {
    for (var i = 0; i < 7; i++) {
        var x = Math.floor(Math.random() * matrix[0].length)
        var y = Math.floor(Math.random() * matrix.length)
        if (matrix[y][x] == 0) {
            matrix[y][x] = 6;
            var ht = new Hunter(x, y);
            hunterArr.push(ht);
        }
    }
    io.emit("send matrix", matrix);
}

function AddPredator() {
    for (var i = 0; i < 7; i++) {
        var x = Math.floor(Math.random() * matrix[0].length)
        var y = Math.floor(Math.random() * matrix.length)
        if (matrix[y][x] == 0) {
            matrix[y][x] = 3;
            var pred = new Predator(x, y);
            predatorArr.push(pred);
        }
    }
    io.emit("send matrix", matrix);
}

function AddBomb() {
    for (var i = 0; i < 7; i++) {
        var x = Math.floor(Math.random() * matrix[0].length)
        var y = Math.floor(Math.random() * matrix.length)
        if (matrix[y][x] == 0) {
            matrix[y][x] = 4;
            var bm = new Bomb(x, y);
            BombArr.push(bm);
        }
    }
    io.emit("send matrix", matrix);
}

function restart() {
    grassArr.splice(0,grassArr.length)
    grassEaterArr.splice(0,grassEaterArr.length)
    predatorArr.splice(0,predatorArr.length)
    hunterArr.splice(0,hunterArr.length)
    BombArr.splice(0,BombArr.length)
    dirtArr.splice(0,dirtArr.length)
    clearInterval(interval)
    matrix = matrixGenerator(30, 40, 20, 5, 3, 8, 2)
    createObj()
    setInterval(gameMove, 400)
}


function gameMove() {
    for (let i in grassArr) {
        grassArr[i].mul()
    }

    for (let i in grassEaterArr) {
        grassEaterArr[i].eat()
       
    }

    for (let i in predatorArr) {
        predatorArr[i].eat()
        predatorArr[i].move()
    }
    for (let i in BombArr) {
        BombArr[i].mul()
    }
    for (let i in hunterArr) {
        hunterArr[i].eat()
        hunterArr[i].die()
    }
    io.emit("send matrix", matrix);
}


let interval = setInterval(gameMove, 400)


io.on('connection', function (socket) {
    createObj(matrix)
    socket.on("addGrass", AddGrass);
    socket.on("addGrassEater", AddGrassEater);
    socket.on("addHunter", AddHunter);
    socket.on("addPredator", AddPredator);
    socket.on("addBomb", AddBomb);
    socket.on("killAll", Kill);
    socket.on("restartServ", restart);

});

setInterval(function () {
    counts = {
       grass: grassArr.length,
        grassEater:  grassEaterArr.length,
        predator:  predatorArr.length,
        bomb: BombArr.length,
        dirt:  dirtArr.length,
        hunter:  hunterArr.length 
    }
    
    fs.writeFile("statistics.json", JSON.stringify(counts), function () {
        io.emit("send datas", counts)
    })
}, 400);


