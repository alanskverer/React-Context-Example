import React, { useState, createContext } from 'react'


export const AppContext = createContext();

export const AppProvider = props => {
    const [state, setState] = useState({
        id: 4,
        name: "Alan"
    }
    )

    return <AppContext.Provider value={[state, setState]}>
        {props.children}</AppContext.Provider>
};
