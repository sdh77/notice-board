<?php
$mode = $_POST['mode'];
echo $mode;

echo '<button class="board_enrollBtn">글 작성</button>';

$searchSql = "select * from board where mode = '" . $mode . "'";
echo $searchSql;
?>