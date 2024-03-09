import Question from "./Question";

export default interface QuizState{
    questions:Question[],
    status:string,
    index:number,
    points:number,
    answer:number
}