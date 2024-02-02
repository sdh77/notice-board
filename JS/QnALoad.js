AllQnABtn = document.querySelector(".AllQnA");
AllQnABtn.addEventListener("click", function () {
  loadQnA("전체", "-1");
  document.querySelector(".click").classList.remove("click");
  AllQnABtn.classList.add("click");
});

workQnABtn = document.querySelector(".workQnA");
workQnABtn.addEventListener("click", function () {
  loadQnA("업무", "-1");
  document.querySelector(".click").classList.remove("click");
  workQnABtn.classList.add("click");
});
ectQnABtn = document.querySelector(".ectQnA");
ectQnABtn.addEventListener("click", function () {
  loadQnA("질문", "-1");
  document.querySelector(".click").classList.remove("click");
  ectQnABtn.classList.add("click");
});

function loadQnA(mode, questionPrimaryKey) {
  $.ajax({
    url: "phpAJAX/QnA_HTML.php",
    type: "post",
    data: {
      mode: mode,
      questionPrimaryKey: questionPrimaryKey,
    },
  }).done(function (data) {
    ListTag.innerHTML = data;
    addDataSend();

    QnAAddBtn = document.querySelector(".QnA_Add_Btn");
    QnATag = document.querySelector(".QnA_inputArea");
    QnAAddBtn.addEventListener("click", function () {
      if (QnATag.classList[2] == "hide") {
        QnATag.classList.remove("hide");
        QnAAddBtn.querySelector(".fa-plus").classList.add("close");
      } else {
        QnATag.classList.add("hide");
        QnAAddBtn.querySelector(".fa-plus").classList.remove("close");
      }
    });
    showBtnSet();
    loadAnswerBtn();
  });
}
function showBtnSet() {
  const showBtns = document.querySelectorAll(".showTxt");
  showBtns.forEach((showBtn) => {
    showBtn.addEventListener("click", function () {
      tagData =
        showBtn.parentElement.parentElement.parentElement.querySelector(
          ".TxtTag"
        );
      if (tagData.classList[2] == "hide") {
        tagData.classList.remove("hide");
        showBtn.innerHTML = '<i class="fa-solid fa-chevron-up"></i>';
      } else {
        tagData.classList.add("hide");
        showBtn.innerHTML = '<i class="fa-solid fa-chevron-down"></i>';
      }
    });
  });
}

function addDataSend() {
  addQnABtn = document.querySelector(".QnA_inputArea_addBtn");
  addQnABtn.addEventListener("click", function () {
    const writer = document.querySelector(".QnA_inputArea_writer");
    const questionData = document.querySelector(".QnA_inputArea_question");
    const divisionData = document.querySelector(".QnA_inputArea_division");
    $.ajax({
      url: "phpAJAX/insertQuestion.php",
      type: "post",
      data: {
        question: questionData.value,
        writer: writer.value,
        division: divisionData.options[divisionData.selectedIndex].value,
      },
    }).done(function (data) {
      alert(data);
    });
  });
}

function loadAnswerBtn() {
  answerRegistrations = document.querySelectorAll(".TxtTagAnswer_Button ");
  answerRegistrations.forEach(function (answerRegistration) {
    answerRegistration.addEventListener("click", function () {
      const questionPrimaryKey =
        answerRegistration.parentElement.parentElement.parentElement.querySelector(
          ".questionPrimaryKey"
        ).innerHTML;
      const answer = answerRegistration.parentElement.querySelector(
        ".TxtTagAnswer_Input"
      ).value;
      const writer = document.querySelector(".noticeTitle_Text").innerHTML;
      $.ajax({
        url: "phpAJAX/insertAnswer.php",
        type: "post",
        data: {
          questionPrimaryKey: questionPrimaryKey,
          answer: answer,
          writer: writer,
        },
      }).done(function (data) {
        alert(data);
        setTimeout(function () {
          const mode = document.querySelector(".click").innerHTML;
          console.log(mode);
          loadQnA(mode, questionPrimaryKey);
        }, 200);
      });
    });
  });
}
