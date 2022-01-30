let btn1 = document.querySelector(".add-btn");
let btn2 = document.querySelector(".added-btn");
let container = document.querySelector(".container");
let question = document.querySelector(".question");
let answer = document.querySelector(".answer");
let questions = document.querySelector(".questions");
let answers = document.querySelector(".answers");
let card = document.querySelector(".card");
let prev = document.querySelector("#prev");
let next = document.querySelector("#next");
let app = document.querySelector("#app");
let q_arr = [];
let a_arr = [];
let c = 0;
btn1.addEventListener("click", showCard);
function showCard() {
  container.style.display = "flex";
  app.style.display = "none";
}
if (question.value !== " " && answer.value !== " ") {
  btn2.addEventListener("click", addCard);
}

function addCard() {
  //here innerText and innerHTML produce the same result
  q_arr.push(question.value);
  a_arr.push(answer.value);
  questions.innerText = q_arr[0];

  answers.innerHTML = a_arr[0];

  question.value = "";
  answer.value = "";
  container.style.display = "none";
  app.style.display = "flex";
  card.style.visibility = "visible";
  c = 0;
}

next.addEventListener("click", () => {
  c += 1;
  console.log(c, "c");
  if (c > q_arr.length - 1) {
    c = q_arr.length - 1;
  }
  questions.innerText = q_arr[c];
  answers.innerHTML = a_arr[c];
});

prev.addEventListener("click", () => {
  c -= 1;
  if (c < 0) {
    c = 0;
  }
  questions.innerText = q_arr[c];
  answers.innerHTML = a_arr[c];
});
