// Countdown Timer for Events Page
document.addEventListener('DOMContentLoaded', function() {
    // Set the date we're counting down to (June 15, 2025)
    const countDownDate = new Date("June 15, 2025 09:00:00").getTime();
  
    // Update the countdown every 1 second
    const countdownFunction = setInterval(function() {
      // Get today's date and time
      const now = new Date().getTime();
      
      // Find the distance between now and the countdown date
      const distance = countDownDate - now;
      
      // Time calculations for days, hours, minutes and seconds
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);
      
      // Display the result
      document.getElementById("days").innerHTML = days.toString().padStart(2, '0');
      document.getElementById("hours").innerHTML = hours.toString().padStart(2, '0');
      document.getElementById("minutes").innerHTML = minutes.toString().padStart(2, '0');
      document.getElementById("seconds").innerHTML = seconds.toString().padStart(2, '0');
      
      // If the countdown is finished, display message
      if (distance < 0) {
        clearInterval(countdownFunction);
        document.getElementById("countdown").innerHTML = "EVENT STARTED!";
      }
    }, 1000);
  });