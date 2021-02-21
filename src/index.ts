import { SeptatoniqueFactory } from './Domain/Gamme/SeptatoniqueFactory';
import { Note, Alteration, Mode, NotePure } from './Domain/Note';
import { AccordFactory } from './Domain/AccordFactory';
import { SynthWave } from './Infrastructure/Instrument/Synth';

async function play()
{    
    const gamme = SeptatoniqueFactory.build(
        new Note(
            <NotePure>(<HTMLInputElement>document.querySelector('input[name="note"]:checked')).value, 
            Alteration.Bécarre, 
            3
        ),
        ((<HTMLInputElement>document.querySelector('input[name="mode"]:checked')).value === 'maj') ? Mode.Majeur : Mode.Mineur
    );
    
    SynthWave.gamme(gamme);
}

async function playChord()
{
    const accord = AccordFactory.build(
        new Note(
            <NotePure>(<HTMLInputElement>document.querySelector('input[name="note"]:checked')).value, 
            Alteration.Bécarre, 
            4
        ),
        ((<HTMLInputElement>document.querySelector('input[name="mode"]:checked')).value === 'maj') ? Mode.Majeur : Mode.Mineur
    );

    SynthWave.accord(accord);
}

async function playChordDeg(deg: number|null)
{
    if (deg === null) {
        deg = parseInt(
            (<HTMLInputElement>document.querySelector('input[name="deg"]')).value
        );
    }

    const gamme = SeptatoniqueFactory.build(
        new Note(
            <NotePure>(<HTMLInputElement>document.querySelector('input[name="note"]:checked')).value, 
            Alteration.Bécarre, 
            3
        ),
        ((<HTMLInputElement>document.querySelector('input[name="mode"]:checked')).value === 'maj') ? Mode.Majeur : Mode.Mineur
    );

    SynthWave.accord(gamme.accordDegré(deg));
}

document.querySelector('button#play')?.addEventListener("click", async () => play());
document.querySelector('button#play_chord')?.addEventListener("click", async () => playChord());
document.querySelector('button#play_chord_deg')?.addEventListener("click", async () => playChordDeg(null));
document.addEventListener('keypress', (ev) => {
    if (ev.keyCode >= 49 && ev.keyCode <= 55) {
        playChordDeg(ev.keyCode - 48);
    }
})