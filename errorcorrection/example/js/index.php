<?php
	$iErrorCount = 0;
	$bSubmitted = false;
	$bRegion = 0;
	$strError = "<ul>\n";

	if ($_POST)
	{
		$strSuggestion = $_POST["suggestion"];
		$strOptional = $_POST["optemail"];
		$strRating = $_POST["rating"];
		$strJibberish = $_POST["jibberish"];
		$strForename = $_POST["forename"];
		$strAge = $_POST["age"];
		$strEmail = $_POST["email"];

		if (strlen($_POST["signup"]) > 0)
		{
			$bSubmitted = true;

			if (strlen($strForename) < 2 || is_numeric($strForename))
			{
				$iErrorCount++;
				$strError .= "<li><a href=\"#forename\">请输入你的姓</a></li>\n";
			}

			if (!is_numeric($strAge))
			{
				$iErrorCount++;
				$strError .= "<li><a href=\"#age\">请输出你的年龄</a></li>\n";
			}

			if (!preg_match("/^[\w-\.\']{1,}\@([\da-zA-Z-]{1,}\.){1,}[\da-zA-Z-]{2,}$/", $strEmail))
			{
				$iErrorCount++;
				$strError .= "<li><a href=\"#email\">请输入你的邮件地址</a></li>\n";
			}
		}
		else if (strlen($_POST["submit"]) > 0)
		{
			$bRegion = 1;
			$bSubmitted = true;

			if (strlen($strSuggestion) < 2 || is_numeric($strSuggestion))
			{
				$iErrorCount++;
				$strError .= "<li><a href=\"#suggestion\">输入一个建议</a></li>\n";
			}

			if (strlen($strOptional) > 0 && !preg_match("/^[\w-\.\']{1,}\@([\da-zA-Z-]{1,}\.){1,}[\da-zA-Z-]{2,}$/", $strOptional))
			{
				$iErrorCount++;
				$strError .= "<li><a href=\"#optemail\">请输入你的邮件地址(可选)</a></li>\n";
			}

			if (!is_numeric($strRating))
			{
				$iErrorCount++;
				$strError .= "<li><a href=\"#rating\">请对你的建议评分</a></li>\n";
			}
		}

		$strError .= "</ul>\n";

		if ($iErrorCount > 0)
			$strError = "<h2>提交时发现$iErrorCount 错误</h2>\n" . $strError;
	}
?>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">
<html>
<head>
	<title>Form Validation</title>
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
	<link href="js/validate.css" rel="stylesheet" type="text/css">
	<script type="text/javascript" src="js/validate.js"></script>
</head>
<body>

<h1>Form Validation</h1>
<p>
The following form is validated before being submitted if scripting is available, otherwise the form is validated on the server. All fields are required, except those marked optional. If errors are found in the submission, the form is cancelled and a list of errors is displayed at the top of the form. 
</p>

<?php if ($bSubmitted == true && $iErrorCount == 0) { ?>
<h1 id="focuspoint">Successful Submission</h1>
<p>
When it comes to filling out web forms, you rock!
</p>
<?php
	}
	else if ($iErrorCount > 0 && $bRegion == 0)
		echo $strError;

	if ($bSubmitted == false || ($bSubmitted == true && $iErrorCount != 0)) {
?>


<p>
Please enter your details below.
</p>

<h2>Validating Form</h2>
<form id="personalform" method="post" action="index.php">
<div class="validationerrors"></div>
<fieldset>
<legend>Personal Details</legend>
<p>
<label for="forename">Please enter your forename</label>
<input type="text" size="20" name="forename" id="forename" class="string" value="<?php echo $strForename; ?>">
</p>
<p>
<label for="age">Please enter your age</label> 
<input type="text" size="20" name="age" id="age" class="number" value="<?php echo $strAge; ?>">
</p>
<p>
<label for="email">Please enter your email address</label> 
<input type="text" size="20" name="email" id="email" class="email" value="<?php echo $strEmail; ?>">
</p>
</fieldset>
<p>
<input type="submit" name="signup" value="Sign up">
</p>
</form>
<?php
	}
	if ($iErrorCount > 0 && $bRegion == 1)
		echo $strError;

	if ($bSubmitted == false || ($bSubmitted == true && $iErrorCount != 0)) {

?>
<h2>Second Form</h2>
<form id="secondform" method="post" action="index.php#focuspoint">
<div class="validationerrors"></div>
<fieldset>
<legend>Second Form Details</legend>
<p>
<label for="suggestion">Enter a suggestion</label>
<input type="text" size="20" name="suggestion" id="suggestion" class="string" value="<?php echo $strSuggestion; ?>">
</p>
<p>
<label for="optemail">Please enter your email address (optional)</label>
<input type="text" size="20" name="optemail" id="optemail" class="optional email" value="<?php echo $strOptional; ?>">
</p>
<p>
<label for="rating">Please rate this suggestion</label> 
<input type="text" size="20" name="rating" id="rating" class="number" value="<?php echo $strRating; ?>">
</p>
<p>
<label for="jibberish">Enter some jibberish (optional)</label>
<input type="text" size="20" name="jibberish" id="jibberish" value="<?php echo $strJibberish; ?>">
</p>
</fieldset>
<p>
<input type="submit" name="submit" value="Add Suggestion">
</p>
</form>
<?php } ?>
</body>
</html>
