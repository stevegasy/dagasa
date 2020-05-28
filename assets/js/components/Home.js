// ./assets/js/components/Home.js

import React, {Component} from 'react';
import {Route, Switch,Redirect, Link, withRouter} from 'react-router-dom';
import Users from './Users';
import Posts from './Posts';
import Logo from './Logo';

class Home extends Component {

    render() {
        return (
           <div>
               <nav className="navbar navbar-expand-md navbar-light fixed-top bg-light">
                   <Link className={"navbar-brand mb-0 h1"} to={"/"}> <Logo /> </Link>

                   <button type="button" className="navbar-toggler collapsed" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              				<span className="navbar-toggler-icon"></span>
            			</button>

                   <div className="collapse navbar-collapse" id="navbarText">
                       <ul className="navbar-nav ml-auto">
                           <li className="nav-item">
                               <Link className={"nav-link"} to={"/posts"}> Entreprises Infos </Link>
                           </li>

                           <li className="nav-item">
                               <Link className={"nav-link"} to={"/users"}> Conseil carrière </Link>
                           </li>

                           <li className="nav-item">
                               <Link className={"nav-link"} to={"/users"}> Publication d'une annonce </Link>
                           </li>
                       </ul>
                       <form className="form-inline my-2 my-lg-0">
                          <input className="form-control mr-sm-2" type="search" placeholder="Rechercher et Postuler" aria-label="Search" />
                          <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Rechercher</button>
                       </form>
                   </div>
               </nav>
               <Switch>
                   <Redirect exact from="/" to="/users" />
                   <Route path="/users" component={Users} />
                   <Route path="/posts" component={Posts} />
               </Switch>
           </div>
        )
    }
}

export default Home;
