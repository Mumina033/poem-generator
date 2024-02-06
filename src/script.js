function displayPoem(response) {
  console.log("poem generated");
  new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

function generatePoem(event) {
  event.preventDefault();

  let instructionsInput = document.querySelector("#user-instructions");
  let apiKey = "f9e42a1811b99caa0995a3tbf6o8c341";
  let prompt = `User instructions: Write a short heartfelt love poem about ${instructionsInput.value}`;
  let context =
    "As a versatile poet, craft brief and heartwarming expressions of love. Explore themes such as friendship, lost connections, parental affection, universal love, LGBTQ+ bonds, self-love, and eternal connections. Ensure each poem is concise, avoiding repetitive use of the word 'love.' Aim to encapsulate the essence of love in 4 lines presented in basic HTML. Do not add css or change the styling of the poem. Please follow the provided user instructions for guidance.";

  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  console.log("Generatine poem");
  console.log(`prompt: ${prompt}`);
  console.log(`context:${context}`);

  axios.get(apiUrl).then(displayPoem);
}
let poemElement = document.querySelector("#poem");
poemElement.innerHTML = "";

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
