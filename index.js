window.addEventListener("DOMContentLoaded", () => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      const id = entry.target.getAttribute("id");
      if (entry.isIntersecting) {
        document.querySelector(`[href="#${id}"]`).classList.add("active");
      } else {
        document.querySelector(`[href="#${id}"]`).classList.remove("active");
      }
    });
  });

  // Track all sections that have an `id` applied
  document.querySelectorAll("section[id]").forEach((section) => {
    observer.observe(section);
  });
});

var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-50px";
  }
  prevScrollpos = currentScrollPos;
};


const toggleButton = document.getElementsByClassName('hamburger')[0]
const navbarLinks = document.getElementsByClassName('mobile_navbarlinkscontainer')[0]

toggleButton.addEventListener('click', () => {
  navbarLinks.classList.toggle('active')
})

var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("mobile_navbar").style.top = "0";
  } else {
    document.getElementById("mobile_navbar").style.top = "-50px";
  }
  prevScrollpos = currentScrollPos;
};
