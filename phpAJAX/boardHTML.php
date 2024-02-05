<?php
include("../DBconnect.php");
$mode = $_POST['mode'];

echo '<button class="board_enrollBtn">글 작성</button>';

$searchSql = "select * from board where division = '" . $mode . "'";
$boardDatas = pg_query($conn, $searchSql);
$boardTitle = [];
$boardWriterList = [];
$boardPrimaryKey = [];
$boardBodyText = [];
while ($boardData = pg_fetch_array($boardDatas, NULL, PGSQL_ASSOC)) {
  array_push($boardTitle, $boardData['title']);
  array_push($boardBodyText, $boardData['bodytext']);
  array_push($boardWriterList, $boardData['writer']);
  array_push($boardPrimaryKey, $boardData['id']);
}

if (count($boardTitle) == 0) {
  echo "";
} else {
  for ($i = 0; $i <= count($boardTitle) - 1; $i++) {
    $cnt = 0;
    echo '<div class="colum">
  <div class="noticeList row">
    <div class="eachTxt">
        <p>' . ($i + 1) . '.</p>
        <p>' . $boardTitle[$i] . '</p>
        <p class="boardPrimaryKey hide">' . $boardPrimaryKey[$i] . '</p>
    </div>
    <div class="row">
      <p class="center">' . $boardWriterList[$i] . '</p>
      <button class="showTxt">
        <i class="fa-solid fa-chevron-down"></i>
    </button>
    </div>
  </div>
  <div class="TxtTag colum hide">
    <p> ' . $boardBodyText[$i] . '</p>
  </div>
</div>';
  }
}
?>