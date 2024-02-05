<?php
include("../DBconnect.php");

$writer = $_POST['writer'];
$question = $_POST['question'];
$division = $_POST['division'];
if ($writer != "" and $question != "") {
  $insertSql = "insert into question(question,writer, division) values('" . $question . "', '" . $writer . "', '" . $division . "')";
  pg_query($conn, $insertSql);
  echo ("질문 등록이 완료되었습니다.");
} else {
  echo ("정보를 모두 입력해주세요");
}
pg_Close($conn);

?>