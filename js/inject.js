document
  .querySelector("#description-val")
  .addEventListener("click", function (event) {
    event.stopPropagation();
    event.preventDefault();
  });
