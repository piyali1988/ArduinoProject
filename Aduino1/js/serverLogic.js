console.log("Starting Server Logic");

function callPHP(startDate, endDate) {
    console.log("Starting Server Logic");
    //    });
    $.ajax({
        url: '/db/mysqlQuery.php',
        data: {
            action: 'getData',
            arguments: [startDate, endDate]
        },
        type: 'post',
        success: function(output) {
            //arduinoSeries.data = [[3,5],[4,6]];
            console.log("isOutput " + output);
            if(String(output).includes("0 results")){
            	arduinoSeries.setData([[0,0]]);
            	return;
            }
            var parsed = JSON.parse(output);
            console.log("ParsedSuccess: " + output);
            var arr = [];

            for (var x in parsed) {
                arr.push(parsed[x]);
            }
            console.log("FirstDat: "+arr[0].id+" , "+arr[0].data);
            arduinoSeries.setData([[parseInt(arr[0].id),parseInt(arr[0].data)]]);
            // var t= [[6,454],[34,343]];
            for (var i = 1; i < arr.length; i++) {
                  arduinoSeries.addPoint([parseInt(arr[i].id),parseInt(arr[i].data)], true, false);
                  console.log("Added: "+arr[0].id+" , "+arr[0].data);
            }
        }
    });

}
