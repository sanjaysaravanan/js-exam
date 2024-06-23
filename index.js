/* let a = 2;

while (a < 100) {
  console.log("a", a);

  a = a * 2;

  a++;
}

// debugger;
function sampleFunc() {
  console.log("sdfasdkhkh");
}
const btn = document.createElement("button");
btn.addEventListener("click", () => {}, false);

btn.onmouseleave;

history.pushState({}, "p 1", "https://google.com");

history.replaceState({}, "p 2", "https://google.com");

const table = document.createElement("table");
const tBody = table.createTBody();

document.body.insertA(btn, btn.ne);*/

const child = document.querySelector(".child");

const parent = document.querySelector(".parent");

// child.addEventListener(
//   "click",
//   () => {
//     console.log("child click");
//   },
//   { capture: true }
// );

parent.addEventListener(
  "click",
  (e) => {
    console.log("parent click", e.target);
  },
  { capture: true }
);

const url = new URL();

const event = new Event("");
