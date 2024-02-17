gsap.to("#cursor", {
    opacity: 0,
    repeat: -1,
    yoyo: true,
    duration: 0.5,
    ease: "power1.inOut"
  });
  
  document.getElementById('text-form').addEventListener('submit', function(event) {
    event.preventDefault();
  
    let userText = document.getElementById('user-text').value;
    let words = userText.split(' ');
  
    let tlMaster = gsap.timeline({ repeat: -1 });
  
    words.forEach((word) => {
      let tlText = gsap.timeline({ repeat: 1, yoyo: true, repeatDelay: 1 });
      tlText.to("#animated-text", { duration: 1, text: word });
      tlMaster.add(tlText);
    });
  });