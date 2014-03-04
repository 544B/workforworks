refont()
function refont(){
	setFont = "MS-PGothic";
	reFont =  "HiraKakuPro-W3";
	fontSize = 24;
	regObj = new RegExp(setFont,"g");
	layObj = activeDocument.layers;
	for (i=0; i<layObj.length; i++) {
		current = layObj[i];
		if (current.kind === LayerKind.TEXT) {
			fontName = current.textItem.font;
			result = fontName.match(regObj);
			if (result) {
				// fontSize = eval(layObj[i].textItem.size) * 2;
				current.textItem.size = fontSize;
				current.textItem.font = reFont;
			}
		}
	}
}
