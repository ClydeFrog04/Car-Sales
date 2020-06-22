import * as React from "react";
import {selectVehicle} from "../actions/index.js";
// @ts-ignore
import {connect} from "react-redux";//todo: what to do instead of ts-ignore?

//todo: what should the return type be instead of "any" for tsx class components?
const HomePage = (props: { cars: { id: number, name: string, image: string | undefined; }[]; selectVehicle: (arg0: number) => void; history: string[]; }) => {//todo: is this the correct way to define prop types in ts?

    return (
        <div className="homePage">
            <div className="box content">
                <ol type="1">
                    {props.cars.map((car, index) =>{
                        return(
                            <li key={props.cars[index].id}>
                                <figure className="image is-128x128">
                                    <img src={props.cars[index].image} alt=""/>
                                </figure>
                                <button className="button" onClick={() => {
                                    props.selectVehicle(index);
                                    props.history.push("/sales");
                                }}>select this car
                                </button>
                                {props.cars[index].name}
                            </li>
                        );
                    })}
                    {props.cars.map((car, index) =>{
                        return(
                            <li key={props.cars[index].id}>
                                <figure className="image is-128x128">
                                    <img src={props.cars[index].image} alt=""/>
                                </figure>
                                <button className="button" onClick={() => {
                                    props.selectVehicle(index);
                                    props.history.push("/sales");
                                }}>select this car
                                </button>
                                {props.cars[index].name}
                            </li>
                        );
                    })}
                </ol>
            </div>
        </div>
    );
}

const mapStateToProps = (state: { carSalesReducer: { cars: any; additionalPrice: any; car: any; additionalFeatures: any; }; }) => {
    return {
        cars: state.carSalesReducer.cars,
        additionalPrice: state.carSalesReducer.additionalPrice,
        car: state.carSalesReducer.car,
        additionalFeatures: state.carSalesReducer.additionalFeatures
    };
}

const mapDispatchToProps = {selectVehicle};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);