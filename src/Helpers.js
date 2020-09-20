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

    getInitialState = () => {
        return {
            snakePieces: [
                [0, 0],
                [4, 0],
                [8, 0]
            ],
            direction: 'RIGHT',
            velocity: 200
        }
    }
}

export default new Helpers();