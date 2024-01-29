<?php
include("../DBconnect.php");
$searchSql = "select * from intro";
$result = pg_query($conn, $searchSql);
$introductionList = [];
$introductionTxt = [];
while ($introData = pg_fetch_array($result, NULL, PGSQL_ASSOC)) {
  array_push($introductionList, $introData['title']);
  array_push($introductionTxt, $introData['text']);
}



for ($i = 0; $i < count($introductionList); $i++) {
  echo '<div class="colum">
          <div class="noticeList row">
            <div class="eachTxt">
              <p>' . ($i + 1) . '.</p>
              <p>' . $introductionList[$i] . '</p>
            </div>
            <button class="showTxt">
              <i class="fa-solid fa-chevron-down"></i>
            </button>
          </div>
          <div class="TxtTag">' . $introductionTxt[$i] . '</div>
        </div>';
}
pg_Close($conn);
?>