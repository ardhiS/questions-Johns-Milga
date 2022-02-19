//using selectors inside the element

const qustns = document.querySelectorAll(".question");
qustns.forEach(function (q) {
  const btn = q.querySelector(".question-btn");
  btn.addEventListener("click", function () {
    qustns.forEach(function (i) {
      if (i !== q) {
        i.classList.remove("show-text");
      }
    });
    q.classList.toggle("show-text");
  });
});

// traversing the dom
// const btns = document.querySelectorAll(".question-btn");

// btns.forEach(function (btn) {
//   btn.addEventListener("click", function (e) {
//     if (btn.classList.contains("show-text") !== e.classList.contains("show-text")) {
//       btn.classList.remove("show-text");
//     }
//     const item = e.currentTarget.parentElement.parentElement;
//     item.classList.toggle("show-text");
//   });
// });
