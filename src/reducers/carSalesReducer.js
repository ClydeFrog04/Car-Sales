export const ADD_FEATURE = "ADD_FEATURE";
export const REMOVE_FEATURE = "REMOVE_FEATURE";
export const SELECT_VEHICLE = "SELECT_VEHICLE";

//api call here to add vehicles?

export const initialState = {
    additionalPrice: 0,//the additional amount is the sum of the additional features added

    cars: [
        {
            id: 0,
            price: 26395,
            name: '2019 Ford Mustang',
            image:
                'https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg',
            features: [],
            additionalFeatures: [
                { id: 1, name: 'V-6 engine', price: 1500 },
                { id: 2, name: 'Racing detail package', price: 1500 },
                { id: 3, name: 'Premium sound system', price: 500 },
                { id: 4, name: 'Rear spoiler', price: 250 }
            ]
        },
        {
            id: 1,
            price: 55985,
            name: '2019 Toyota 4Runner Limited',
            image:
                'https://cdn.motor1.com/images/mgl/WwvEg/s1/2019-toyota-4runner-nightshade-edition.jpg',
            features: [],
            additionalFeatures: [
                { id: 1, name: 'Auto Running Boards', price: 500 },
                { id: 2, name: 'Third Row Seating', price: 365 },
                { id: 3, name: 'Sliding Rear Cargo Deck', price: 650 },
                { id: 4, name: 'Auto Running Board Options', price: 1000 }
            ]
        },
        {
            id: 2,
            price: 36335,
            name: '2020 Chevy Silverado',
            image:
                'https://cdn.motor1.com/images/mgl/WkB73/s1/2020-chevrolet-silverado-hd-high-country.jpg',
            features: [],
            additionalFeatures: [
                { id: 1, name: 'V8 Engine', price: 5055 },
                { id: 2, name: 'High Country Package', price: 3800 },
                { id: 3, name: 'Technology Package', price: 1875 },
                { id: 4, name: 'Off Road Package', price: 350 },
                { id: 5, name: 'Safety Package', price: 1095 },
                { id: 6, name: 'Trailer Camera Package', price: 250 },
            ]
        }
    ],

    car: {//in theory this could be initialized to am emtpy object, but for now I haven't added error handling for that so I am leaving this here
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
        case SELECT_VEHICLE:
            return {
                ...state,
                car: state.cars[action.payload],
                additionalFeatures: state.cars[action.payload].additionalFeatures,
            };
        default:
            return state;
    }
}