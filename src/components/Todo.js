import React, {Component} from 'react';
import {Link} from "react-router-dom";

export default class Todo extends Component{

    render() {
        let {todo} = this.props;
        return <div className="card">
                <div className="card-body">
                    <h5 className="card-title">{todo.title}</h5>
                    <p className="card-text"> Complétée : {todo.completed}</p>
                    <p className="card-text"> Utilisateur : {todo.user.name}</p>
                    <Link to={`/taches/${todo.id}`} className="btn btn-primary">Détails</Link>
                    <Link to={`/taches/${todo.id}/modifier`} className="btn btn-warning">Modifier</Link>
                </div>
        </div>
    }
}
