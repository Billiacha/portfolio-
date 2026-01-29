document.addEventListener("DOMContentLoaded", function() {
  const form = document.getElementById("contactForm");
  const spinner = document.getElementById("form-spinner");
  const successMessage = document.getElementById("success-message");
  const errorMessage = document.getElementById("error-message");

  form.addEventListener("submit", async function(e) {
    e.preventDefault(); // prevent page reload

    // Reset messages
    spinner.style.display = "block";
    successMessage.style.display = "none";
    errorMessage.style.display = "none";

    const formData = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/xlgnjvvq", {
        method: "POST",
        body: formData,
        headers: { 'Accept': 'application/json' }
      });

      spinner.style.display = "none";

      if (response.ok) {
        successMessage.style.display = "block";
        successMessage.classList.add("fade-in");
        form.reset();
      } else {
        errorMessage.style.display = "block";
      }
    } catch (error) {
      spinner.style.display = "none";
      errorMessage.style.display = "block";
    }
  });
});
