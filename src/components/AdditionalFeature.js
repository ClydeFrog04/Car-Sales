import React from 'react';
import {addFeature} from "../actions";
import {connect} from "react-redux";

const AdditionalFeature = props => {

    return (
        <li>
            {/* Add an onClick that will let you add a feature to your car */}
            <button className="button" onClick={() => props.addFeature(props.feature)}>Add</button>
            {props.feature.name} (+{props.feature.price})
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

const mapDispatchToProps = {addFeature};

export default connect(mapStateToProps, mapDispatchToProps)(AdditionalFeature);
