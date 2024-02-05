function generatePoem(event) {
  event.preventDefault();

  new Typewriter("#poem", {
    strings: ["poem here"],
    autoStart: true,
    delay: 1,
    cursor: "",
  });

  poemElement.innerHTML = "poem here";
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
