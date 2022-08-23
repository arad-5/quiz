import React from "react";

//prop type
import QuestionType from "../types/Question";

const Question = ({ question }: QuestionType) => {
    return <div>{question}</div>;
};

export default Question;
