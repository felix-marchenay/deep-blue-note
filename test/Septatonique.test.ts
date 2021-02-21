import { SeptatoniqueFactory } from "../src/Domain/Gamme/SeptatoniqueFactory";
import { Note, Alteration, Mode } from "../src/Domain/Note";

describe("Création d'une gamme septatonique", () => {

    it ("créer une gamme majeure", () => {

        let gamme = SeptatoniqueFactory.build(
            new Note("A", Alteration.Bémol, 1), 
            Mode.Majeur
        );

        expect(gamme.notes.length).toBe(7);
        expect(gamme.notes[0]).toStrictEqual(new Note("A", Alteration.Bémol, 1));
        expect(gamme.notes[1]).toStrictEqual(new Note("B", Alteration.Bémol, 1));
        expect(gamme.notes[2]).toStrictEqual(new Note("C", Alteration.Bécarre, 2));
        expect(gamme.notes[3]).toStrictEqual(new Note("D", Alteration.Bémol, 2));
        expect(gamme.notes[4]).toStrictEqual(new Note("E", Alteration.Bémol, 2));
        expect(gamme.notes[5]).toStrictEqual(new Note("F", Alteration.Bécarre, 2));
        expect(gamme.notes[6]).toStrictEqual(new Note("G", Alteration.Bécarre, 2));
    });

    it ("créer une gamme mineure", () => {

        let gamme = SeptatoniqueFactory.build(
            new Note("G", Alteration.Bécarre, 3), 
            Mode.Mineur
        );

        expect(gamme.notes.length).toBe(7);
        expect(gamme.notes[0]).toStrictEqual(new Note("G", Alteration.Bécarre, 3));
        expect(gamme.notes[1]).toStrictEqual(new Note("A", Alteration.Bécarre, 3));
        expect(gamme.notes[2]).toStrictEqual(new Note("B", Alteration.Bémol , 3));
        expect(gamme.notes[3]).toStrictEqual(new Note("C", Alteration.Bécarre, 4));
        expect(gamme.notes[4]).toStrictEqual(new Note("D", Alteration.Bécarre, 4));
        expect(gamme.notes[5]).toStrictEqual(new Note("E", Alteration.Bémol, 4));
        expect(gamme.notes[6]).toStrictEqual(new Note("F", Alteration.Bécarre, 4));
    });

});