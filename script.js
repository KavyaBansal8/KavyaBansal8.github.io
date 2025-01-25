function toggleContent(button) {
    const extraContent = button.nextElementSibling;
    if (extraContent.style.display === "none" || extraContent.style.display === "") {
      extraContent.style.display = "block";
      button.textContent = "Show Less";
    } else {
      extraContent.style.display = "none";
      button.textContent = "Read More";
    }
  }
  