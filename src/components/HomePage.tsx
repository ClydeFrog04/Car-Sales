import * as React from "react";
import {selectVehicle} from "../actions";
import {connect} from "react-redux";


const HomePage = (props) => {//todo: what should the return type be instead of "any" for tsx class components?

    return (
        <div className="homePage">
            <div className="box content">
                <ol type="1">
                    <li>
                        <button className="button" onClick={() => {
                            props.selectVehicle(0);
                            props.history.push("/sales");
                        }}>select this car
                        </button>
                        2019 Ford Mustang
                    </li>
                    <li>
                        <button className="button" onClick={() => {
                            props.selectVehicle(1);
                            props.history.push("/sales");
                        }}>select this car
                        </button>
                        2019 Toyota 4Runner
                    </li>
                    <li>
                        <button className="button" onClick={() => {
                            props.selectVehicle(2);
                            props.history.push("/sales");
                        }}>select this car
                        </button>
                        2020 Chevy Silverado
                    </li>
                </ol>
            </div>
        </div>
    );
}

const mapStateToProps = state => {
    return{
        cars: state.carSalesReducer.cars,
        additionalPrice: state.carSalesReducer.additionalPrice,
        car: state.carSalesReducer.car,
        additionalFeatures: state.carSalesReducer.additionalFeatures
    };
}

const mapDispatchToProps = {selectVehicle};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
/*
const mapStateToProps = state => {
    return {
        additionalPrice: state.carSalesReducer.additionalPrice,
        car: state.carSalesReducer.car,
        additionalFeatures: state.carSalesReducer.additionalFeatures
    };
};

const mapDispatchToProps = {addFeature};

export default connect(mapStateToProps, mapDispatchToProps)(AdditionalFeature);
*/