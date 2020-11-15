import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./routes/Home";
import Detail from "./routes/Detail";
import Update from "./routes/Update";
import { RestaurantsContextProvider } from './context/RestaurantsContext';


const App = () => {
    return (
        <RestaurantsContextProvider>
            <div className="container">
                <Router>
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route exact path="/restaurants/:id/update" component={Update} />
                        <Route exact path="/restaurants/:id" component={Detail} />
                    </Switch>
                </Router>
            </div>
        </RestaurantsContextProvider >
    )
};

export default App;