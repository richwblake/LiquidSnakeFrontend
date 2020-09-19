class Helpers {
    boardMaxAndMinCoordinates = {
            max: 96,
            min: 0
    }

    getRandomCoordinates = () => {
        return [
            Math.floor(Math.random() * (this.boardMaxAndMinCoordinates.max - this.boardMaxAndMinCoordinates.min + 1)),
            Math.floor(Math.random() * (this.boardMaxAndMinCoordinates.max - this.boardMaxAndMinCoordinates.min + 1))
        ]
    }
}

export default new Helpers();