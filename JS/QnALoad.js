AllQnABtn = document.querySelector(".AllQnA");
AllQnABtn.addEventListener("click", function () {
  loadAllQnA();
  document.querySelector(".click").classList.remove("click");
  AllQnABtn.classList.add("click");
});

function loadAllQnA() {
  $.ajax({
    url: "phpAJAX/QnA_HTML.php",
    type: "post",
  }).done(function (data) {
    ListTag.innerHTML = data;
  });
}
