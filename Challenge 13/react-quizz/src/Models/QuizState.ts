import Question from "./Question";

export default interface QuizState{
    questions:Question[],
    status:string
}