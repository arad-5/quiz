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

    const [isAnsweringAllowed, setIsAnsweringAllowed] = useState(true);
    const [answers, setAnswers] = useState(
        ShuffleArray([correct_answer, ...incorrect_answers]),
    );
    return (
        <Container>
            <Title>{questionTitle}</Title>
            <AnswersContainer>
                {answers.map((answer) => (
                    <Answer
                        key={answer}
                        disabled={!isAnsweringAllowed}
                        onClick={() => setIsAnsweringAllowed(false)}
                    >
                        {answer}
                    </Answer>
                ))}
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
`;
const Answer = styled.button`
    background-color: transparent;
    padding: 0.75em 1.5em;
    border-radius: 0.75em;
    border: 1px solid #a1a1a1;
    font-size: 1.3em;
    cursor: pointer;
    margin-right: 0.5em;
    margin-bottom: 0.5em;

    transition: background-color 150ms, color 200ms;
    &:hover {
        background-color: #0b59ff;
        color: white;
        border-color: transparent;
    }
`;
