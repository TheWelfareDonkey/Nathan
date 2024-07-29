function unlockPage() {
    const password = document.getElementById('password').value;
    const correctPassword = 'Kuromi';
    const lockScreen = document.getElementById('lock-screen');
    const content = document.getElementById('content');
    const errorMessage = document.getElementById('error-message');
    const audio = document.getElementById('background-music');
    
    if (password === correctPassword) {
        lockScreen.style.display = 'none';
        content.style.display = 'block';
        audio.muted = false; // Unmute the audio once the page is unlocked
        audio.play().catch(error => {
            console.error('Error playing audio:', error);
        });
    } else {
        errorMessage.textContent = 'Incorrect password. Please try again.';
    }
}

// Unmute and play the audio after user interaction (e.g., button click)
document.addEventListener('DOMContentLoaded', () => {
    const audio = document.getElementById('background-music');
    audio.muted = true; // Initially mute the audio to comply with autoplay policies
});
