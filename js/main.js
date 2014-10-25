$( document ).ready(function() {


var someText = "Problem solutiondjkdhdjhdjhkdhddk  hdjkdhdjkhdh dhdkjhdkh"; 




var myVar=setInterval(function () {myTimer()}, 1000);

function myTimer() {
    var d = new Date();
    $("#speedText").val(someText);
}


});

function readTextFile(file)
{
    var rawFile = new XMLHttpRequest();
    rawFile.open("GET", file, false);
    rawFile.onreadystatechange = function ()
    {
        if(rawFile.readyState === 4)
        {
            if(rawFile.status === 200 || rawFile.status == 0)
            {
                var allText = rawFile.responseText;
                alert(allText);
            }
        }
    }
    rawFile.send(null);
}