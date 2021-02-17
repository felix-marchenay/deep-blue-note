import * as Tone from 'tone';

const synth = new Tone.Synth().toDestination();

async function play() {
    const t = Tone.now();
    ["A3", "B3", "C3", "D3"].map((n, i) => synth.triggerAttackRelease(n, "8n", t + i/2));
}

document.querySelector('button#play')?.addEventListener("click", async () => play());