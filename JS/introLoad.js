LoadIntro();
const ListTag = document.querySelector(".noticeMain_bottomArea_notice");

const showInsertBlockBtn = document.querySelector(".introInsertBtn");
showInsertBlockBtn.addEventListener("click", showInsertBlock);

function LoadIntro() {
  $.ajax({
    url: "phpAJAX/introHTML.php",
    type: "post",
  }).done(function (data) {
    ListTag.innerHTML = data;
    LoadIntroSet();
  });
}
function LoadIntroSet() {
  const showBtns = document.querySelectorAll(".showTxt");
  console.log(showBtns);
  showBtns.forEach((showBtn) => {
    showBtn.addEventListener("click", function () {
      showTag = showBtn.parentElement.parentElement.querySelector(".TxtTag");
      showTag.innerHTML = "<div>dd</div>";
    });
  });
}

function showInsertBlock() {
  $.ajax({
    url: "phpAJAX/insertIntroHTML.php",
    type: "post",
  }).done(function (data) {
    ListTag.innerHTML = data;
    LoadInsertIntroSet();
  });
}

function LoadInsertIntroSet() {
  const alterBtns = document.querySelectorAll(".alterTxt");
  alterBtns.forEach((alterBtn) => {
    alterBtn.addEventListener("click", function () {
      $.ajax({
        url: "phpAJAX/updateIntro.php",
        type: "post",
        data: {
          title: alterBtn.parentElement.parentElement.querySelector(
            ".eachTxt .updateHeadTag"
          ).value,
          text: alterBtn.parentElement.parentElement.parentElement.querySelector(
            ".updateTxtTag"
          ).value,
          primaryKey:
            alterBtn.parentElement.parentElement.querySelector(
              ".introPrimaryKey"
            ).innerHTML,
          mode: "alter",
        },
      }).done(function (data) {
        setTimeout(showInsertBlock, 100);
        alert(data);
      });
    });
  });

  const addBtn = document.querySelector(".addTxt");
  addBtn.addEventListener("click", function () {
    $.ajax({
      url: "phpAJAX/updateIntro.php",
      type: "post",
      data: {
        title: addBtn.parentElement.querySelector(".eachTxt .updateHeadTag")
          .value,
        text: addBtn.parentElement.parentElement.querySelector(".updateTxtTag")
          .value,
        mode: "add",
      },
    }).done(function (data) {
      setTimeout(showInsertBlock, 100);
      alert(data);
    });
  });

  const deleteBtns = document.querySelectorAll(".deleteTxt");
  deleteBtns.forEach(function (deleteBtn) {
    deleteBtn.addEventListener("click", function () {
      $.ajax({
        url: "phpAJAX/updateIntro.php",
        type: "post",
        data: {
          mode: "delete",
          primaryKey:
            deleteBtn.parentElement.parentElement.querySelector(
              ".introPrimaryKey"
            ).innerHTML,
        },
      }).done(function (data) {
        setTimeout(showInsertBlock, 100);
        alert(data);
      });
    });
  });
}
