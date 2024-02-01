<?php
include("../DBconnect.php");
$mode = $_POST["mode"];
$requestPrimaryKey = $_POST["questionPrimaryKey"];
if ($mode == "전체")
  $searchSql = "select * from question";
else
  $searchSql = "select * from question where division = '" . $mode . "'";

$questionDatas = pg_query($conn, $searchSql);
$questionList = [];
$questionWriterList = [];
$questionPrimaryKey = [];
while ($questionData = pg_fetch_array($questionDatas, NULL, PGSQL_ASSOC)) {
  array_push($questionList, $questionData['question']);
  array_push($questionWriterList, $questionData['writer']);
  array_push($questionPrimaryKey, $questionData['id']);
}

if (count($questionList) == 0) {
  echo "";
} else {
  for ($i = 0; $i <= count($questionList) - 1; $i++) {
    echo '<div class="colum">
  <div class="noticeList row">
    <div class="eachTxt">
        <p>' . ($i + 1) . '.</p>
        <p>' . $questionList[$i] . '</p>
        <p class="questionPrimaryKey hide">' . $questionPrimaryKey[$i] . '</p>
    </div>
    <div class="row">
      <p class="center">' . $questionWriterList[$i] . '</p>
      <button class="showTxt">';

    if ((int) $requestPrimaryKey == $questionPrimaryKey[$i]) {
      echo '<i class="fa-solid fa-chevron-up"></i>';
    } else {
      echo '<i class="fa-solid fa-chevron-down"></i>';
    }
    echo '</button>
    </div>
  </div>';
    if ((int) $requestPrimaryKey == $questionPrimaryKey[$i]) {
      echo '<div class="TxtTag colum">';
    } else {
      echo '<div class="TxtTag colum hide">';
    }
    echo '<div class="colum">';
    $searchAnswerSql = "select * from answer where questionid = " . $questionPrimaryKey[$i];
    $answerDatas = pg_query($conn, $searchAnswerSql);
    while ($answerData = pg_fetch_array($answerDatas, NULL, PGSQL_ASSOC)) {
      echo '<div class="row">
      <p>' . $answerData['writer'] . ' :</p>
        <p> ' . $answerData['answer'] . '</p>
        </div>';
    }
    echo '</div>
  <div class="TxtTagAnswer">
    <input class="TxtTagAnswer_Input" placeholder="댓글을 남겨주세요"></input>
    <button class="TxtTagAnswer_Button" >등록</button>
  </div>
  </div>
</div>';
  }
}
echo '<div class="QnA_Tag">
  <div class="QnA_inputArea center hide">
    <input class="QnA_inputArea_writer"placeholder = "이름을 입력해주세요"></input>
    <textarea class="QnA_inputArea_question" placeholder = "질의 내용 입력"></textarea>
    <div class="QnA_inputArea_btns row">
      <select class="QnA_inputArea_division">
        <option>업무</option>
        <option>질문</option>
      </select>
      <button class="QnA_inputArea_addBtn">등록</button>
    </div>
  </div>
  <button class="QnA_Add_Btn center"><i class="fa-solid fa-plus"></i></button>
</div>';

?>