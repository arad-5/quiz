import React, { useEffect, useState } from "react";

//api
import fetchQuestions from "./API/fetchQuestions";

//question difficulity enum
import QuestionType, { Difficulty } from "./types/Question";

// components
import Question from "./components/Question";

const App = () => {
    const [questions, setQuestions] = useState<QuestionType[]>([]);
    const [questionsQuantity, setQuestionsQuantity] = useState<number>(10);
    const [difficulity, setDifficulity] = useState<Difficulty>(
        Difficulty.MEDIUM,
    );
    const [isStarted, setIsStarted] = useState<boolean>(false);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
    const setQuestionsState = async () => {
        setQuestions(await fetchQuestions(questionsQuantity, difficulity));
        setIsLoading(false);
    };

    useEffect(() => {
        console.log(questions);
    }, [questions]);

    const handleStart = () => {
        setQuestionsState();
        setIsStarted(true);
        setIsLoading(true);
    };

    useEffect(() => {
        console.log(currentQuestionIndex);
    }, [currentQuestionIndex]);

    return (
        <div className="App">
            <h1>Arad quiz</h1>
            {!isStarted && <button onClick={handleStart}>start</button>}
            {questions.length > 0 && (
                <Question {...questions[currentQuestionIndex]} />
            )}
            {isLoading && <div>loading ...</div>}
            {currentQuestionIndex <= questions.length - 1 &&
                currentQuestionIndex !== 0 && (
                    <button
                        onClick={() =>
                            setCurrentQuestionIndex((curr) => curr - 1)
                        }
                    >
                        previous
                    </button>
                )}
            {currentQuestionIndex <= questions.length - 2 && (
                <button
                    onClick={() => setCurrentQuestionIndex((curr) => curr + 1)}
                >
                    next
                </button>
            )}
        </div>
    );
};

export default App;
