const scrollBtn = document.getElementById("scrollToTopBtn");
window.addEventListener("scroll", () => {
  if (window.scrollY > 200) {
    scrollBtn.classList.remove(
      "opacity-0",
      "pointer-events-none",
      "translate-y-8"
    );
    scrollBtn.classList.add("opacity-100", "translate-y-0");
  } else {
    scrollBtn.classList.add(
      "opacity-0",
      "pointer-events-none",
      "translate-y-8" // translate-y-8 means move the element down by 2rem (32px) (transform: translateY(2rem);).
    );
    scrollBtn.classList.remove("opacity-100", "translate-y-0");
  }
});
scrollBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// Banner Text Animation
window.addEventListener("DOMContentLoaded", function () {
  const bannerElements = document.querySelectorAll(".banner-animate");
  setTimeout(function () {
    bannerElements.forEach((element, index) => {
      setTimeout(() => {
        element.classList.add("opacity-100", "translate-y-0");
        element.classList.remove("opacity-0", "translate-y-8");
      }, index * 150); // Stagger animation by 150ms for each element
    });
  }, 100);
});

// Scroll-triggered Animation
window.addEventListener("DOMContentLoaded", function () {
  const scrollElements = document.querySelectorAll(".scroll-animate");
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("opacity-100", "translate-y-0");
          entry.target.classList.remove("opacity-0", "translate-y-8");
        }
      });
    },
    {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    }
  );

  scrollElements.forEach((element) => {
    observer.observe(element);
  });
});
