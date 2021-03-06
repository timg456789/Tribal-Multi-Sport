$(function() {
	
	$("head").prepend(
		'<meta charset="utf-8">' +
		'<meta http-equiv="X-UA-Compatible" content="IE=edge">' +
		'<meta name="viewport" content="width=device-width, initial-scale=1">' +
		'<title>TRIBAL Multi-Sport</title>' +
		'<link href="http://fonts.googleapis.com/css?family=Exo:200,300,400,500,600,700" rel="stylesheet" type="text/css">' +
		'<link rel="stylesheet" type="text/css" href="../css/tribal.css">' +
		'<link rel="stylesheet" type="text/css" href="../libraries/bootstrap/css/bootstrap.min.css">' +
		'<link rel="shortcut icon" href="../favicon.ico" type="image/x-icon">' +
		'<link rel="icon" href="../favicon.ico" type="image/x-icon">');
	
	$("body").prepend(
	'<div id="topContainer" class="container">' +
		'<nav class="mini-nav navbar navbar-default navbar-fixed-top">' +
		  '<div class="container-fluid">' +
			'<div class="navbar-header">' +
			  '<button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#mini-nav-menu">' +
				'<span class="icon-bar"></span>' +
				'<span class="icon-bar"></span>' +
				'<span class="icon-bar"></span>' +
			  '</button>' +
			  '<a href="index.html">' +
				'<img src="../images/logo.jpg"' +
					'alt="Tribal Multi-Sport Logo"' +
					'class="img-responsive center-block" />' +
				'</a>' +
			'</div>' +

			'<div class="collapse navbar-collapse" id="mini-nav-menu">' +
			  '<ul class="nav navbar-nav text-uppercase">' +
				'<li><a href="services.html">Services</a></li>' +
				'<li><a href="athletes.html">Athletes</a></li>' +
				'<li><a href="coaches.html">Coaches</a></li>' +
				'<li><a href="sponsors.html">Sponsors</a></li>' +
				'<li><a href="training-camps.html">Training Camps</a></li>' +
				'<li><a href="contact.html">Contact</a></li>' +
				'<li><a href="blog.html">Blog</a></li>' +
			  '</ul>' +
			'</div>' +
		  '</div>' +
		'</nav>' +
		'<a href="index.html">' +
			'<img src="../images/logo.jpg"' +
				'alt="Tribal Multi-Sport Logo"' +
				'class="header-logo  img-responsive center-block" />' +
		'</a>' +

		'<nav id="navContainer" class="navbar navbar-default">' +
		  '<div class="container-fluid">' +
			'<div class="navbar-header">' +
			  '<button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navMenu">' +
				'<span class="icon-bar"></span>' +
				'<span class="icon-bar"></span>' +
				'<span class="icon-bar"></span>' +
			  '</button>' +
			'</div>' +

			'<div class="collapse navbar-collapse" id="navMenu">' +
			  '<ul id="mainNav" class="nav navbar-nav text-uppercase">' +
				'<li><a href="services.html">Services</a></li>' +
				'<li><a href="athletes.html">Athletes</a></li>' +
				'<li><a href="coaches.html">Coaches</a></li>' +
				'<li><a href="sponsors.html">Sponsors</a></li>' +
				'<li><a href="training-camps.html">Training Camps</a></li>' +
				'<li><a href="contact.html">Contact</a></li>' +
				'<li><a href="blog.html">Blog</a></li>' +
			  '</ul>' +
			'</div>' +
		  '</div>' +
		'</nav>' +
		'<div>' +
			'<img src="data:image/png;base64,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"' +
				'class="socialIcon" />' +
				
			'<img src="data:image/png;base64,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"' +
				'class="socialIcon" />' +
				
			'<img src="data:image/png;base64,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"' +
				'class="socialIcon" />' +
				
			'<form class="navSearch" role="search">' +
				'<input type="text" class="form-control" placeholder="Search">' +
			'</form>' +
		'</div>' +
	'</div>');
	
	var currentYear = (new Date).getFullYear();
				
	$("body").append(
		'<div class="lightBlue section contactUs">' +
			'<div class="learnMore">Want to Learn More?</div>' +
			'<form action="contact.html">' +
				'<input type="submit" class="ancientGreen btn" value="Contact Us" />' +
			'</form>' +
		'</div>' +
		
		'<div class="darkBlue section footer">' +
			'<a href="#">' +
				'<img class="backToTop" src="../images/thin-chevron.png" alt="Back to Top Arrow" />' +
			'</a>' +
			'<div class="copyright">&#64;' + currentYear + ' TRIBAL Multi-Sport. All rights reserved.</div>' +
		'</div>' + 
		'<div id="logoOverlay"></div>');
	
	// Setup blog for styling.
	var blogPostSubtitles = $("p.post-meta");
	var blogPostTitles = $("h1.post-title");
	var blogPostDates = $("time.post-date");
		
	for(var ct = 0; ct < blogPostSubtitles.length; ct++) {
		var blogPostSubtitle = blogPostSubtitles[ct];
		var blogPostTitle = blogPostTitles[ct];
		var blogPostDate = blogPostDates[ct];
		
		$(blogPostTitle).insertAfter(blogPostSubtitle);
		$(blogPostDate).insertAfter(blogPostTitle);
	}
	
	$("#content").append(
		$("<div id='blogContentContainer' class='container'></div>"));
	
	$("#blogContentContainer").append(
		$("#loops-wrapper"));
		
	$(".single-post #blogContentContainer").append(
		$(".single-post .post"));
	
	$(".single-post #blogContentContainer").append(
		$(".single-post #comments"));
	
	$("#blogContentContainer").append(
		$("#sidebar"));
		
	$("#blogContentContainer").append(
		$(".pagenav"));
	
	$(".single-post #pagewrap #content").addClass("container");
	
	$(".single-post .comment-form #submit").addClass("btn");
	
	
		
		var $window = $(window);
	var $stickyEl = $('#navContainer');
	
	if ($stickyEl.length > 0) {
		var elTop = $stickyEl.offset().top;

	   $window.scroll(function() {
		   
		   if ($window.scrollTop() > elTop) {
			   $('.mini-nav').fadeIn();
		   }else {
			   $('.mini-nav').fadeOut();
		   }
		});
	

	}
	
});