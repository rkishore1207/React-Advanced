import Question from "./Question";

export default interface QuizState{
    questions:Question[],
    status:string,
    index:number,
    points:number,
    answer:number,
    highestScore:number,
    secondsRemaining:number
}