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
  });
}

setTimeout(() => {
  loadBoard("취미");
}, 200);
