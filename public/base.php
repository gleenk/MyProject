<!doctype html>
<html>
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
    <meta name="description" content="">
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>

    <title>TITOLO</title>
    <?php include('inc/head.inc.php'); ?>
</head>

<body>

<header id="masthead"></header>
<main id="content" role="main"></main>
<footer id="colphon"></footer>

<?php include('inc/scripts.inc.php');?>

<script type="text/javascript">
$(function(){
    pullMenu();
    jQuery('input, textarea').placeholder();
});
</script>

</body>

</html>