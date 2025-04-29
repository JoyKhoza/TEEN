function showLove() {
    const secretMessage = document.getElementById("secretMessage");
    
    // Change the secret message
    secretMessage.textContent = "You are amazing, beautiful, and loved more than you can imagine, Lethabo's love! 🌟";
  
    // Add floating hearts
    for (let i = 0; i < 10; i++) {
      const heart = document.createElement("div");
      heart.classList.add("heart");
      heart.textContent = "❤️";
      document.body.appendChild(heart);
  
      // Randomize position and animation
      heart.style.position = "absolute";
      heart.style.top = `${Math.random() * window.innerHeight}px`;
      heart.style.left = `${Math.random() * window.innerWidth}px`;
      heart.style.animation = `floatUp ${2 + Math.random() * 3}s ease-out`;
  
      setTimeout(() => {
        heart.remove();
      }, 4000);
    }
  
    // Add confetti
    for (let i = 0; i < 50; i++) {
      const confetti = document.createElement("div");
      confetti.classList.add("confetti");
      document.body.appendChild(confetti);
  
      confetti.style.position = "absolute";
      confetti.style.width = "10px";
      confetti.style.height = "10px";
      confetti.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 70%)`;
      confetti.style.top = `${Math.random() * window.innerHeight}px`;
      confetti.style.left = `${Math.random() * window.innerWidth}px`;
      confetti.style.animation = `fall ${2 + Math.random() * 3}s ease-out`;
  
      setTimeout(() => {
        confetti.remove();
      }, 3000);
    }
  
    // Play a sound effect (optional, requires an audio file)
    const audio = new Audio('path-to-audio-file.mp3'); // Replace with a real file path
    audio.play();
  }
  
  