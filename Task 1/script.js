let text = "", i = 0;
const input = document.getElementById('textInput'), disp = document.getElementById('display'), speed = document.getElementById('speedValue');
input.addEventListener('input', e => { text = e.target.value; i = 0; });
document.getElementById('increaseBtn').addEventListener('click', () => speed.value++);
document.getElementById('decreaseBtn').addEventListener('click', () => speed.value > 0 && speed.value--);

function play() {
    if (speed.value > 0) {
        disp.innerText = text.slice(0, i);
        i = (i >= text.length) ? 1 : i + 1;
    }
    setTimeout(play, 500 / (speed.value || 1));
}
play();
