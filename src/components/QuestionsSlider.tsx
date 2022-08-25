import React from "react";
import styled from "styled-components";
import QuestionType from "../types/Question";
import Question from "./Question";
type Props = { questions: QuestionType[]; currentQuestionIndex: number };

const QuestionSlider = ({ questions, currentQuestionIndex }: Props) => {
    return (
        <Container>
            <Slider>
                <SlidesContainer crrrentIndex={currentQuestionIndex}>
                    {questions.map((question: QuestionType, index) => {
                        return (
                            <Slide key={question.question}>
                                <Question {...question} />
                            </Slide>
                        );
                    })}
                </SlidesContainer>
            </Slider>
        </Container>
    );
};

export default QuestionSlider;

const Container = styled.div`
    height: 80vh;
    width: 100%;
    position: relative;
    overflow: visible;
    max-height: 600px;
`;
const Slider = styled.div`
    height: 100%;
    width: 100%;
    overflow: visible;
    &:before,
    &:after {
        content: "";
        position: absolute;
        width: 50vw;
        height: 100%;
        top: 0%;
        z-index: 10;
        border: 1px solid black;
    }
    &:before {
        right: 100%;
        background-image: linear-gradient(to right, #fff 75%, transparent);
    }
    &:after {
        left: 100%;
        background-image: linear-gradient(to left, #fff 75%, transparent);
    }
`;

const SlidesContainer = styled.div<{ crrrentIndex: number }>`
    display: flex;
    height: 100%;
    transition: transform 150ms ease-out;
    transform: translate3d(
        -${({ crrrentIndex }) => crrrentIndex + "00%"},
        0,
        0
    );
    overflow: visible;
`;
const Slide = styled.div`
    width: 100%;
    height: 100%;
    border: 1px solid black;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 5vw;
    flex-shrink: 0;
`;
