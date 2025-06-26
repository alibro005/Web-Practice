const button = document.querySelectorAll(".box");
const body = document.querySelector("body");

button.forEach(function (button) {
  console.log(button);
  button.addEventListener("click", function (e) {
    // console.log(e);
    console.log(e.target);
    // let func = e.target;
    // switch (func.id === "blue") {
    //   case func.id==='blue':
    //     body.style.backgroundColor = e.target.id;
    //     break;
    //   case 2:
    //     body.style.backgroundColor = e.target.id;
    //     break;
    //   case 3:
    //     body.style.backgroundColor = e.target.id;
    //     break;
    //   case 4:
    //     body.style.backgroundColor = e.target.id;
    //     break;
    //   case 5:
    //     body.style.backgroundColor = e.target.id;
    //     break;
    // }

    if (e.target.id === "blue") {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === "green") {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === "red") {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === "yellow") {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === "skyblue") {
      body.style.backgroundColor = e.target.id;
    }
  });
});
