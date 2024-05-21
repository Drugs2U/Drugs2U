document.addEventListener("DOMContentLoaded", function() {
  const buttons = document.querySelectorAll("button[data-target]");

  buttons.forEach(button => {
    button.addEventListener("click", function() {
      const targetId = this.getAttribute("data-target");
      const targetElement = document.querySelector(`[data-target="${targetId}"]`);

      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth" });
      }
    });
  });

  const backToTopButton = document.getElementById("back2top");
  backToTopButton.addEventListener("click", function() {
    document.body.scrollIntoView({ behavior: "smooth" });
  });

  const productsScrollButton = document.getElementById("product");
  productsScrollButton.addEventListener("click", function() {
    const productsSection = document.querySelector(".products");
    productsSection.scrollIntoView({ behavior: "smooth" });
  });
});