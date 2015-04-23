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
		name: "8",
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

var sliderIndex = 0;

function updateSlider() {
	$("#slider").html(
	
		'<div class="row">' +
		
			'<div class="col-md-1"></div>'+
			'<div class="col-md-10">' +
				getSliderHtml() +
			'</div>' +
			'<div class="col-md-1"></div>'+

		'</div>');	
}

function decrementSliderIndex() {
	var possibleIndex = sliderIndex - 6;
	
	if (possibleIndex >= 0) {
		sliderIndex = possibleIndex;
	} else {
		sliderIndexIndex = sliderData.length - 6;
	}
}

function incrementSliderIndex() {
	var possibleIndex = sliderIndex + 6;
	
	if (possibleIndex < sliderData.length) {
		sliderIndex = possibleIndex;
	} else {
		sliderIndexf = 0;
	}
}

function getSliderHtml() {
	var widgetHtml;
	
	widgetHtml = '<div class="row">';
	widgetHtml += getSliderItemHtml(sliderData[sliderIndex]);
	widgetHtml += getSliderItemHtml(sliderData[sliderIndex + 1]);
	widgetHtml += getSliderItemHtml(sliderData[sliderIndex + 2]);
	widgetHtml += '</div>';
	
	widgetHtml += '<div class="row">';
	widgetHtml += getSliderItemHtml(sliderData[sliderIndex + 3]);
	widgetHtml += getSliderItemHtml(sliderData[sliderIndex + 4]);
	widgetHtml += getSliderItemHtml(sliderData[sliderIndex + 5]);
	widgetHtml += '</div>';
		
	return widgetHtml;
}

function getSliderItemHtml(sliderItemData) {
	var widgetHtml;
	
	widgetHtml = '<div class="slider col-md-3 col-md-offset-1">';
	widgetHtml +=	'<img class="sliderImage" src="' + sliderItemData.imgSrc + '" alt="' + sliderItemData.name + '" />';
	widgetHtml +=	'<div class="sliderName">' + sliderItemData.name + '</div>';
	widgetHtml +=	'<div class="sliderDescription">' + sliderItemData.details + '</div>';
	widgetHtml += '</div>';
	
	return widgetHtml;
}