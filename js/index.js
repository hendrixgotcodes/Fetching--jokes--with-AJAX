// Getting DOM elements

let btn = document.getElementById("btn");

// let name = document.getElementById("name");

// let age = document.getElementById("age").innerText;

// let profession = document.getElementById("profession").innerText;

//-----------------------------------------------------------------------
btn.addEventListener("click", getInfo);

function getInfo(e) {
  const request = new XMLHttpRequest();

  request.open("GET", "../json/index.json", true);

  request.send();

  request.onload = function () {
    console.log(this.readyState + " " + request.status);
    if (request.status === 200) {
      const worker = JSON.parse(request.responseText);

      // name = worker.name;
      // age = worker.age;
      // profession = worker.profession;
      document.getElementById("name").innerText = worker.name;
      document.getElementById("age").innerText = worker.age;
      document.getElementById("profession").innerText = worker.profession;
    } else {
      console.log(`state: ${request.readyState}
      status: ${request.status}`);
    }
  };
}
