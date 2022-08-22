import React, { useEffect } from "react";

//api
import fetchQuestions from "./API/fetchQuestions";

//question difficulity enum
import { Difficulty } from "./types/Question";

// components
import Question from "./components/Question";

const App = () => {
    useEffect(() => {
        const getQuestions = async () => {
            console.log(await fetchQuestions());
        };
        getQuestions();
    }, []);

    return (
        <div className="App">
            <h1>Arad quiz</h1>
            <button>start</button>
            <Question />
            <button>next</button>
        </div>
    );
};

export default App;
