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
           // var parsed = JSON.parse(output);

            var arr = [];

            // for (var x in parsed) {
            //     arr.push(parsed[x]);
            // }
            var t= [["2015-08-21 14:11:09",454],["2015-09-21 14:11:09",343]];
            for (var i = 0; i < t.length; i++) {
                arduinoSeries.addPoint(t[i], true, true);
            }
        }
    });

}
