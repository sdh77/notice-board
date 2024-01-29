<?php
include("../DBconnect.php");
$mode = $_POST['mode'];
if ($mode == "add") {
  $title = $_POST['title'];
  $text = $_POST['text'];
  if ($title == "" or $text == "") {
    echo "내용을 입력해주세요";
  } else {
    $insertSql = "insert into intro (title, text) values('" . $title . "','" . $text . "')";
    $sendSql = pg_query($conn, $insertSql);
    echo "데이터를 저장했습니다.";

  }
} elseif ($mode == "delete") {
  $primaryKey = $_POST['primaryKey'];
  $deleteSql = "delete  from intro where id = " . $primaryKey;
  $sendSql = pg_query($conn, $deleteSql);
  echo "삭제 완료했습니다.";
} elseif ($mode == "alter") {
  $primaryKey = $_POST['primaryKey'];
  $title = $_POST['title'];
  $text = $_POST['text'];
  if ($title == "" or $text == "") {
    echo "내용이 비어있습니다.";
  } else {
    $updateSql = "update intro set title ='" . $title . "' ,text ='" . $text . "'   where id = " . $primaryKey;
    $sendSql = pg_query($conn, $updateSql);
    echo "내용을 수정했습니다.";
  }

}
pg_Close($conn);

?>