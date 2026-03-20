const mobileMenuBtn = document.querySelector(".mobile-menu-btn");
const navLinks = document.querySelector(".nav-links");
const faqItems = document.querySelectorAll(".faq-item");

if (mobileMenuBtn && navLinks) {
  mobileMenuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("open");
  });
}

faqItems.forEach((item) => {
  const questionBtn = item.querySelector(".faq-question");
  const icon = item.querySelector(".faq-icon");

  if (!questionBtn || !icon) return;

  questionBtn.addEventListener("click", () => {
    const isOpen = item.classList.contains("active");

    faqItems.forEach((faqItem) => {
      const faqBtn = faqItem.querySelector(".faq-question");
      const faqIcon = faqItem.querySelector(".faq-icon");
      faqItem.classList.remove("active");
      if (faqBtn) faqBtn.setAttribute("aria-expanded", "false");
      if (faqIcon) faqIcon.textContent = "+";
    });

    if (!isOpen) {
      item.classList.add("active");
      questionBtn.setAttribute("aria-expanded", "true");
      icon.textContent = "−";
    }
  });
});

if (window.lucide) {
  window.lucide.createIcons();
}
