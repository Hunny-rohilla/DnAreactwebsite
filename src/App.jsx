import React from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Home from './Home';
import About from './About';
import Gallary from './Gallary';
import Contact from './Contact';
import Navbar from "./Navbar";
import Footer from './Footer';
import Medialink from './Medialink';
import Videos from './Videos';

import { Switch, Route, Redirect} from 'react-router-dom';

const App = () => {
    return(
        <>
    <div className="bodydiv">
        <Navbar/>
  
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/about" component={About} />
                <Route exact path="/gallary" component={Gallary} />
                <Route exact path="/contact" component={Contact} /> 
                <Route exact path="/videos" component={Videos} />
                <Redirect to="/" /> 
            </Switch>

         
            <div className="bottomfix">
            <Medialink/> 
            
            <Footer/>
            </div>
    </div>  
        </>
    )
}

export default App;