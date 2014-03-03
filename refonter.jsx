fonty()
function fonty(){
  regObj = new RegExp("KozGoPro-Regular","g");
  layObj = activeDocument.artLayers;
  for (i=0; i<layObj.length; i++) {
    if (layObj[i].kind === LayerKind.TEXT) {
      fontName = layObj[i].textItem.font;
      fontSize = layObj[i].textItem.size * 2;
      result = fontName.match(regObj);
      if (result) {
        alert(layObj[i].textItem.size);
        layObj[i].textItem.size = fontSize;
        layObj[i].textItem.font = "HiraKakuPro-W3";
      }
    }
  }
}
