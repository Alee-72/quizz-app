import { type } from "os";

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