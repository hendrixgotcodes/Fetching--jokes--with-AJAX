document.getElementById("btn").addEventListener("click", getChuckJokes);

let gifContainer = document.createElement("img");
gifContainer.setAttribute("src", "./vid/Interwind-1s-200px.svg");

let ulContainer = document.createElement("ol");
ulContainer.className = "jokes";

function getChuckJokes(e) {
  let numberOfJokes = document.getElementById("jokes").value;

  e.preventDefault();

  const request = new XMLHttpRequest();

  request.open(
    "GET",
    `http://api.icndb.com/jokes/random/${numberOfJokes}`,
    true
  );

  request.onreadystatechange = getJokes;

  request.send();

  function getJokes() {
    console.log(
      `ready state: ${request.readyState} \t status: ${request.status}`
    );

    let jokeList = ``;

    // if (request.readyState === 2) {
      document.querySelector(".major").appendChild(gifContainer);

      console.log(request.readyState);
    // }

    if ((request.readyState === 4) & (request.status === 200)) {
      document.querySelector(".major").replaceChild(ulContainer, gifContainer);

      let container = document.querySelector(".jokes");

      let jokes = JSON.parse(request.responseText);

      if (jokes.type === "success") {
        jokes.value.forEach(function (joke) {
          jokeList += `<li>${joke.joke}</li>`;
        });
      } else {
        jokeList += "<li>Sorry, an error occured</li>";
      }

      container.innerHTML = jokeList;
    }
  }
}
