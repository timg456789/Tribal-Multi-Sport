var athletes = [
	{
		imgSrc: "/images/manRunning.png",
		name: "Sebring Sierra",
		details: "lmnop"
	},
	{
		imgSrc: "/images/womanStandingWithBike.png",
		name: "Lindsay Macconnel",
		details: "qrstuv"
	},
	{
		imgSrc: "/images/runningAcrossFinishLine.png",
		name: "Brett Hendricks",
		details: "lmnop"
	},
	{
		imgSrc: "/images/johnAtkins.png",
		name: "John Atkins",
		details: "qrstuv"
	},
	{
		imgSrc: "/images/bryanPallas.png",
		name: "5",
		details: "lmnop"
	},
	{
		imgSrc: "/images/roseLaurence.png",
		name: "Rose Laurence",
		details: "qrstuv"
	},
	{
		imgSrc: "http://nebula.wsimg.com/8e96bf66f31fd3d404a710ad1bdfc374?AccessKeyId=A460DC0C831767955872&disposition=0&alloworigin=1",
		name: "7",
		details: "lmnop"
	},
	{
		imgSrc: "http://nebula.wsimg.com/8e96bf66f31fd3d404a710ad1bdfc374?AccessKeyId=A460DC0C831767955872&disposition=0&alloworigin=1",
		name: "athlete 8",
		details: "qrstuv"
	},
	{
		imgSrc: "http://nebula.wsimg.com/8e96bf66f31fd3d404a710ad1bdfc374?AccessKeyId=A460DC0C831767955872&disposition=0&alloworigin=1",
		name: "9",
		details: "lmnop"
	},
	{
		imgSrc: "http://nebula.wsimg.com/8e96bf66f31fd3d404a710ad1bdfc374?AccessKeyId=A460DC0C831767955872&disposition=0&alloworigin=1",
		name: "10",
		details: "lmnop"
	},
	{
		imgSrc: "http://nebula.wsimg.com/8e96bf66f31fd3d404a710ad1bdfc374?AccessKeyId=A460DC0C831767955872&disposition=0&alloworigin=1",
		name: "11",
		details: "lmnop"
	},
	{
		imgSrc: "http://nebula.wsimg.com/8e96bf66f31fd3d404a710ad1bdfc374?AccessKeyId=A460DC0C831767955872&disposition=0&alloworigin=1",
		name: "12",
		details: "lmnop"
	}
];

var athleteIndex = 0;

function updateAthleteSlider() {
	$("#athleteSlider").html(
	
		'<div class="row">' +
		
			'<div class="col-md-1"></div>'+
			'<div class="col-md-10">' +
				getAthleteSectionWidgetHtml() +
			'</div>' +
			'<div class="col-md-1"></div>'+

		'</div>');	
}

function decrementAthleteIndex() {
	var possibleIndex = athleteIndex - 6;
	
	if (possibleIndex >= 0) {
		athleteIndex = possibleIndex;
	} else {
		athleteIndex = athletes.length - 6;
	}
}

function incrementAthleteIndex() {
	var possibleIndex = athleteIndex + 6;
	
	if (possibleIndex < athletes.length) {
		athleteIndex = possibleIndex;
	} else {
		athleteIndex = 0;
	}
}

function validateAthleteData() {

	for(var ct = 0; ct < athletes.length; ct++) {
		if (typeof athletes[ct].imgSrc === 'undefined') {
			alert('An athlete is missing an image.');
		}
		
		if (typeof athletes[ct].name === 'undefined') {
			alert('An athlete is a name.');
		}
		
		if (typeof athletes[ct].details === 'undefined') {
			alert('An athlete is missing a description.');
		}
	}
	
	if (athletes.length % 6 != 0) {
		alert('Athletes must be in sets of sixes. Number of athletes: ' + athletes.length);
	}
	
}

function getAthleteSectionWidgetHtml() {
	var widgetHtml;
	
	widgetHtml = '<div class="row">';
	widgetHtml += getAthleteWidgetHtml(athletes[athleteIndex]);
	widgetHtml += getAthleteWidgetHtml(athletes[athleteIndex + 1]);
	widgetHtml += getAthleteWidgetHtml(athletes[athleteIndex + 2]);
	widgetHtml += '</div>';
	
	widgetHtml += '<div class="row">';
	widgetHtml += getAthleteWidgetHtml(athletes[athleteIndex + 3]);
	widgetHtml += getAthleteWidgetHtml(athletes[athleteIndex + 4]);
	widgetHtml += getAthleteWidgetHtml(athletes[athleteIndex + 5]);
	widgetHtml += '</div>';
		
	return widgetHtml;
}

function getAthleteWidgetHtml(athlete) {
	var widgetHtml;
	
	widgetHtml = '<div class="athlete col-md-3 col-md-offset-1">';
	widgetHtml +=	'<img class="athleteImage" src="' + athlete.imgSrc + '" alt="Picture of ' + athlete.name + '" />';
	widgetHtml +=	'<div class="athleteName">' + athlete.name + '</div>';
	widgetHtml +=	'<div class="athleteDescription">' + athlete.details + '</div>';
	widgetHtml += '</div>';
	
	return widgetHtml;
}