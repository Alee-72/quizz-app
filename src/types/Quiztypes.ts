import { type } from "os";

export type rawdata = {
category: string
type: string
difficulty: string
question:  string
correct_answer: string
incorrect_answers: string[]
}

export type actualdata = {
    question: string
    answer: string
    options: string[]
}
export type proptypes = {
    question: string
    options: string[]
    callback: (ev: React.FormEvent<EventTarget>) => void
}