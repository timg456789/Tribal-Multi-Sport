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

var sponsors = [
	{
		imgSrc: "/images/Sponsors-Large.jpg"
	},
	{
		imgSrc: "/images/Sponsors-Large.jpg"
	},
	{
		imgSrc: "/images/Sponsors-Large.jpg"
	},
	
	{
		imgSrc: "/images/Sponsors-Med.jpg"
	},
	{
		imgSrc: "/images/Sponsors-Med.jpg"
	},
	{
		imgSrc: "/images/Sponsors-Med.jpg"
	},
	{
		imgSrc: "/images/Sponsors-Med.jpg"
	},
	{
		imgSrc: "/images/Sponsor-Small.jpg"
	},
	{
		imgSrc: "/images/Sponsor-Small.jpg"
	},
	{
		imgSrc: "/images/Sponsor-Small.jpg"
	},
	{
		imgSrc: "/images/Sponsor-Small.jpg"
	},
	{
		imgSrc: "/images/Sponsor-Small.jpg"
	}
];

var athleteRowCount = 2;
var athleteRowSize = [3, 3]; // The two rows have 3 images each.

var sponsorRowCount = 3;
var sponsorRowSize = [3, 4, 5]; // First row has three images, second row has four images, third row has five images.

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
	var widgetHtml = '';
	var dataIndex = 0;
	
	for(var ct = 0; ct < rowCount; ct++) {
			widgetHtml += '<div class="row">';
			
			var cols = rowSize[ct];
			var style = getClassForCols(cols);
			
			for(var colCt = 0; colCt < cols; colCt++) {
				widgetHtml += getSliderItemHtml(sliderData[dataIndex], style);
				dataIndex++;
			}
			
			widgetHtml += '</div>';
	}
		
	return widgetHtml;
}

function getClassForCols(cols) {
		if (cols == 3) {
			return "slider col-md-4";
		} else if (cols == 4) {
			return "slider col-md-3";
		} else if (cols == 5) {
			return "slider col-md-5ths";
		}
}

function getSliderItemHtml(sliderItemData, style) {
	var widgetHtml;
	
	widgetHtml = '<div class="' + style + '">';
	widgetHtml +=	'<img class="sliderImage" src="' + sliderItemData.imgSrc + '" alt="' + sliderItemData.name + '" />';
	
	if (sliderItemData.name !== undefined) {
		widgetHtml +=	'<div class="sliderName">' + sliderItemData.name + '</div>';
	}
	
	if (sliderItemData.details) {
		widgetHtml +=	'<div class="sliderDescription">' + sliderItemData.details + '</div>';
	}
	
	widgetHtml += '</div>';
	
	return widgetHtml;
}