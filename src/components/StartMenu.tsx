import React from "react";
import styled from 'styled-components'

type Props = {
    handleStart: (questionsQuantity: number) => void;
};

const StartMenu = ({ handleStart }: Props) => {
    return (
        <div>
            <Button onClick={() => handleStart(10)}>start</Button>
        </div>
    );
};
export default StartMenu;


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