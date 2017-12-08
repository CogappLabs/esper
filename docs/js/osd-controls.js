/*jslint devel: true */

$(function () 
  {
    "use strict";
    $('#enhance').click(enhance);
  });

function enhance() {
    "use strict";
    console.log(viewer.viewport.getZoom())
    
    //$("#result").load("content.html"); //loads contents of file straight into div!
/*    
    $.get("content.html",null, function (data, textStatus, xhr) { 
        // second param (null) is the data you want GET as a query string. Specified as { key: value } probably
        $("#result").html(data);
    });
*/
    
viewer.viewport.zoomTo(viewer.viewport.getZoom()*2);

}

