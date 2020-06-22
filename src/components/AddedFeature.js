import React from 'react';
import {removeFeature} from "../actions";
import {connect} from "react-redux";
const AddedFeature = props => {

    return (
        <li>
            {/* Add an onClick to run a function to remove a feature */}
            <button className="button" onClick={() => props.removeFeature(props.feature)}>X</button>
            {props.feature.name}
        </li>
    );
};

const mapStateToProps = state => {
    return {
        additionalPrice: state.carSalesReducer.additionalPrice,
        car: state.carSalesReducer.car,
        additionalFeatures: state.carSalesReducer.additionalFeatures
    };
};

const mapDispatchToProps = {removeFeature};

export default connect(mapStateToProps, mapDispatchToProps)(AddedFeature);