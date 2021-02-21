import { Note, NotePure, Intervalle, Alteration } from "../src/Domain/Note";

describe("Note", () => {

    it ("à partir d'un La", () => {

        const note = new Note("A");

        const si = note.ajouterIntervalle(new Intervalle(1));
        const sol = note.ajouterIntervalle(new Intervalle(5));
        const mibemol = note.ajouterIntervalle(new Intervalle(3));
        
        expect(si.pure).toBe("B");
        expect(si.hauteur).toBe(0);
        expect(si.alteration).toBe(Alteration.Bécarre);

        expect(sol.pure).toBe("G");
        expect(sol.hauteur).toBe(1);
        expect(sol.alteration).toBe(Alteration.Bécarre);

        expect(mibemol.pure).toBe("E");
        expect(mibemol.hauteur).toBe(1);
        expect(mibemol.alteration).toBe(Alteration.Bémol);
    });

    it ("à partir d'un Fa", () => {

        const note = new Note("F", Alteration.Bécarre, 1);

        const fa = note.ajouterIntervalle(new Intervalle(0));
        const ré = note.ajouterIntervalle(new Intervalle(10));
        const la = note.ajouterIntervalle(new Intervalle(2));
        const do_ = note.ajouterIntervalle(new Intervalle(3.5));
        
        expect(fa.pure).toBe("F");
        expect(fa.hauteur).toBe(1);
        expect(fa.alteration).toBe(Alteration.Bécarre);

        expect(ré.pure).toBe("D");
        expect(ré.hauteur).toBe(3);
        expect(ré.alteration).toBe(Alteration.Bémol);

        expect(la.pure).toBe("A");
        expect(la.hauteur).toBe(1);
        expect(la.alteration).toBe(Alteration.Bécarre);

        expect(do_.pure).toBe("C");
        expect(do_.hauteur).toBe(2);
        expect(do_.alteration).toBe(Alteration.Bécarre);
    });

    it ("à partir d'un Do dièse", () => {

        const note = new Note("C", Alteration.Dièse, 2);

        const do_ = note.ajouterIntervalle(new Intervalle(0));
        const mi = note.ajouterIntervalle(new Intervalle(1));
        const fa = note.ajouterIntervalle(new Intervalle(2));

        expect(do_.pure).toBe("C");
        expect(do_.hauteur).toBe(2); 
        expect(do_.alteration).toBe(Alteration.Dièse);

        expect(mi.pure).toBe("E");
        expect(mi.hauteur).toBe(2);
        expect(mi.alteration).toBe(Alteration.Bémol);

        expect(fa.pure).toBe("F");
        expect(fa.hauteur).toBe(2);
        expect(fa.alteration).toBe(Alteration.Bécarre);
    });

    it ("à partir d'un Sol dièse", () => {

        const note = new Note("G", Alteration.Dièse, -2);

        const la = note.ajouterIntervalle(new Intervalle(.5));
        const sibemol = note.ajouterIntervalle(new Intervalle(1));

        expect(la.pure).toBe("A");
        expect(la.hauteur).toBe(-2); 
        expect(la.alteration).toBe(Alteration.Bécarre);

        expect(sibemol.pure).toBe("B");
        expect(sibemol.hauteur).toBe(-2);
        expect(sibemol.alteration).toBe(Alteration.Bémol);
    });

    it ("à partir d'un Si bémol", () => {

        const note = new Note("B", Alteration.Bémol, 1);

        const do_ = note.ajouterIntervalle(new Intervalle(1));

        expect(do_.pure).toBe("C");
        expect(do_.hauteur).toBe(2); 
        expect(do_.alteration).toBe(Alteration.Bécarre);
    });
});