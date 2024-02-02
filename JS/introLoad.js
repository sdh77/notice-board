const ListTag = document.querySelector(".noticeMain_bottomArea_notice");
const introBtn = document.querySelector(".introBtn");
const showInsertBlockBtn = document.querySelector(".introInsertBtn");
LoadIntro();

introBtn.addEventListener("click", function () {
  LoadIntro();
  document.querySelector(".click").classList.remove("click");
  introBtn.classList.add("click");
});
function LoadIntro() {
  $.ajax({
    url: "phpAJAX/introHTML.php",
    type: "post",
  }).done(function (data) {
    ListTag.innerHTML = data;
    LoadIntroSet();
  });
  showInsertBlockBtn.removeEventListener("click", LoadIntro);
  showInsertBlockBtn.addEventListener("click", showInsertBlock);
}
function LoadIntroSet() {
  const showBtns = document.querySelectorAll(".showTxt");
  console.log(showBtns);
  showBtns.forEach((showBtn) => {
    showBtn.addEventListener("click", function () {
      tagData = showBtn.parentElement.parentElement.querySelector(".TxtTag");
      if (tagData.classList[1] == "hide") {
        tagData.classList.remove("hide");
        showBtn.innerHTML = '<i class="fa-solid fa-chevron-up"></i>';
      } else {
        tagData.classList.add("hide");
        showBtn.innerHTML = '<i class="fa-solid fa-chevron-down"></i>';
      }
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
  showInsertBlockBtn.removeEventListener("click", showInsertBlock);
  showInsertBlockBtn.addEventListener("click", LoadIntro);
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
