let isLoggedIn = localStorage.getItem("loggedIn");

document.querySelectorAll('a[href="#verticals"]').forEach(link => {
    link.addEventListener("click", function(e){

        if(isLoggedIn !== "true"){
            e.preventDefault();
            alert("Please login first.");
            window.location.href = "login.html";
        }
    });
});


const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => navbar.classList.toggle('scrolled', scrollY > 30));
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');
hamburger.addEventListener('click', () => { hamburger.classList.toggle('open'); mobileMenu.classList.toggle('open'); });
function closeMobile() { hamburger.classList.remove('open'); mobileMenu.classList.remove('open'); }
const io = new IntersectionObserver(entries => {
  entries.forEach(e => { if(e.isIntersecting){ e.target.classList.add('visible'); io.unobserve(e.target); } });
}, { threshold: 0.1 });
document.querySelectorAll('.fade-up, .road-item').forEach(el => io.observe(el));
document.querySelectorAll('.verticals-grid .fade-up, .pricing-grid .price-card').forEach((el,i) => { el.style.transitionDelay = (i * 0.1) + 's'; });




function handleSubmit(e) {
  e.preventDefault();

  if(localStorage.getItem("loggedIn") !== "true"){
      alert("Please login first.");
      window.location.href = "login.html";
      return;
  }



  const name = document.querySelector('input[type="text"]').value.trim();
  const phone = document.querySelector('input[type="tel"]').value.trim();
  const email = document.querySelector('input[type="email"]').value.trim();
  const service = document.querySelector('select').value;
  const message = document.querySelector('textarea').value.trim();

  // ✅ Name validation
  if (name === "") {
    alert("Please enter your name");
    return;
  }

  // ✅ Phone validation (already there, improved)
  if (!/^[0-9]{10}$/.test(phone)) {
    alert("Please enter a valid 10-digit mobile number");
    return;
  }

  // ✅ Email validation
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (email === "") {
    alert("Please enter your email address");
    return;
  } else if (!emailPattern.test(email)) {
    alert("Please enter a valid email address");
    return;
  }
else if(message===""){
  alert("please enter some message");
}
  // ✅ Service validation (optional but recommended)
  if (service === "") {
    alert("Please select a service");
    return;
  }

  // WhatsApp number
  const whatsappNumber = "918093044991";

  const text = `Hello, I want to book a consultation:
Name: ${name}
Phone: ${phone}
Email: ${email}
Service: ${service}
Message: ${message}`;

  const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`;

  window.open(url, '_blank');
}


