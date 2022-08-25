import React, { useEffect } from "react";
import ShuffleArray from "../../utils/suffleArray";
import styled from "styled-components";

//prop type
import QuestionType from "../../types/Question";
import { useState } from "react";

const Question = (props: QuestionType) => {
    const {
        question: questionTitle,
        correct_answer,
        incorrect_answers,
    } = props;

    const [isAnsweringAllowed, setIsAnsweringAllowed] = useState<Boolean>(true);
    const [selectedAnswer, setSelectedAnswer] = useState<string>("");

    const [answers, setAnswers] = useState(
        ShuffleArray([correct_answer, ...incorrect_answers]),
    );

    const handleAnswer = (answer: string) => {
        setIsAnsweringAllowed(false);
        setSelectedAnswer(answer);
    };

    return (
        <Container>
            <Title>{questionTitle}</Title>
            <AnswersContainer>
                {answers.map((answer) => (
                    <AnswerButton
                        key={answer}
                        disabled={!isAnsweringAllowed}
                        className={`
                        ${
                            selectedAnswer
                                ? answer === correct_answer
                                    ? "correct_answer"
                                    : "incorrect_answer"
                                : ""
                        }
                        ${answer === selectedAnswer ? "selected_answer" : ""}
                            `}
                        onClick={() => {
                            handleAnswer(answer);
                        }}
                    >
                        {answer}
                    </AnswerButton>
                ))}
                {!isAnsweringAllowed ? <div></div> : ""}
            </AnswersContainer>
        </Container>
    );
};

export default Question;

const Container = styled.div`
    font-size: 0.7rem;
    @media only screen and (min-width: 640px) {
        font-size: 1rem;
    }
`;
const Title = styled.h1`
    color: #444444;
    font-weight: 400;
`;
const AnswersContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin-top: 1.5em;
    overflow: visible;
`;
const AnswerButton = styled.button`
    background-color: transparent;
    padding: 0.75em 1.5em;
    border-radius: 0.75em;
    border: 1px solid #aeaeae;
    font-size: 1.3em;
    cursor: pointer;
    margin-right: 0.5em;
    margin-bottom: 0.5em;
    transition: background-color 150ms, color 200ms, border-width 150px;
    position: relative;
    overflow: visible;
    &:hover {
        background-color: #0b59ff;
        color: white;
        border-color: transparent;
    }
    &:disabled {
        border-color: #aeaeae;
        color: #aeaeae;
    }
    &.correct_answer:hover,
    &.incorrect_answer:hover {
        background-color: transparent;
    }
    &.selected_answer {
        border-color: transparent;
        color: white;
    }
    &.correct_answer {
        border-color: #0cb900;
        color: #0cb900;
    }
    &.selected_answer.correct_answer {
        background-color: #0cb900;
        color: #fff;
    }
    &.selected_answer.incorrect_answer {
        background-color: #ff4000;
    }
    &.correct_answer:after {
        content: "✔";
        width: auto;
        font-size: 0.6em;
        color: #fff;
        position: absolute;
        top: -0.6em;
        left: -1px;
        padding: 0.1em 1em;
        background-color: #0cb900;
        border-radius: 0.5em;
        border-bottom-left-radius: 0;
    }
`;
