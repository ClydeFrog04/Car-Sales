import React from 'react';
import {connect} from "react-redux";

import Header from './components/Header';
import AddedFeatures from './components/AddedFeatures';
import AdditionalFeatures from './components/AdditionalFeatures';
import Total from './components/Total';
import {addFeature} from "./actions";
import {Route, useHistory} from "react-router";
import HomePage from "./components/HomePage.tsx";

const App = (props) => {

    const history = useHistory();

    return (
        <div className="App">
            <Route exact path="/">
                <HomePage history={history}/>
            </Route>
            <Route path="/sales">
                <div className="boxes">
                    <div className="box">
                        <button className="home button" onClick={() => history.push("/")}>{"<-"}Select Another Car</button>
                        <Header car={props.car}/>
                        <AddedFeatures car={props.car}/>
                    </div>
                    <div className="box">
                        <AdditionalFeatures additionalFeatures={props.additionalFeatures}/>
                        <Total car={props.car} additionalPrice={props.additionalPrice}/>
                    </div>
                </div>
            </Route>
        </div>
    );
};

const mapStateToProps = state => {
    return {
        additionalPrice: state.carSalesReducer.additionalPrice,
        car: state.carSalesReducer.car,
        additionalFeatures: state.carSalesReducer.additionalFeatures
    };
};

const mapDispatchToProps = {addFeature};

export default connect(mapStateToProps, mapDispatchToProps)(App);
