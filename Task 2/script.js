const header = document.getElementById('card-header');
const content = document.getElementById('card-content');

setTimeout(() => {
    header.innerHTML = `
        <div style="width: 100%; height: 100%; background: #000000;"></div>
    `;
    content.innerHTML = `
        <h2 style="color: #000000;">mukilan</h2>
        <p style="color: #333333;">Creative developer specializing in building beautiful and functional user interfaces. Passionate about clean code and modern design patterns.</p>
    `;
    header.style.background = 'none';
}, 2000);
