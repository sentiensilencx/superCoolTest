const cool_button = document.querySelector('.cool-button');
let clickCount = 0;

// Store all messages and colors in an array
const states = [
    { text: 'Ayo stop clicking me', color: '#ffeb99' },
    { text: 'I said stop CLICKING ME!!', color: '#ffd966' },
    { text: 'STOP CLICKING ME OR I SWEAR TO GOD', color: '#ffb347' },
    { text: 'I WILL END YOU', color: '#ff8c42' },
    { text: 'I MEAN IT', color: '#ff6b6b' },
    { text: 'LAST WARNING', color: '#ff4444' },
    { text: 'I AM NOT JOKING', color: '#cc0000' },
    { text: 'Locating your IP address...', color: '#990000' },
    { text: 'IP address found: 192.168.1.1', color: '#660000' },
    { text: 'Sending DDoS attack to your IP...', color: '#c06565' },
    { text: 'Initiating Nuclear Protocol and launching missiles to your location...', color: '#ffffff' }
];

cool_button.addEventListener('click', () => {
    clickCount++;
    const state = states[clickCount - 1];
    
    if (state) {
        cool_button.textContent = state.text;
        cool_button.style.backgroundColor = state.color;
    }
}); 

