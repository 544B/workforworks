/*
 * P2S Font Changer - ver 0.0.4
 * Change DeviceFont DesignComp PC to SP
 */

function refont(el) {

  var layers      = el.layers;

  var setFont     = "MS-PGothic";
      reFont      =  "HiraKakuPro-W3",
      fontSize    = 24,
      lineHeight  = 30,
      check       = new RegExp(setFont,"g");

  for ( var layerIndex = layers.length; layerIndex > 0; layerIndex-- ) {
    var currentLayer = layers[layerIndex-1];

    if ( currentLayer.typename === "LayerSet" ) {
      refont(currentLayer);
    } else {
      if ( currentLayer.kind === LayerKind.TEXT ) {
        var target = currentLayer.textItem;

        if ( target.font.match(check) ) {
          target.size             = fontSize;
          target.leading          = lineHeight;
          target.font             = reFont;
          target.antiAliasMethod  = AntiAlias.SHARP;
        }

      }
    }

  }
}

refont(app.activeDocument);
