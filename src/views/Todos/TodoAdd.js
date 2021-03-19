import React, {Component} from 'react';
import TodoService from "../../services/todo.service";

export default class TodoAdd extends Component{

    constructor(props) {
        super(props);
        this.state = {
            title: null,
            completed: null
        }
    }

    handleChange(e){
        this.setState({
            [e.target.id]: e.target.value
        });
    }

    async handleSubmit(e){
        e.preventDefault();
        let {title, completed} = this.state;

        let data = {
            title: title,
            completed: completed,
            userId: 1
        }

        await TodoService.create(data);
        this.props.history.push('/taches');
    }

    render() {
        return <div className="container">
            <h1>Ajouter une Tâche</h1>

            <form onSubmit={(event) => this.handleSubmit(event)}>
                <div className="form-group">
                    <label>Titre</label>
                    <input type="text" id="title" className="form-control" required
                        onChange={(event) => this.handleChange(event)}/>
                </div>
                <div className="form-group">
                    <label>Contenu</label>
                    <textarea id="completed" rows="5" className="form-control" required
                        onChange={(event) => this.handleChange(event)}/>
                </div>
                <button type="submit" className="btn btn-primary">Ajouter</button>
            </form>
        </div>
    }

}
