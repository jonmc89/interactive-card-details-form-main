// Prevent default behaviour of submit button

document
  .getElementById("submitBtn")
  .addEventListener("click", function (event) {
    event.preventDefault();
  });
