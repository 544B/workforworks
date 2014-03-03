fonty()
function fonty(){
  setFont = "KozGoPro-Regular";
  reFont =  "HiraKakuPro-W3";
  regObj = new RegExp(setFont,"g");
  layObj = activeDocument.artLayers;
  for (i=0; i<layObj.length; i++) {
    if (layObj[i].kind === LayerKind.TEXT) {
      fontName = layObj[i].textItem.font;
      result = fontName.match(regObj);
      if (result) {
        fontSize = eval(layObj[i].textItem.size) * 2;
        layObj[i].textItem.size = fontSize;
        layObj[i].textItem.font = reFont;
      }
    }
  }
}
