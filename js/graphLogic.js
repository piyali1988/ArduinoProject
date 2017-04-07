var startDateTime = new Object();
var endDateTime = new Object();
startDateTime.content = new Date();
endDateTime.content = new Date() + 1;

var dateTime;
var arduinoData;
var arduinoSeries = new Object();

$(document).ready(function() {

    $('#dateTimeStart').click(function() {
        NewCssCal(startDateTime, endDateTime, 'startEventDate', 'MMddyyyy', 'dropdown', true, '12');
    });
});
$(document).ready(function() {
    $('#dateTimeEnd').click(function() {
        NewCssCal(startDateTime, endDateTime, 'endEventDate', 'MMddyyyy', 'dropdown', true, '12');
    });
});


$(function() {
    $(document).ready(function() {
        Highcharts.setOptions({
            global: {
                useUTC: false
            }
        });

        $('#container').highcharts({
            chart: {
                type: 'scatter',
                margin: [70, 50, 60, 80],
                events: {
                    click: function(e) {
                        arduinoSeries = this.series[0];
                        // find the clicked values and the series
                        var x = e.xAxis[0].value,
                            y = e.yAxis[0].value,
                            series = this.series[0];

                        // Add it
                        series.addPoint([x, y]);

                    }
                }

            },
            title: {
                text: 'Live random data'

            },
            xAxis: {
                type: 'datetime',
            dateTimeLabelFormats: {
                second: '%Y-%m-%d<br/>%H:%M:%S',
                minute: '%Y-%m-%d<br/>%H:%M',
                hour: '%Y-%m-%d<br/>%H:%M',
                day: '%Y<br/>%m-%d',
                week: '%Y<br/>%m-%d',
                month: '%Y-%m',
                year: '%Y'
            }
                // gridLineWidth: 1,
                // minPadding: 0.2,
                // maxPadding: 0.2,
                // maxZoom: 60
            },
            yAxis: {
                title: {
                    text: 'Value'
                },
                minPadding: 0.2,
                maxPadding: 0.2,
                maxZoom: 60,
                plotLines: [{
                    value: 0,
                    width: 1,
                    color: '#808080'
                }]
            },
            tooltip: {

            },
            legend: {
                enabled: false
            },
            exporting: {
                enabled: false
            },
            series: [{
                name: 'Arduino Pressure Sensor Data',
                data:[[0,0]]
            }]
        });
    });
});
