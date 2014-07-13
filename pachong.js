var jsdom = require('jsdom').jsdom;
var myWindow = jsdom().createWindow()
var $ = require('jQuery'); 
var jq = require('jQuery').create()
var jQuery = require('jQuery').create(myWindow)
var http = require('http'); 
 
var options = { 
    host: 'www.jyeoo.com', 
    port: 80, 
    path: '/math3/training/openexam?a=7310a010-b1e7-4a82-b9b4-11feb73dbd62' 
}; // www.2cto.com
 
var html = ''; 
http.get(options, function(res) { 
    res.on('data', function(data) { 
        // collect the data chunks to the variable named "html" 
        html += data; 
    }).on('end', function() { 
        // the whole of webpage data has been collected. parsing time! 
        var title = $(html).find('.acdv fieldset').each(function($this){ 
            var pt1 = $(this).find('.pt1').html(); 
            var pt2 = $(this).find('.pt2').html(); 
            var pt3 = $(this).find('.pt3').html(); 
            var pt4 = $(this).find('.pt4').html(); 
            var pt5 = $(this).find('.pt5').html(); 
            var pt6 = $(this).find('.pt6').html(); 
            var pt7 = $(this).find('.pt7').html(); 
            var pt8 = $(this).find('.pt8').html(); 
            var pt9 = $(this).find('.pt9').html();
            console.log( pt1); 
            console.log("*****************************************");
            console.log( pt2);
        }); 
        console.log("over"); 
     }); 
}); 

