import React, {Component} from 'react';
import {Link} from 'react-router-dom';

export default class Footer extends Component{

    render() {
        return <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div>
            <p>nom du client</p>
            <p>nom de l'application</p>
            <p>réseaux sociaux</p>
        </div>
        </nav>
    }
}
