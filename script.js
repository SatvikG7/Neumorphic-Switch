//! Random Color Generator
const setc = () => {
  const randomColor = Math.floor(Math.random() * 16777215).toString(16);
  document.getElementById("attrc").style.color = "#" + randomColor;
};
var i = 0;
function io() {
  if (i == 0) {
    document.getElementById("circle").style.transform = "translateX(250px)";
    document.getElementById("circle").style.color = "red";
    i = 1;
  }
  else if (i==1){
	document.getElementById("circle").style.transform = "translateX(0px)";
    document.getElementById("circle").style.color = "limegreen";
    i = 0;
  }
}
