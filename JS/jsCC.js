const buttons = Array.from(document.querySelectorAll(".button button"));
const body = document.querySelector("body");
const message = document.querySelector(".message");
buttons.forEach((button) => {
  console.log(button);
  button.addEventListener("click", (e) => {
    console.log(e);
    console.log(e.target);
    if (e.target.id === "grey") {
      body.style.backgroundColor = "grey";
      body.style.transition = "all 0.5s ease-in-out";
      message.innerHTML = `You have selected ${e.target.id} color`;
    }
    if (e.target.id === "yellow") {
      body.style.backgroundColor = "rgb(221, 221, 73)";
      message.innerHTML = `You have selected ${e.target.id} color`;
    }
    if (e.target.id === "red") {
      body.style.backgroundColor = "rgb(215, 50, 50)";
      message.innerHTML = `You have selected ${e.target.id} color`;
    }
    if (e.target.id === "blue") {
      body.style.backgroundColor = "rgb(60, 60, 219)";
      message.innerHTML = `You have selected ${e.target.id} color`;
    }
  });
});
const icon = document.querySelector(".svg-icon");
icon.addEventListener("click", () => {
  body.style.backgroundColor = "#121212";
  message.innerHTML = "";
});
