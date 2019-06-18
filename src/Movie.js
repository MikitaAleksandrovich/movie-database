import React, { Component } from 'react';


export default class Movie extends Component {
    render() {
        const movie = this.props.movie;
        return (
            <div>
                {movie.title}
            </div>
        )
    }
}

