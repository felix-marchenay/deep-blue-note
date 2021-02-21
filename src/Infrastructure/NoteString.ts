import { Note, Alteration } from "../Domain/Note";

export class NoteString {
    
    static convert(note: Note): string {
        return note.pure + (note.alteration === Alteration.Bémol ? 'b' : Alteration.Dièse ? '#' : '') + note.hauteur;
    }
}