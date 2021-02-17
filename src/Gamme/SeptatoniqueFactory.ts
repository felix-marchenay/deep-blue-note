import { Note, Mode, Alteration, Intervalle } from "../Note";
import { Gamme } from "./Gamme";

export class SeptatoniqueFactory {

    static build(note: Note, mode: Mode): Gamme {

        const intervalles = mode === Mode.Mineur ? [0, 1, .5, 1, 1, .5, 1] : [0, 1, 1, .5, 1, 1, 1];
    
        let prevNote = note;
        const notes: Note[] = [];

        intervalles.forEach(intervalle => {
            notes.push(
                prevNote = prevNote.ajouterIntervalle(new Intervalle(intervalle))
            );
        });

        return new Gamme(notes);
    }
}