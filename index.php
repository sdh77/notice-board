<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <title>notice</title>
  <link rel="stylesheet" href="CSS/styles.css">
  <script src="https://kit.fontawesome.com/3fea15db99.js" crossorigin="anonymous"></script>
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js"></script>

</head>

<body>
  <div class="noticeTitle">
    <button class="introInsertBtn">
      <p class="noticeTitle_Text">shin7773</p>
    </button>
  </div>
  <div class="noticeMain">
    <div class="noticeMain_Area">
      <div class="row noticeMain_topArea">
        <p class="noticeMain_topArea_title">FAQ</p>
        <div class="noticeMain_topArea_searchArea">
          <input placeholder="궁금하신 내용을 입력해주세요."></input>
          <button>
            검색
          </button>
        </div>
      </div>
      <div class=" noticeMain_bottomArea row">
        <div class="noticeMain_bottomArea_list colum">
          <div class="list_group colum">
            <button class="bottomArea_textBig click introBtn">
              인사말
            </button>
          </div>
          <div class="list_group colum">
            <p class="bottomArea_textBig">Q&A</p>
            <button class="bottomArea_textMiddle AllQnA">전체</button>
            <button class="bottomArea_textMiddle workQnA">업무</button>
            <button class="bottomArea_textMiddle  ectQnA">질문</button>
          </div>
          <div class="list_group colum">
            <p class="bottomArea_textBig">예약 문의</p>
            <button class="bottomArea_textMiddle">1</button>
            <button class="bottomArea_textMiddle">2</button>
            <button class="bottomArea_textMiddle">3</button>
          </div>
        </div>
        <div class="noticeMain_bottomArea_notice">
        </div>
      </div>
    </div>
  </div>

  <script src="JS/introLoad.js"></script>
  <script src="JS/QnALoad.js"></script>


</body>

</html>