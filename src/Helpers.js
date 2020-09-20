class Helpers {
    boardMaxAndMinCoordinates = {
            max: 96,
            min: 0
    }

    getRandomCoordinates = () => {
        const max =  Math.floor(Math.random() * (this.boardMaxAndMinCoordinates.max - this.boardMaxAndMinCoordinates.min + 1));
        const min =  Math.floor(Math.random() * (this.boardMaxAndMinCoordinates.max - this.boardMaxAndMinCoordinates.min + 1));
        return [
            max - max % 4,
            min - min % 4
        ]
    }
}

export default new Helpers();