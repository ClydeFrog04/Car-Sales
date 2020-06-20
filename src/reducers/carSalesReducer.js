export const ADD_FEATURE = "ADD_FEATURE";
export const REMOVE_FEATURE = "REMOVE_FEATURE";

//api call here to add vehicles?

export const initialState = {
    additionalPrice: 0,//the additional amount is the sum of the additional features added
    car: {
        price: 26395,
        name: '2019 Ford Mustang',
        image:
            'https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg',
        features: []
    },
    additionalFeatures: [
        { id: 1, name: 'V-6 engine', price: 1500 },
        { id: 2, name: 'Racing detail package', price: 1500 },
        { id: 3, name: 'Premium sound system', price: 500 },
        { id: 4, name: 'Rear spoiler', price: 250 }
    ]
};

export const carSalesReducer = (state = initialState, action) =>{
    switch (action.type) {
        case ADD_FEATURE:
            //when a feature is added we need to:
            /*
            update the additional price total
            add the feature to the car.features list so it can be passed to the addedfeatures component
             */

            //setting up this block so that we can move features from added to not added lists easily
            const addedFeaturesList = [...state.car.features, action.payload];
            const additionalFeaturesList = state.additionalFeatures.filter(feature =>{
                if(feature.id !== action.payload.id) return feature;
            });

            return{
                ...state,
                additionalFeatures: additionalFeaturesList,
                additionalPrice: state.additionalPrice + action.payload.price,//updating additionalPrice
                car: {...state.car, features:addedFeaturesList}//adding the new feature with action.payload
            };

        case REMOVE_FEATURE:

            //setting up this block so that we can move features from added to not added lists easily
            const additionalFeatsList = [...state.additionalFeatures];
            const removedFeatureList = state.car.features.filter(feature =>{
                if(feature.id !== action.payload.id) return feature;
                else additionalFeatsList.push(action.payload)
            });

            return{
                ...state,
                additionalFeatures: [...additionalFeatsList],
                additionalPrice: state.additionalPrice - action.payload.price,
                car: {...state.car, features: [...removedFeatureList]}
            };
        default:
            return state;
    }
}