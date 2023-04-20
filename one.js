var canvas = document.getElementById('canvas')
var ctx = canvas.getContext('2d')
var nameInput = document.getElementById('name')
var downloadBtn = document.getElementById('download-btn')

var image = new Image()
image.crossOrigin="anonymous";
image.src = 'one.jpg'
image.onload = function () {
	drawImage()
}

function drawImage() {
	// ctx.clearRect(0, 0, canvas.width, canvas.height)
	ctx.drawImage(image, 0, 0, canvas.width, canvas.height)
	ctx.font = '80px rb_b'
	ctx.fillStyle = '#fff'
    // ctx.fillText("Text Center", 150 ,80);
    var textString = (nameInput.value)
textWidth = ctx.measureText(textString).width
ctx.fillText(textString, (canvas.width/2) - (textWidth / 2), 440);
}

nameInput.addEventListener('input', function () {
	drawImage()
})

downloadBtn.addEventListener('click', function () {
	downloadBtn.href = canvas.toDataURL('image/jpg')
	downloadBtn.download = 'مُعايدة نادي أدِيب'
})