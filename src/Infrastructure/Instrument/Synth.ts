import { Accord } from "../../Domain/Accord";
import * as Tone from 'tone';
import { NoteString } from "../NoteString";
import { Gamme } from "../../Domain/Gamme/Gamme";

export class SynthWave
{
    public static accord(accord: Accord): void
    {
        const now = Tone.now();

        accord.notes.forEach(note => {
            const synth = new Tone.Synth().toDestination();
            synth.triggerAttackRelease(
                NoteString.convert(note),
                "8n",
                now
            );
        });
    }

    public static gamme(gamme: Gamme): void
    {
        const now = Tone.now();

        const synth = new Tone.Synth().toDestination();

        gamme.notes.forEach((note, i) => {
            synth.triggerAttackRelease(
                NoteString.convert(note),
                "8n",
                now + i/4
            );
        });
    }
}