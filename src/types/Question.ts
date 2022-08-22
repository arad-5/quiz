export enum Difficulty {
    EASY = "easy",
    MEDIUM = "medium",
    HARD = "hard",
}

type Question = {
    category: string;
    type: string;
    difficulty: Difficulty;
    question: string;
    correct_answer: string;
    incorrect_answers: string[];
};

export default Question;
