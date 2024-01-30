<?php
include("../DBconnect.php");
$searchSql = "select * from intro";
$result = pg_query($conn, $searchSql);
$introductionList = [];
$introductionTxt = [];
$introductionPrimaryKey = [];
while ($introData = pg_fetch_array($result, NULL, PGSQL_ASSOC)) {
  array_push($introductionList, $introData['title']);
  array_push($introductionTxt, $introData['text']);
  array_push($introductionPrimaryKey, $introData['id']);

}
array_push($introductionList, '');
array_push($introductionTxt, '');


for ($i = 0; $i < count($introductionList); $i++) {
  echo '<div class="colum">
          <div class="noticeList row">
            <div class="eachTxt">
              <p>' . ($i + 1) . '.</p>
              <textarea class="updateHeadTag" tabindex="1">' . $introductionList[$i] . '</textarea>
            </div>';
  if ($i == count($introductionList) - 1) {
    echo '<button class="addTxt">
                  <i>추가</i>
                </button>';
  } else {
    echo '<div class="hide introPrimaryKey">' . $introductionPrimaryKey[$i] . '</div>
    <div>
      <button class="alterTxt">
        <i>수정</i>
      </button>
      <button class="deleteTxt">
        <i>X</i>
      </button>
    </div>';

  }
  echo '</div>';
  if ($i == count($introductionList) - 1) {
    echo '<textarea class="TxtTag updateTxtTag" tabindex="2">' . $introductionTxt[$i] . '</textarea>';
  } else {
    echo '<textarea class="TxtTag updateTxtTag">' . $introductionTxt[$i] . '</textarea>';
  }
  echo '</div>';
}
pg_Close($conn);

?>