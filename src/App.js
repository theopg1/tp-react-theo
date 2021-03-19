import React, {Component} from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Home from "./views/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import UserList from "./views/Users/UserList";
import UserDetails from "./views/Users/UserDetails";
import UserAdd from "./views/Users/UserAdd";
import TodosList from "./views/Todos/TodosList";
import TodoAdd from "./views/Todos/TodoAdd";
import TodoDetails from "./views/Todos/TodoDetails";
import TodoUpdate from "./views/Todos/TodoUpdate";

export default class App extends Component{

    render() {
        return <BrowserRouter>
            <Header/>
            <Switch>
                <Route exact path="/" component={Home} />
                
                <Route exact path="/taches" component={TodosList} />
                <Route exact path="/taches/ajouter" component={TodoAdd} />
                <Route exact path="/taches/:id" component={TodoDetails} />
                <Route exact path="/taches/:id/modifier" component={TodoUpdate} />
                <Route exact path="/utilisateurs" component={UserList}/>
                <Route exact path="/utilisateurs/ajouter" component={UserAdd}/>
                <Route exact path="/utilisateurs/:id" component={UserDetails}/>
            </Switch>
            <Footer/>
        </BrowserRouter>
    }
}
