import React, {Component} from 'react';

export default class Home extends Component{

    constructor(props) {
        super(props);
        this.state = {
            todos: []
        };
    }

    render() {
        return <div className="container">
            <h1>Homepage du blog</h1>
            <p>Application de Taches.</p>

        </div>
    }
}
