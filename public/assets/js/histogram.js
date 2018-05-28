
Highcharts.chart('container4', {
    chart: {
        type: 'column',
        options3d: {
            enabled: true,
            alpha: 15,
            beta: 15,
            viewDistance: 25,
            depth: 40
        }
    },

    title: {
        text: 'Dataset insights'
    },

    subtitle: {
        //text: 'text'
    },

    xAxis: {
        categories: ['Tweets Nature', 'News Nature', 'Users Nature'],
        labels: {
            skew3d: true,
            style: {
                fontSize: '16px'
            }
        }
    },

    yAxis: {
        allowDecimals: false,
        min: 0,
        title: {
            text: 'Number of Tweets',
            skew3d: true
        }
    },

    credits: {
        enabled: false
    },

    tooltip: {
        headerFormat: '<b>{point.key}</b><br>',
        //pointFormat: '<span style="color:{series.color}">\u25CF</span> {series.name}: {point.y} / {point.stackTotal}'
        pointFormat: '<span style="color:{series.color}">\u25CF</span> {series.name}: {point.y} %'
    },

    plotOptions: {
        column: {
            stacking: 'normal',
            depth: 40
        }
    },

    series: [{
        name: 'Real Tweets',

        data: [{y: 72, color: 'rgb(34, 205, 232)'},
                {y: 49, color: 'rgb(34, 205, 232)'},
                {y: 33, color: 'rgb(34, 205, 232)'}],
        stack: 'male'
    },  {
        name: 'Fake Tweets',
        data: [{y: 28, color: 'rgb(208, 187, 81)'},
            {y: 51, color: 'rgb(208, 187, 81)'},
            {y: 67, color: 'rgb(208, 187, 81)'}],
        stack: 'female'
    }]
});