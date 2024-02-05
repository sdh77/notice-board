<?php
include("../DBconnect.php");

$questionPrimaryKey = $_POST['questionPrimaryKey'];
$answer = $_POST['answer'];
$writer = $_POST['writer'];
if ($answer == "") {
  echo "댓글을 입력해주세요";
} else {
  $insertSql = "insert into answer(questionid, answer, writer)  values(" . $questionPrimaryKey . ", '" . $answer . "', '" . $writer . "')";
  pg_query($conn, $insertSql);
  echo "댓글을 등록했습니다.";
}
pg_Close($conn);

?>