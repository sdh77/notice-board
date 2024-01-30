AllQnABtn = document.querySelector(".AllQnA");
AllQnABtn.addEventListener("click", function () {
  loadAllQnA("all");
  document.querySelector(".click").classList.remove("click");
  AllQnABtn.classList.add("click");
});

workQnABtn = document.querySelector(".workQnA");
workQnABtn.addEventListener("click", function () {
  loadAllQnA("업무");
  document.querySelector(".click").classList.remove("click");
  workQnABtn.classList.add("click");
});
ectQnABtn = document.querySelector(".ectQnA");
ectQnABtn.addEventListener("click", function () {
  loadAllQnA("질문");
  document.querySelector(".click").classList.remove("click");
  ectQnABtn.classList.add("click");
});

function loadAllQnA(mode) {
  $.ajax({
    url: "phpAJAX/QnA_HTML.php",
    type: "post",
    data: {
      mode: mode,
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
  });
}

function addDataSend() {
  addQnABtn = document.querySelector(".QnA_inputArea_addBtn");
  addQnABtn.addEventListener("click", function () {
    const writer = document.querySelector(".QnA_inputArea_writer");
    const questionData = document.querySelector(".QnA_inputArea_question");
    const divisionData = document.querySelector(".QnA_inputArea_division");
    $.ajax({
      url: "phpAJAX/insertQnA.php",
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
setTimeout(function () {
  AllQnABtn.click();
}, 300);
