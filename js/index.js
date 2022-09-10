window.onload = function () {
  const question = document.querySelectorAll(".main-content-detail-question");
  const answer = document.querySelectorAll(".main-content-detail-answer");
  const arrow = document.querySelectorAll(".main-content-detail-question img");
  for (let i = 0; i < question.length; i++) {
    question[i].addEventListener("click", function () {
      question[i].classList.toggle("question-bold");
      answer[i].classList.toggle("display-block");
      arrow[i].classList.toggle("rotate");
    });
  }
};
