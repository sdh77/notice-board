<?php
include("DBconnect.php");
$searchSql = "select * from notice_main";
$result = pg_query($conn, $searchSql);
while ($row = pg_fetch_array($result, NULL, PGSQL_ASSOC)) {
}

?>

<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <title>notice</title>
  <link rel="stylesheet" href="CSS/styles.css">

</head>

<body>
  <div class="noticeTitle">
    <p class="noticeTitle_Text">shin7773</p>
  </div>
  <div class="noticeMain">
    <div class="noticeMain_Area">
      <div class="row noticeMain_topArea">
        <p class="noticeMain_topArea_title">FAQ</p>
        <div>
          검색
        </div>
      </div>
    </div>
  </div>
</body>

</html>