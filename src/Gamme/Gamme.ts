import { Note, NotePure, Alteration } from "../Note";

export class Gamme {
    
    constructor(
        public readonly notes: Note[]
    ) {}
}