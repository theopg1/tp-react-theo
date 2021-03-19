import React, {Component} from 'react';
import TodoService from "../../services/todo.service";
import Todo from "../../components/Todo";
import {Link} from "react-router-dom";
import {UserService} from "../../services/user.service";

export default class TodosList extends Component{

    constructor(props) {
        super(props);
        this.state = {
            todos: [],
        }
    }

    async componentDidMount() {
        let todos = await TodoService.list();
        this.setState({todos: todos});
    }

    render() {
        let {todos} = this.state;
        return <div className="container">
            <h1>Liste des Tâches</h1>
            <Link className="btn btn-primary" to="/taches/ajouter">Ajouter une Tâche</Link>
            <div className="row">
                {todos.map(todo => {
                    return <div className="col-md-4">
                        <Todo todo={todo}/>
                    </div>
                })}
            </div>
        </div>
    }
}
