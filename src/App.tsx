import React, { useEffect, useState } from "react";
import styled from "styled-components";
//api
import fetchQuestions from "./API/fetchQuestions";

//question difficulity enum
import QuestionType, { Difficulty } from "./types/Question";

// components
import QuestionsSliders from "./components/QuestionsSlider";

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
        <Container className="App">
            <h1>Arad quiz</h1>
            {!isStarted && <button onClick={handleStart}>start</button>}
            <QuestionsSliders
                questions={questions}
                currentQuestionIndex={currentQuestionIndex}
            />
            {isLoading && <div>loading ...</div>}
            <ButtonsContainer>
                {currentQuestionIndex <= questions.length - 1 &&
                    currentQuestionIndex !== 0 && (
                        <Button
                            onClick={() =>
                                setCurrentQuestionIndex((curr) => curr - 1)
                            }
                            style={{ marginRight: "auto" }}
                        >
                            previous
                        </Button>
                    )}
                {currentQuestionIndex <= questions.length - 2 && (
                    <Button
                        onClick={() =>
                            setCurrentQuestionIndex((curr) => curr + 1)
                        }
                        style={{ marginLeft: "auto" }}
                    >
                        next
                    </Button>
                )}
            </ButtonsContainer>
        </Container>
    );
};

export default App;

//styles
const Container = styled.div`
    height: 100vh;
    padding: 1rem;
    max-width: 800px;
    margin: 0 auto;
    /* border: 1px solid black; */
    overflow: visible;
`;

const ButtonsContainer = styled.div`
    display: flex;
    justify-content: space-between;
`;
const Button = styled.button`
    background-color: transparent;
    padding: 1rem 2rem;
    border-radius: 1rem;
    border: 1px solid #a1a1a1;
    font-size: 1.3rem;
    cursor: pointer;
    transition: background-color 150ms, color 200ms;
    &:hover {
        background-color: #0b59ff;
        color: white;
        border-color: transparent;
    }
`;
