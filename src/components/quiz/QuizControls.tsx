import React from "react";
import styled from "styled-components";

type Props = {
    questionsLength: number;
    currentQuestionIndex: number;
    setCurrentQuestionIndex: any;
};

const QuizControls = ({
    questionsLength,
    currentQuestionIndex,
    setCurrentQuestionIndex,
}: Props) => {
    return (
        <ControlsContainer>
            {currentQuestionIndex <= questionsLength - 1 &&
                currentQuestionIndex !== 0 && (
                    <Button
                        onClick={() =>
                            setCurrentQuestionIndex((curr: number) => curr - 1)
                        }
                        style={{ marginRight: "auto" }}
                    >
                        previous
                    </Button>
                )}
            {currentQuestionIndex <= questionsLength - 2 && (
                <Button
                    onClick={() =>
                        setCurrentQuestionIndex((curr: number) => curr + 1)
                    }
                    style={{ marginLeft: "auto" }}
                >
                    next
                </Button>
            )}
        </ControlsContainer>
    );
};

export default QuizControls;

//styles

const ControlsContainer = styled.div`
    width: 100%;
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
