import React, { Component } from 'react';
import CatPics from './CatPics';

export default class CatPicsContainer extends Component {
    state = {
        catUrl: ''
    }

    getRandomCat = () => {
        fetch('https://api.thecatapi.com/v1/images/search')
        .then(data => data.json())
        .then(json => this.setState({
            catUrl: json[0].url
        }))
    }

    render() {
        return(
            <CatPics getRandomCat={this.getRandomCat} url={this.state.catUrl} />
        )
    }
};