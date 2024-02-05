const hobbyBtn = document.querySelector(".hobbyBoard");
const studyBtn = document.querySelector(".studyBoard");

hobbyBtn.addEventListener("click", function () {
  loadBoard(hobbyBtn.innerHTML);
});
studyBtn.addEventListener("click", function () {
  loadBoard(studyBtn.innerHTML);
});

function loadBoard(mode) {
  $.ajax({
    url: "phpAJAX/boardHTML.php",
    type: "post",
    data: {
      mode: mode,
    },
  }).done(function (data) {
    ListTag.innerHTML = data;
    addBoardBtn = document.querySelector(".board_enrollBtn");
    addBoardBtn.addEventListener("click", function () {
      location.href = "addBoard.html";
    });
    showBtns = document.querySelectorAll(".showTxt");
    console.log(showBtns);
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
  });
}

setTimeout(() => {
  loadBoard("취미");
}, 200);
