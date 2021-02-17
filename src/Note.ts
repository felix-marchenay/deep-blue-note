export declare type NotePure = "A" | "B" | "C" | "D" | "E" | "F" | "G";

export enum Mode {
    Majeur,
    Mineur
}

export enum Alteration {
    Dièse,
    Bémol,
    Bécarre
}

export class Intervalle {
    constructor (
        public readonly ton: number
    ) {}
}

export class Note {
    constructor (
        public readonly pure: NotePure,
        public readonly alteration: Alteration = Alteration.Bécarre,
        public readonly hauteur: number = 0
    ) {}

    public ajouterIntervalle(intervalle: Intervalle): Note {

        if (intervalle.ton === 0) {
            return new Note(
                this.pure,
                this.alteration,
                this.hauteur
            );
        }

        const intervalles = {
            "C" : 0,
            "D" : 1,
            "E" : 2,
            "F" : 2.5,
            "G" : 3.5,
            "A" : 4.5,
            "B" : 5.5
        };

        const alteration = this.alteration === Alteration.Bémol ? -.5 : (this.alteration === Alteration.Bécarre) ? 0 : .5;
        
        const nouvelIntervalle = intervalles[this.pure] + intervalle.ton + alteration;

        for (let [key, value] of Object.entries(intervalles)) {
            const diff = value - nouvelIntervalle%6;
            if (diff <= .5 && diff >= 0) {
                return new Note(
                    <NotePure> key,
                    diff === 0 ? Alteration.Bécarre : Alteration.Bémol,
                    Math.floor(nouvelIntervalle/6) + this.hauteur
                );
            }
        }

        throw "Runtime Error";
    }
}