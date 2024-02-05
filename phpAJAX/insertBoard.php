<?php
include("../DBconnect.php");

$writer = $_POST['writer'];
$division = $_POST['division'];
$title = $_POST['title'];
$bodyText = $_POST['bodyText'];
if ($writer != "" and $division != "" and $title != "" and $bodyText != "") {
  $insertSql = "insert into Board(title,bodytext,writer ,division)  values('" . $title . "', '" . $bodyText . "', '" . $writer . "','" . $division . "')";
  pg_query($conn, $insertSql);
} else {
  echo "내용을 입력해주세요";
}
pg_Close($conn);

?>