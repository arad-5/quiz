import React, { Dispatch, SetStateAction } from "react";
import QuestionsSlider from "./QuestionsSlider";

import Question from "../../types/Question";
import styled from "styled-components";
import QuizControls from "./QuizControls";
type Props = {
    questions: Question[];
    currentQuestionIndex: number;
    setCurrentQuestionIndex: any;
};

const Index = ({
    questions,
    currentQuestionIndex,
    setCurrentQuestionIndex,
}: Props) => {
    return (
        <>
            {questions.length ? (
                <>
                    <QuestionsSlider
                        questions={questions}
                        currentQuestionIndex={currentQuestionIndex}
                    />
                    <QuizControls
                        questionsLength={questions.length}
                        currentQuestionIndex={currentQuestionIndex}
                        setCurrentQuestionIndex={setCurrentQuestionIndex}
                    />
                </>
            ) : (
                <p>loading....</p>
            )}
        </>
    );
};

export default Index;
