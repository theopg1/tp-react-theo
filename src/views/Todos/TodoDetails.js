import React, {Component} from 'react';
import TodoService from "../../services/todo.service";
import {Link} from "react-router-dom";

export default class TodoDetails extends Component{

    constructor(props) {
        super(props);
        this.state = {
            todo: {}
        }
    }

    async componentDidMount() {
        let {id} = this.props.match.params;
        let response = await TodoService.details(id);
        this.setState({todo: response.data});
    }

    async handleDelete(){
        let {todo} = this.state;
        await TodoService.delete(todo.id);
        this.props.history.push('/taches');
    }

    render() {
        let {todo} = this.state;
        return <div className="container">
            <h1>Tâches - {todo.title}</h1>
            <p>Complétée : {todo.completed}</p>
            <p>User : {todo.userId}</p>
            <button className="btn btn-danger" onClick={() => this.handleDelete()}>Supprimer</button>
            <Link to={`/taches/${todo.id}/modifier`} className="btn btn-warning">Modifier</Link>
        </div>
    }
}
