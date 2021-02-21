import { Accord } from "./Accord";
import { Note, Intervalle, Mode } from "./Note";

export class AccordFactory
{
    static build (note: Note, mode: Mode = Mode.Majeur): Accord {
        const intervalles = mode === Mode.Majeur ? [0, 2, 3.5] : [0, 1.5, 3.5];

        return new Accord(
            intervalles.map(intervalle => note.ajouterIntervalle(new Intervalle(intervalle)))
        );
    }
}