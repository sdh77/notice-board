<?php
include("../DBconnect.php");
$mode = $_POST["mode"];
if ($mode == "all")
  $searchSql = "select * from question";
else
  $searchSql = "select * from question where division = '" . $mode . "'";

$result = pg_query($conn, $searchSql);
$QnAList = [];
$QnAWriterList = [];
$QnAPrimaryKey = [];
while ($QnAData = pg_fetch_array($result, NULL, PGSQL_ASSOC)) {
  array_push($QnAList, $QnAData['question']);
  array_push($QnAWriterList, $QnAData['writer']);
  array_push($QnAPrimaryKey, $QnAData['id']);
}
if (count($QnAList) == 0) {
  echo "";
} else {
  for ($i = 0; $i <= count($QnAData); $i++) {
    echo '<div class="colum">
  <div class="noticeList row">
    <div class="eachTxt">
        <p>' . ($i + 1) . '.</p>
        <p>' . $QnAList[$i] . '</p>
        <p class="hide">' . $QnAPrimaryKey[$i] . '</p>
    </div>
    <div class="row">
      <p class="center">' . $QnAWriterList[$i] . '</p>
      <button class="showTxt">
        <i class="fa-solid fa-chevron-down"></i>
      </button>
    </div>
  </div>
  <div class="TxtTag hide"></div>
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