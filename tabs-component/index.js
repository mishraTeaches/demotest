const tab = document.querySelectorAll("[data-tab-target]");
const content = document.querySelectorAll("[data-tab-content]");

tab.forEach((data) => {
  data.addEventListener("click", (e) => {
    const target = document.querySelector(data.dataset.tabTarget);
    content.forEach((tabContent) => {
      tabContent.classList.remove("active");
    });
    target.classList.add("active");
  });
});
