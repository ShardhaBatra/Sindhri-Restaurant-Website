// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Fade-in on Scroll
const observer = new IntersectionObserver(entries=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      entry.target.classList.add('show');
    }
  });
});
document.querySelectorAll('.fade').forEach(el=> observer.observe(el));


window.addEventListener("scroll", () => {
  const scrolled = window.scrollY;
  const height = document.body.scrollHeight - window.innerHeight;
  document.getElementById("progressBar").style.width = 
    (scrolled / height) * 100 + "%";
});


// Navbar shadow on scroll
window.addEventListener("scroll", () => {
  const nav = document.querySelector(".navbar");
  if(window.scrollY > 50){
    nav.style.boxShadow = "0 5px 15px rgba(0,0,0,0.5)";
  } else {
    nav.style.boxShadow = "none";
  }
});

// Button Ripple Effect
document.querySelectorAll('.btn').forEach(btn=>{
  btn.addEventListener('click', function(e){
    let x = e.clientX - e.target.offsetLeft;
    let y = e.clientY - e.target.offsetTop;
    let ripple = document.createElement("span");
    ripple.style.left = x + "px";
    ripple.style.top = y + "px";
    this.appendChild(ripple);
    setTimeout(()=>ripple.remove(), 600);
  });
});
function toggleMenu() {
  const menu = document.querySelector('.navbar nav ul'); // selector check karo
  menu.classList.toggle('active'); // 'active' class ko toggle kare
}
// Form Alert
const forms = document.querySelectorAll('form');
forms.forEach(form => {
  form.addEventListener('submit', function(e){
    e.preventDefault();
    alert('Thank you! Your submission is received.');
  });
});

// ---------- Menu Filter ----------
const filterButtons = document.querySelectorAll(".filter-btn");
const menuCards = document.querySelectorAll(".menu-card");

filterButtons.forEach(button => {
  button.addEventListener("click", () => {
    const filter = button.dataset.filter;

    menuCards.forEach(card => {
      if (filter === "all" || card.dataset.category === filter) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });
  });
});

// Show only MAIN dishes on page load
window.addEventListener("load", () => {
  menuCards.forEach(card => {
    if (card.dataset.category === "main") {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
});

const searchInput = document.getElementById("menuSearch");

if (searchInput) {
  searchInput.addEventListener("keyup", () => {
    const value = searchInput.value.toLowerCase();

    menuCards.forEach(card => {
      const title = card.querySelector("h3").innerText.toLowerCase();
      card.style.display = title.includes(value) ? "block" : "none";
    });
  });
}


// ---------- Gallery Slide-in on Scroll ----------
const slideImages = document.querySelectorAll(".slide");

const slideObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
}, { threshold: 0.2 });

slideImages.forEach(img => slideObserver.observe(img));
