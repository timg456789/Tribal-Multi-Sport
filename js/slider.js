var imageSlider = function(configIn) {
	
	this.sliderIndex = 0;
	this.config = configIn;

	this.decrement = function() {
		var possibleIndex = this.sliderIndex - this.config.rowCount;
		
		if (possibleIndex >= 0) {
			this.sliderIndex = possibleIndex;
		} else {
			this.sliderIndex = this.config.data.length - this.config.rowCount;
		}
		
		this.updateSlider();
	}
	
	this.increment = function() {
		var possibleIndex = this.sliderIndex + this.config.rowCount;
		
		if (possibleIndex < this.config.data.length) {
			
			this.sliderIndex = possibleIndex;
			
		} else {
			this.sliderIndex = 0;
		}
		
		this.updateSlider();
	}
	
	this.updateSlider = function () {
		var sliderHtml = this.getSliderHtml();
		$(this.config.selector).html(
			'<div class="row">' +
				'<div class="col-md-1">' +
					'<img onclick="imageSlider.decrement();" class="decrement" src="../images/thin-chevron-left.png" />' +
				'</div>'+
				'<div class="col-md-10">' +
					sliderHtml +
				'</div>' +
				'<div class="col-md-1">' +
					'<img onclick="imageSlider.increment();" class="increment" src="../images/thin-chevron-right.png" />' +
				'</div>'+

			'</div>');
			
		var maxLength = 300;
			
		$(".show-read-more").each(function(){
			var myStr = $(this).text();
			if($.trim(myStr).length > maxLength){
				var newStr = myStr.substring(0, maxLength);
				var removedStr = myStr.substring(maxLength, $.trim(myStr).length);
				$(this).empty().html(
					newStr +
					'...<input class="read-more ancientGreen btn" type="button" value="Read More">' +
					'<span class="more-text">' + removedStr + '</span>');
			}
		});
		
		$(".read-more").click(function(){
			$(this).siblings(".more-text").contents().unwrap();
			$(this).remove();
		});
	}
	
	this.getSliderHtml = function() {
		var widgetHtml = '';
		var dataIndex = 0;
		
		for(var ct = 0; ct < this.config.rowCount; ct++) {
				widgetHtml += '<div class="row">';
				
				var cols = this.config.rowSize[ct];
				var style = getClassForCols(cols);
				
				for(var colCt = 0; colCt < cols; colCt++) {
					widgetHtml += getSliderItemHtml(this.config.data[dataIndex + this.sliderIndex], style);
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
			widgetHtml +=	'<div class="show-read-more sliderDescription">' + sliderItemData.details + '</div>';
		}
		
		widgetHtml += '</div>';
		
		return widgetHtml;
	}
	
}
