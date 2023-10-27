// Add this JavaScript to index.js
function updateClock() {
    const now = new Date();
    const seconds = now.getSeconds();
    const minutes = now.getMinutes();
    const hours = now.getHours() % 12; // Ensure 12-hour format
    
    

    const secHand = document.getElementById('secHand');
    const minHand = document.getElementById('minHand');
    const hrHand = document.getElementById('hrHand');
  
    const secDeg = (seconds / 60) * 360;
    const minDeg = (minutes / 60) * 360 + (seconds / 60) * 6;
    const hrDeg = (hours / 12) * 360 + (minutes / 60) * 30;
  
    secHand.style.transform = `translateX(-50%) rotate(${secDeg}deg)`;
    minHand.style.transform = `translateX(-50%) rotate(${minDeg}deg)`;
    hrHand.style.transform = `translateX(-50%) rotate(${hrDeg}deg)`;
  }
  
  setInterval(updateClock, 1000); // Update the clock every second
  updateClock(); // Initial update

  S