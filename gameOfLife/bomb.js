// class Water{
//     constructor(x,y){
//             this.x = x;
//             this.y = y;
//             this.multiply = 0;
//             this.directions = [
//                 [this.x - 1, this.y - 1],
//                 [this.x , this.y - 1],
//                 [this.x + 1, this.y - 1],
//                 [this.x - 1, this.y ],
//                 [this.x + 1, this.y ],
//                 [this.x - 1, this.y + 1],
//                 [this.x , this.y + 1],
//                 [this.x + 1, this.y + 1]
//             ];
//     } 
 
//     chooseCell(char){ 
//        let found = []
//        for(let i in this.directions){
//         var x = this.directions[i][0]
//         var y = this.directions[i][1]
//             if(x >= 0 && x < matrix[0].length && y >= 0 && y < matrix[0].length ){
//                 if(matrix[y][x] == char){
//                         found.push(this.directions[i])
//                 }
//             }
//        }
//       return found
//     }

//     mul(){
//         this.multiply++
//         var emptyCell = this.chooseCell(0)
//         var newCell = random(emptyCell)
//         if(newCell && this.multiply >= 8){
//             var newX = newCell[0]
//             var newY = newCell[1]

//             matrix[newY][newX] = 1
//             var gr = new Grass(newX,newY)

//             grassArr.push(gr)

//             this.multiply = 0
//         }
//     }
// }
class Bomb {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.time = 5;
        this.radius = 8
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]

        ];
    }
    getNewCordinates() {
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
        ];
    }
    chooseCell(char, char1, char2, char3, char4) {
        this.getNewCordinates();
        let found = [];

        for (let i = 0; i < this.directions.length; i++) {
            let x = this.directions[i][0];
            let y = this.directions[i][1];

            if (y < matrix.length && y >= 0 && x < matrix[0].length && x >= 0) {
                if (matrix[y][x] == char) {
                    found.push(this.directions[i]);
                }
            }
            if (y < matrix.length && y >= 0 && x < matrix[0].length && x >= 0) {
                if (matrix[y][x] == char1) {
                    found.push(this.directions[i]);
                }
            }
            if (y < matrix.length && y >= 0 && x < matrix[0].length && x >= 0) {
                if (matrix[y][x] == char2) {
                    found.push(this.directions[i]);
                }
            }
            if (y < matrix.length && y >= 0 && x < matrix[0].length && x >= 0) {
                if (matrix[y][x] == char3) {
                    found.push(this.directions[i]);
                }
            }
            if (y < matrix.length && y >= 0 && x < matrix[0].length && x >= 0) {
                if (matrix[y][x] == char4) {
                    found.push(this.directions[i]);
                }
            }
        }

        return found;
    }
    mul() {
        let emptyCell = this.chooseCell(0, 1, 2, 3, 4);
        let newCell = random(emptyCell)

        if (newCell) {
            this.radius++;
            let newX = newCell[0];
            let newY = newCell[1];

            for (let i = 0; i < grassArr.length; i++) {
                if (grassArr[i].x == newX && grassArr[i].y == newY) {
                    grassArr.splice(i, 1)
                }
            }

            matrix[newY][newX] = 4;
            matrix[this.y][this.x] = 4;


            this.x = newX
            this.y = newY

        }
        if (this.radius > 15) {
            this.die()
        }
    }

    die() {
        for (let i = 0; i < BombArr.length; i++) {
            if (BombArr[i].x == this.x && BombArr[i].y == this.y) {
                BombArr.splice(i, 1)
            }
        }
        matrix[this.y][this.x] = 0

        for (let x = 0; x < matrix.length; x++) {
            for (let y = 0; y < matrix[x].length; y++) {
                if (matrix[x][y] == 4) {
               
                    
                    matrix[x][y] = 7
                }
            }
        }
    }
}
