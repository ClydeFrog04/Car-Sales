import {ADD_FEATURE, REMOVE_FEATURE} from "../reducers/carSalesReducer";

//action creator for addFeature action
export const addFeature = newFeature => {
    return { type: ADD_FEATURE, payload: newFeature };//the newFeature parameter will be the entire feature object, so we can call the price, id, etc.
};

export const removeFeature = featureToRemove => {
    return {type: REMOVE_FEATURE, payload: featureToRemove};
}