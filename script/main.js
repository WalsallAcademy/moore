let u = window.location.href;
let a = u.split("pg").pop([0]);
u = a.split(".");
//a = u.pop([1]);
/* console.log(u[0]); */

const start = () => {
  window.location.href = "./pages/pg1.html";
};

const next = () => {
  window.location.href = `./pg${parseInt(u[0]) + 1}.html`;
};

const back = () => {
  window.location.href = `./pg${parseInt(u[0]) - 1}.html`;
};

const backStart = () => {
  window.location.href = `../index.html`;
};

const reveal = (imgID) => {
  // console.log(imgID);

  switch (imgID) {
    case (imgID = "img1"):
      document.getElementById("img1").src = "../img/Screenshot_2.png";
      break;
    case (imgID = "img2"):
      document.getElementById("img2").src = "../img/Screenshot_3.png";
      break;
    case (imgID = "img3"):
      document.getElementById("img3").src = "../img/Screenshot_4.png";
      break;
    case (imgID = "img4"):
      document.getElementById("img4").src = "../img/Screenshot_5.png";
      break;
    case (imgID = "img5"):
      document.getElementById("img5").src = "../img/Screenshot_6.png";
      break;
    case (imgID = "img6"):
      document.getElementById("img6").src = "../img/Screenshot_7.png";
      break;
    default:
      console.log("error");
  }
};
