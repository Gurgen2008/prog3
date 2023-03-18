let LivingCreature = require("./LivingCreature")

module.exports = class Hunter extends LivingCreature{
    constructor(x,y){
        super(x,y)
        this.energy = 8;
        this.multiply = 2
        this.directions = [];
    }

    getNewCoordinates(){
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x , this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y ],
            [this.x + 1, this.y ],
            [this.x - 1, this.y + 1],
            [this.x , this.y + 1],
            [this.x + 1, this.y + 1]
        ]; 
    }  

    chooseCell(char){
        this.getNewCoordinates()
        return super.chooseCell(char)
    }

    mul(){
        let emptyCell = this.chooseCell(0)
        let newCell = random(emptyCell)

        if(newCell && this.energy > 5){
            let newX = newCell[0]
            let newY = newCell[1]

            let ht = new Hunter(newX,newY);
            matrix[newY][newX] = 6;
            hunterArr.push(ht);

            this.energy = 10;
        }
    }
    eat() {
        let emptyCell = this.chooseCell(3);
        let newCell = random(emptyCell)
        if (newCell) {
            this.energy += 5;
            let newX = newCell[0];
            let newY = newCell[1];

            for (let i = 0; i < predatorArr.length; i++) {
                if (predatorArr[i].x == newX && predatorArr[i].y == newY) {
                    predatorArr.splice(i, 1)
                    break;
                }
            }

            matrix[newY][newX] = 6;
            matrix[this.y][this.x] = 0;

            this.x = newX;
            this.y = newY;

            if (this.energy > 30) {
                this.mul()
            }

        } else {
            this.move()
        }
    }
    move() {
        let emptyCell = this.chooseCell(0);
        let newCell = random(emptyCell)

        if (newCell) {
            let newX = newCell[0];
            let newY = newCell[1];

            matrix[newY][newX] = 6;
            matrix[this.y][this.x] = 0;

           
            this.x = newX;
            this.y = newY;

            // this.energy--

            // if (this.energy < 0) {
            //     this.die()
            // }
        } 
    }

    die() {
        let emptyCell = this.chooseCell(4);
        let newCell = random(emptyCell)

        if(newCell){

            let newX = newCell[0];
            let newY = newCell[1];


            for (let i = 0; i < hunterArr.length; i++) {
                if (hunterArr[i].x == this.x && hunterArr[i].y == this.y) {
                   hunterArr.splice(i, 1)
                   for (let i = 0; i < 15; i++) {
                    matrix[newY][newX] = 7;
                    matrix[this.y][this.x] = 0;
                    
                }
                }
            }

      
      
        }

    }
}