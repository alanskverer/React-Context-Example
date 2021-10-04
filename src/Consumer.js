import React, { useState, useContext, useEffect } from 'react'
import { AppContext } from './AppContext'
import { useHistory } from "react-router-dom";

function Consumer() {

    let history = useHistory();

    const [state, setState] = useContext(AppContext);

    useEffect(() => {
        console.log("Init log..");
        console.log(state);
    }, [])

    const btnClick = () => {

        // setState(prevState => {})
        setState({ ...state, name: "Changed!" })
        history.push("/users");

    }

    return (
        <div>
            <p>brra</p>
            <p>{state.name}</p>
            <button onClick={() => btnClick()}>cLICK ME</button>
        </div>
    )
}

export default Consumer
