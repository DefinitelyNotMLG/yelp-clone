import React, { useState, createContext } from 'react';

export const RestaurantsContext = createContext();

export const RestaurantsContextProvider = props => {
const [restaurant, setRestaurants] = useState([]);

const addRestaurants = (restaurant) => {
    setRestaurants([...restaurant, restaurant]);
}

    return (
        <RestaurantsContext.Provider value={{restaurant, setRestaurants, addRestaurants}}>
            {props.children}
        </RestaurantsContext.Provider>
    );
};