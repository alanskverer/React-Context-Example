import React, { useState, useContext, useEffect } from 'react'
import { AppContext } from './AppContext'

function Users() {

    const [state, setState] = useContext(AppContext);

    useEffect(() => {

        console.log("Second page log...");
        console.log(state);
    }, [])

    function log() {
        console.log("object")
        alert(JSON.stringify(state))
    }


    return (
        <div>
            <p>users</p>
            <p>{state.name}</p>
            <button onClick={() => { log() }}>Click to log</button>
        </div>
    )
}

export default Users
