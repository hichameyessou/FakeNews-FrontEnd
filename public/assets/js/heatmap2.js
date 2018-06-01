
Highcharts.chart('container2', {

    chart: {
        type: 'heatmap',
        marginTop: 60,
        marginBottom: 80,
        plotBorderWidth: 1
    },

    credits: {
        enabled: false
    },

    title: {
        text: 'Tweets spread over the week'
    },


    subtitle: {
        text: ''
    },

    xAxis: {
        categories: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
    },

    yAxis: {
        categories: ['00:00 AM','01:00 AM','02:00 AM','03:00 AM','04:00 AM','05:00 AM','06:00 AM','07:00 AM','08:00 AM','09:00 AM','10:00 AM','11:00 AM', '12:00 AM','01:00 PM','02:00 PM','03:00 PM','04:00 PM','05:00 PM','06:00 PM','07:00 PM','08:00 PM','09:00 PM','10:00 PM','11:00 PM'],
        title: 'Hour'
    },

    colorAxis: {
        min: 1000,
        minColor: '#000000',
        maxColor: '#4ae6ff'
    },

    legend: {
        align: 'right',
        layout: 'vertical',
        margin: 0,
        verticalAlign: 'top',
        y: 43,
        symbolHeight: 260
    },

    tooltip: {
        formatter: function () {
            return 'On <b>' + this.series.xAxis.categories[this.point.x] + '</b> at <b>' + this.series.yAxis.categories[this.point.y] + '</b> <br>have been created <b>' + this.point.value + '</b> news <b>';
        }
    },

    series: [{
        name: 'Quantity',
        borderWidth: 1,
        // data: [[0, 0, 2484],[0, 1, 3763],[0, 2, 3827],[0, 3, 3686],[0, 4, 2611],[0, 5, 2086],[0, 6, 2020],[0, 7, 2316],[0, 8, 2313],[0, 9, 2143],[0, 10, 3100],[0, 11, 2770],[0, 12, 3160],[0, 13, 3679],[0, 14, 4573],[0, 15, 4974],[0, 16, 7213],[0, 17, 6478],[0, 18, 5796],[0, 19, 5321],[0, 20, 6203],[0, 21, 6251],[0, 22, 5968],[0, 23, 5542],[1, 0, 3678],[1, 1, 3856],[1, 2, 3640],[1, 3, 3834],[1, 4, 2859],[1, 5, 2189],[1, 6, 2143],[1, 7, 2092],[1, 8, 2316],[1, 9, 3063],[1, 10, 2535],[1, 11, 3342],[1, 12, 4265],[1, 13, 4989],[1, 14, 5236],[1, 15, 5102],[1, 16, 5738],[1, 17, 6204],[1, 18, 6035],[1, 19, 6056],[1, 20, 5431],[1, 21, 5086],[1, 22, 6671],[1, 23, 5481],[2, 0, 4740],[2, 1, 4115],[2, 2, 3942],[2, 3, 3654],[2, 4, 3021],[2, 5, 2559],[2, 6, 2424],[2, 7, 2507],[2, 8, 2870],[2, 9, 2736],[2, 10, 3102],[2, 11, 3218],[2, 12, 4272],[2, 13, 4292],[2, 14, 4534],[2, 15, 5534],[2, 16, 6035],[2, 17, 6303],[2, 18, 5390],[2, 19, 5802],[2, 20, 4771],[2, 21, 4820],[2, 22, 4709],[2, 23, 4602],[3, 0, 3665],[3, 1, 4146],[3, 2, 3304],[3, 3, 2969],[3, 4, 2684],[3, 5, 2045],[3, 6, 1696],[3, 7, 1813],[3, 8, 1881],[3, 9, 1653],[3, 10, 2134],[3, 11, 3280],[3, 12, 4345],[3, 13, 4449],[3, 14, 4702],[3, 15, 5261],[3, 16, 4447],[3, 17, 4623],[3, 18, 5190],[3, 19, 5671],[3, 20, 5237],[3, 21, 4342],[3, 22, 4698],[3, 23, 4225],[4, 0, 3393],[4, 1, 3096],[4, 2, 3272],[4, 3, 2629],[4, 4, 2307],[4, 5, 2466],[4, 6, 4138],[4, 7, 2884],[4, 8, 2484],[4, 9, 2666],[4, 10, 2887],[4, 11, 3125],[4, 12, 3564],[4, 13, 4474],[4, 14, 4530],[4, 15, 4139],[4, 16, 4196],[4, 17, 4086],[4, 18, 4215],[4, 19, 4301],[4, 20, 4226],[4, 21, 4084],[4, 22, 3403],[4, 23, 3456],[5, 0, 3039],[5, 1, 3674],[5, 2, 3245],[5, 3, 2830],[5, 4, 2217],[5, 5, 1693],[5, 6, 1532],[5, 7, 1440],[5, 8, 1210],[5, 9, 1128],[5, 10, 1120],[5, 11, 1840],[5, 12, 1937],[5, 13, 2279],[5, 14, 2867],[5, 15, 2724],[5, 16, 2810],[5, 17, 3011],[5, 18, 3633],[5, 19, 2636],[5, 20, 2759],[5, 21, 3450],[5, 22, 2398],[5, 23, 2356],[6, 0, 2646],[6, 1, 2274],[6, 2, 2183],[6, 3, 2060],[6, 4, 1765],[6, 5, 1691],[6, 6, 1277],[6, 7, 1240],[6, 8, 1098],[6, 9, 1180],[6, 10, 1249],[6, 11, 1668],[6, 12, 1566],[6, 13, 1864],[6, 14, 2601],[6, 15, 2420],[6, 16, 2608],[6, 17, 2724],[6, 18, 2751],[6, 19, 2717],[6, 20, 2437],[6, 21, 2975],[6, 22, 2447],[6, 23, 2745]],
        data: [[0, 0, 2484],[0, 1, 3763],[0, 2, 3827],[0, 3, 3686],[0, 4, 2611],[0, 5, 2086],[0, 6, 2020],[0, 7, 2316],[0, 8, 2313],[0, 9, 2143],[0, 10, 3100],[0, 11, 2770],[0, 12, 3160],[0, 13, 3679],[0, 14, 4573],[0, 15, 4974],[0, 16, 7213],[0, 17, 6478],[0, 18, 5796],[0, 19, 5321],[0, 20, 6203],[0, 21, 6251],[0, 22, 5968],[1, 0, 3678],[1, 1, 3856],[1, 2, 3640],[1, 3, 3834],[1, 4, 2859],[1, 5, 2189],[1, 6, 2143],[1, 7, 2092],[1, 8, 2316],[1, 9, 3063],[1, 10, 2535],[1, 11, 3342],[1, 12, 4265],[1, 13, 4989],[1, 14, 5236],[1, 15, 5102],[1, 16, 5738],[1, 17, 6204],[1, 18, 6035],[1, 19, 6056],[1, 20, 5431],[1, 21, 5086],[1, 22, 6671],[2, 0, 4740],[2, 1, 4115],[2, 2, 3942],[2, 3, 3654],[2, 4, 3021],[2, 5, 2559],[2, 6, 2424],[2, 7, 2507],[2, 8, 2870],[2, 9, 2736],[2, 10, 3102],[2, 11, 3218],[2, 12, 4272],[2, 13, 4292],[2, 14, 4534],[2, 15, 5534],[2, 16, 6035],[2, 17, 6303],[2, 18, 5390],[2, 19, 5802],[2, 20, 4771],[2, 21, 4820],[2, 22, 4709],[3, 0, 3665],[3, 1, 4146],[3, 2, 3304],[3, 3, 2969],[3, 4, 2684],[3, 5, 2045],[3, 6, 1696],[3, 7, 1813],[3, 8, 1881],[3, 9, 1653],[3, 10, 2134],[3, 11, 3280],[3, 12, 4345],[3, 13, 4449],[3, 14, 4702],[3, 15, 5261],[3, 16, 4447],[3, 17, 4623],[3, 18, 5190],[3, 19, 5671],[3, 20, 5237],[3, 21, 4342],[3, 22, 4698],[4, 0, 3393],[4, 1, 3096],[4, 2, 3272],[4, 3, 2629],[4, 4, 2307],[4, 5, 2466],[4, 6, 4138],[4, 7, 2884],[4, 8, 2484],[4, 9, 2666],[4, 10, 2887],[4, 11, 3125],[4, 12, 3564],[4, 13, 4474],[4, 14, 4530],[4, 15, 4139],[4, 16, 4196],[4, 17, 4086],[4, 18, 4215],[4, 19, 4301],[4, 20, 4226],[4, 21, 4084],[4, 22, 3403],[5, 0, 3039],[5, 1, 3674],[5, 2, 3245],[5, 3, 2830],[5, 4, 2217],[5, 5, 1693],[5, 6, 1532],[5, 7, 1440],[5, 8, 1210],[5, 9, 1128],[5, 10, 1120],[5, 11, 1840],[5, 12, 1937],[5, 13, 2279],[5, 14, 2867],[5, 15, 2724],[5, 16, 2810],[5, 17, 3011],[5, 18, 3633],[5, 19, 2636],[5, 20, 2759],[5, 21, 3450],[5, 22, 2398],[6, 0, 2646],[6, 1, 2274],[6, 2, 2183],[6, 3, 2060],[6, 4, 1765],[6, 5, 1691],[6, 6, 1277],[6, 7, 1240],[6, 8, 1098],[6, 9, 1180],[6, 10, 1249],[6, 11, 1668],[6, 12, 1566],[6, 13, 1864],[6, 14, 2601],[6, 15, 2420],[6, 16, 2608],[6, 17, 2724],[6, 18, 2751],[6, 19, 2717],[6, 20, 2437],[6, 21, 2975],[6, 22, 2447]],
        dataLabels: {
            enabled: false,
            color: '#000000'
        }
    }]

});