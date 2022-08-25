import React, { useEffect, useState } from "react";
import styled from "styled-components";
//api
import fetchQuestions from "./API/fetchQuestions";

//question difficulity enum
import QuestionType, { Difficulty } from "./types/Question";

// components
import QuestionsSliders from "./components/quiz/QuestionsSlider";
import StartMenu from "./components/StartMenu";
import Quiz from "./components/quiz/index";

const App = () => {
    const [questions, setQuestions] = useState<QuestionType[]>([]);
    const [questionsQuantity, setQuestionsQuantity] = useState<number>(10);
    const [difficulity, setDifficulity] = useState<Difficulty>(
        Difficulty.MEDIUM,
    );
    const [isStarted, setIsStarted] = useState<boolean>(false);

    const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
    const setQuestionsState = async () => {
        setQuestions(await fetchQuestions(questionsQuantity, difficulity));
    };

    useEffect(() => {
        console.log(questions);
    }, [questions]);

    const handleStart = () => {
        setQuestionsState();
        setIsStarted(true);
    };

    useEffect(() => {
        console.log(currentQuestionIndex);
    }, [currentQuestionIndex]);

    return (
        <Container className="App">
            <h1>Arad quiz</h1>
            <QuizContainer>
                {isStarted ? (
                    <Quiz
                        questions={questions}
                        currentQuestionIndex={currentQuestionIndex}
                        setCurrentQuestionIndex={setCurrentQuestionIndex}
                    />
                ) : (
                    <StartMenu handleStart={handleStart} />
                )}
            </QuizContainer>
        </Container>
    );
};

export default App;

//styles
const Container = styled.div`
    padding: 1rem;
    margin: 0 auto;
    max-width: 900px;
    overflow: visible;
`;
const QuizContainer = styled.div`
    min-height: 80vh;
    width: 100%;
    position: relative;
    overflow: visible;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;
