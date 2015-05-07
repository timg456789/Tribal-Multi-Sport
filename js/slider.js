var sliderIndex = 0;

function updateSlider(config) {
	$(config.selector).html(
	
		'<div class="row">' +
		
			'<div class="col-md-1"></div>'+
			'<div class="col-md-10">' +
				getSliderHtml(config) +
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

function getSliderHtml(config) {
	var widgetHtml = '';
	var dataIndex = 0;
	
	for(var ct = 0; ct < config.rowCount; ct++) {
			widgetHtml += '<div class="row">';
			
			var cols = config.rowSize[ct];
			var style = getClassForCols(cols);
			
			for(var colCt = 0; colCt < cols; colCt++) {
				widgetHtml += getSliderItemHtml(config.data[dataIndex], style);
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