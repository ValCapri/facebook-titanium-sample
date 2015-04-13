exports.window = function(value) {
	var win = Titanium.UI.createWindow({
		title : 'Publish Stream'
	});
	var fb = require('facebook');

	var wallDialog = Ti.UI.createButton({
		title : 'Share URL with Share Dialog',
		top : 50,
		left : 10,
		right : 10,
		height : 40
	});

	wallDialog.addEventListener('click', function() {
		fb.presentMessageDialog({
			link : 'https://appcelerator.com/',
			name : 'great product',
			description : 'Titanium is a great product',
			caption : 'it rocks too',
			picture : 'http://www.appcelerator.com/wp-content/uploads/scale_triangle1.png'
		});

	});

	fb.addEventListener('shareCompleted', function(e) {
		if (e.success) {
			alert('Share completed');
		} else if (e.cancelled) {
			alert('Share cancelled');
		} else {
			alert('error ' + e.errorDesciption + '. code: ' + e.code);
		}
	});

	win.add(wallDialog);

	return win;
}; 