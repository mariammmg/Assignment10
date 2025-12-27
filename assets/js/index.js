//todo make the other colors settings work

let indicators = document.querySelectorAll(".carousel-indicator");
const cards = document.querySelectorAll(".testimonial-card");
const nextBtn = document.getElementById("next-testimonial");
const prevBtn = document.getElementById("prev-testimonial");
const carousel = document.getElementById("testimonials-carousel");
const portfolioFilter = document.querySelectorAll(".portfolio-filter");
const portfolioItems = document.querySelectorAll(".portfolio-item");
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");
const mobileBtn = document.querySelector(".mobile-menu-btn");
const TopBtn = document.getElementById("scroll-to-top");
const darkBtn = document.getElementById("theme-toggle-button");
const settingsToggle = document.getElementById("settings-toggle");
const settings = document.getElementById("settings-sidebar");
const closeSettings = document.getElementById("close-settings");
const fonts = document.querySelectorAll(".font-option");
const body = document.body;
const reset = document.getElementById("reset-settings");
const colors = document.getElementById("theme-colors-grid");
const colorsOptions = Array.from(colors.children);
console.log(colors.children[0].getAttribute("title"));
let index = 0;
function empty() {
  navLinks[0].classList.add("active");
  body.style.fontFamily = "'Tajawal', sans-serif";
  window.scrollTo(0, 0);
}
empty();
mobileBtn.addEventListener("click", function () {
  document.querySelector(".nav-links").classList.toggle("active");
});
TopBtn.addEventListener("click", function () {
  window.scrollTo(0, 0);
});
darkBtn.addEventListener("click", function () {
  document.documentElement.classList.toggle("dark");
});
settingsToggle.addEventListener("click", function () {
  settings.classList.replace("translate-x-full", "translate-x-0");
});
closeSettings.addEventListener("click", function () {
  settings.classList.replace("translate-x-0", "translate-x-full");
});
reset.addEventListener("click", function () {
  settings.classList.replace("translate-x-0", "translate-x-full");
  body.style.fontFamily = "'Tajawal', sans-serif";
  document.querySelector(".font-option[data-font='tajawal']").click();
  colorsOptions[0].click();
});
fonts.forEach(function (font) {
  font.addEventListener("click", function () {
    fonts.forEach(function (f) {
      f.classList.remove(
        "active",
        "border-primary",
        "bg-slate-50",
        "dark:bg-slate-800"
      );
      f.classList.add("border-slate-200", "dark:border-slate-700");
    });
    font.classList.add(
      "active",
      "border-primary",
      "bg-slate-50",
      "dark:bg-slate-800"
    );
    font.classList.remove("border-slate-200", "dark:border-slate-700");
    body.style.fontFamily = font.getAttribute("data-font");
  });
});
colorsOptions.forEach(function (color) {
  color.addEventListener("click", function () {
    colorsOptions.forEach(function (c) {
      c.classList.remove(
        "ring-2",
        "ring-primary",
        "ring-offset-2",
        "ring-offset-white",
        "dark:ring-offset-slate-900"
      );
    });
    if (color.getAttribute("title") == "Purple Blue") {
      body.style.cssText = `--color-primary: #6366f1; --color-secondary: #8b5cf6; --color-accent: #a855f7;`;
      color.classList.add(
        "ring-2",
        "ring-primary",
        "ring-offset-2",
        "ring-offset-white",
        "dark:ring-offset-slate-900"
      );
    }
    if (color.getAttribute("title") == "Pink Orange") {
      color.classList.add(
        "ring-2",
        "ring-primary",
        "ring-offset-2",
        "ring-offset-white",
        "dark:ring-offset-slate-900"
      );

      body.style.cssText = `--color-primary: #ec4899; --color-secondary: #f97316; --color-accent: #fb923c;`;
    }
  });
});

window.addEventListener("scroll", function () {
  if (window.scrollY < 300) {
    TopBtn.classList.replace("opacity-100", "opacity-0");
    TopBtn.classList.replace("visible", "invisible");
  }
  if (window.scrollY > 300) {
    console.log("hello");
    TopBtn.classList.replace("opacity-0", "opacity-100");
    TopBtn.classList.replace("invisible", "visible");
  }

  let id = "";
  sections.forEach(function (section) {
    const sectiontop = section.offsetTop - 88;
    const sectionheight = section.offsetHeight;
    if (
      window.scrollY >= sectiontop &&
      window.scrollY < sectiontop + sectionheight
    ) {
      id = section.getAttribute("id");
    }
  });
  navLinks.forEach(function (link) {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${id}`) {
      link.classList.add("active");
    }
  });
});
portfolioFilter.forEach(function (filter) {
  filter.addEventListener("click", function () {
    portfolioFilter.forEach(function (f) {
      f.classList.add(
        ..."bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 font-bold transition-all duration-300 hover:bg-slate-100 dark:hover:bg-slate-700 border border-slate-300 dark:border-slate-700".split(
          " "
        )
      );
      f.classList.remove(
        ..."bg-linear-to-r from-primary to-secondary text-white font-bold transition-all duration-300 hover:shadow-lg hover:shadow-primary/50".split(
          " "
        )
      );
    });

    filter.classList.remove(
      ..."bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 font-bold transition-all duration-300 hover:bg-slate-100 dark:hover:bg-slate-700 border border-slate-300 dark:border-slate-700".split(
        " "
      )
    );
    filter.classList.add(
      ..."bg-linear-to-r from-primary to-secondary text-white font-bold transition-all duration-300 hover:shadow-lg hover:shadow-primary/50".split(
        " "
      )
    );
    const filterValue = this.getAttribute("data-filter");

    portfolioItems.forEach(function (item) {
      const category = item.getAttribute("data-category");

      if (filterValue === "all" || category === filterValue) {
        if (item.style.display === "block") {
          item.style.transition = "none";
          item.style.opacity = "0";
          item.style.transform = "scale(0.8)";
          item.offsetHeight;
          item.style.transition = "opacity 0.3s, transform 0.3s";
          setTimeout(() => {
            item.style.opacity = "1";
            item.style.transform = "scale(1)";
          }, 10);
        } else {
          item.style.display = "block";
          item.style.opacity = "1";
          item.style.transform = "scale(1)";
        }
      } else {
        if (item.style.display === "block") {
          item.style.opacity = "0";
          item.style.transform = "scale(0.8)";
          setTimeout(() => {
            item.style.display = "none";
          }, 300);
        }
      }
    });
  });
});
document.querySelector(".portfolio-filter.active").click();

indicators.forEach(function (indicator) {
  indicator.addEventListener("click", function () {
    indicators.forEach(function (ind) {
      ind.classList.remove("active");
    });
    indicator.classList.add("active");
    index = parseInt(indicator.getAttribute("data-index"));
    updateCarousel();
  });
});
function cardsPerView() {
  if (window.innerWidth >= 1024) return 3;
  if (window.innerWidth >= 676) return 2;
  return 1;
}
function updateCarousel() {
  const cardWidth = cards[0].offsetWidth;
  carousel.style.transform = `translateX(${index * cardWidth}px)`;
}
prevBtn.addEventListener("click", function () {
  const Maxwidth = cards.length - cardsPerView();
  index = index <= 0 ? Maxwidth : index - 1;
  updateCarousel();
});
nextBtn.addEventListener("click", function () {
  const Maxwidth = cards.length - cardsPerView();
  index = index >= Maxwidth ? 0 : index + 1;
  updateCarousel();
});
