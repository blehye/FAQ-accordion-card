window.onload = function () {
  const question = document.querySelectorAll(".main-content-detail-question");
  const answer = document.querySelectorAll(".main-content-detail-answer");
  for (let i = 0; i < question.length; i++) {
    question[i].addEventListener("click", function () {
      console.log(i + "클릭됨");

      question[i].classList.toggle("question-bold");
      answer[i].classList.toggle("display-block");
    });
  }
};
