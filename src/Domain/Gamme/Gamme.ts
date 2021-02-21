import { Note, Intervalle } from "../Note";
import { Accord } from "../Accord";

export class Gamme
{    
    constructor(
        public readonly notes: Note[]
    ) {}

    public accordDegré(degré: number): Accord
    {
        if(degré < 1 || degré > this.notes.length) {
            throw "degré : " + degré + " impossible";
        }

        const nb = degré-1;
        const n1 = this.notes[nb];

        const n2 = (nb+2 >= this.notes.length)
            ? this.notes[nb + 2 - this.notes.length].ajouterIntervalle(new Intervalle(6))
            : this.notes[nb+2];

        const n3 = (nb+4 >= this.notes.length)
            ? this.notes[nb + 4 - this.notes.length].ajouterIntervalle(new Intervalle(6))
            : this.notes[nb+4];

        return new Accord(
            [n1, n2, n3]
        );
    }
}