/*jslint devel: true */

$(function () 
  {
    "use strict";
    $('#enhance').click(enhance);
    $('#pan-right').click(panRight);
    $('#pan-left').click(panLeft);
    $('#pan-up').click(panUp);
    $('#pan-down').click(panDown);
  });

function enhance() {
    "use strict";
    console.log(viewer.viewport.getZoom())
    console.log(viewer.viewport.getBounds())
    
    //viewer.viewport.getBounds()    
    //var point = new OpenSeadragon.Point(-0.5,-0.5)
    viewer.viewport.zoomTo(viewer.viewport.getZoom()*1.1,null,true);

}

function panRight() {
    "use strict";
    pan(0.05,0);
}

function panLeft() {
    "use strict";
    pan(-0.05,0);
}

function panUp() {
    "use strict";
    pan(0,-0.05);
}

function panDown() {
    "use strict";
    pan(0,0.05);
}

function pan(x,y) {
    "use strict";
    console.log(viewer.viewport.getBounds());
    var bounds = viewer.viewport.getBounds();
    
    var point = new OpenSeadragon.Point(x,y);
    var newBounds = bounds.translate(point);
    viewer.viewport.fitBounds(newBounds, true);    

}

