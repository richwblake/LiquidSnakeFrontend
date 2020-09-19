export default class Helpers {
    boardMaxAndMinCoordinates = () => {
        return{
            max: 96,
            min: 0
        }
    }

    getRandomCoordinates = () => {
        return [
            Math.floor(Math.random() * (this.boardMaxAndMinCoordinates.max - this.boardMaxAndMinCoordinates.min + 1)),
            Math.floor(Math.random() * (this.boardMaxAndMinCoordinates.max - this.boardMaxAndMinCoordinates.min + 1))
        ]
    }
}