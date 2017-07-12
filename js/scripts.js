var span = $('span');
span.each(function(index, element) {
	if(index % 2 == 0) {
		$("span:even").css('color', 'red');
	};
});
var paragraphs = $('p');
paragraphs.each(function (index, element){
	var button = '<button class="btn" data-temp="' + index + '">click</button>'
	$(element).append(button);
});
$('button').click(function(){
	alert($(this).attr('data-temp'));
});