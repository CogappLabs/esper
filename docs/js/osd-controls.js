/*jslint devel: true */

$(function () 
  {
    "use strict";
    $('#enhance').click(enhance);
    $('#pan-right').click(panRight);
  });

function enhance() {
    "use strict";
    console.log(viewer.viewport.getZoom())
    console.log(viewer.viewport.getBounds())
    
    //viewer.viewport.getBounds()    
    //var point = new OpenSeadragon.Point(-0.5,-0.5)
    viewer.viewport.zoomTo(viewer.viewport.getZoom()*2,null,true);

}

function panRight() {
    "use strict";
    console.log(viewer.viewport.getBounds())
    
    var point = new OpenSeadragon.Point(0.1,0)
    viewer.viewport.panTo(point)    

}

