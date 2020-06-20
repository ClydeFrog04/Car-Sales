import {ADD_FEATURE} from "../reducers/carSalesReducer";

//action creator for addFeature action
export const addFeature = newFeature => {
    console.log(newFeature);
    return { type: ADD_FEATURE, payload: newFeature };//the newFeature parameter will be the entire feature object, so we can call the price, id, etc.
};