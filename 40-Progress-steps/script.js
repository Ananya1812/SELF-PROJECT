document.addEventListener("DOMContentLoaded", function () {
  const progressSteps = document.querySelectorAll(".progress-step");

  progressSteps.forEach((step, index) => {
    step.addEventListener("click", () => {
      updateProgress(index);
    });
  });

  function updateProgress(selectedIndex) {
    progressSteps.forEach((step, index) => {
      if (index <= selectedIndex) {
        step.classList.add("active");
      } else {
        step.classList.remove("active");
      }
    });
  }
});
