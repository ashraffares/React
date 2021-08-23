import React from "react";
// import Effect from "./component/useeffect";
// import State from './component/usestate';
import GreetingHooks from "./component/Hooks";
import Greeting from './component/class/index';
import './App.css';


const App = () => {
    return (
        <>
            <GreetingHooks />
            <Greeting />
        </>
    )
}

export default App;
