//types & enums
import Question, { Difficulty } from "../types/Question";

const fetchQuestions = async (
    amount: number = 10,
    difficulty: Difficulty = Difficulty.MEDIUM,
): Promise<Question[]> => {
    const URL = `https://opentdb.com/api.php?amount=${amount}&difficulty=${difficulty}&type=multiple`;
    const response = await fetch(URL).then((res) => res.json());

    return await response.results;
};

export default fetchQuestions;
