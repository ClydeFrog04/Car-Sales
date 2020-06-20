import {ADD_FEATURE, REMOVE_FEATURE, SELECT_VEHICLE} from "../reducers/carSalesReducer";


export const addFeature = newFeature => {
    return {type: ADD_FEATURE, payload: newFeature};//the newFeature parameter will be the entire feature object, so we can call the price, id, etc.
};

export const removeFeature = featureToRemove => {
    return {type: REMOVE_FEATURE, payload: featureToRemove};
}

export const selectVehicle = vehicleId => {
    return {type: SELECT_VEHICLE, payload: vehicleId};
}