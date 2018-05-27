var data = [
    {
        "id": "0.0",
        "parent": "",
        "name": "Dataset"
    },
    {
        "id": "1.1",
        "parent": "0.0",
        "name": "Fake News"
    },
    {
        "id": "1.2",
        "parent": "0.0",
        "name": "Real News"
    },
    {
        "id": "2.1",
        "parent": "1.1",
        "name": "Joy",
        "value": 658.0
    },
    {
        "id": "2.2",
        "parent": "1.1",
        "name": "Sadness",
        "value": 957.0
    },
    {
        "id": "2.3",
        "parent": "1.1",
        "name": "Anger",
        "value": 43.0
    },
    {
        "id": "2.4",
        "parent": "1.1",
        "name": "Fear",
        "value": 27.0
    },
    {
        "id": "2.5",
        "parent": "1.1",
        "name": "Disgust",
        "value": 257.0
    },
    {
        "id": "7.1",
        "parent": "1.2",
        "name": "Joy",
        "value": 1117.0
    },
    {
        "id": "7.2",
        "parent": "1.2",
        "name": "Sadness",
        "value": 1182.0
    },
    {
        "id": "7.3",
        "parent": "1.2",
        "name": "Anger",
        "value": 61.0
    },
    {
        "id": "7.4",
        "parent": "1.2",
        "name": "Fear",
        "value": 74.0
    },
    {
        "id": "7.5",
        "parent": "1.2",
        "name": "Disgust",
        "value": 264.0
    }
];

// Splice in transparent for the center circle - questa riga infastidisce
//Highcharts.getOptions().colors.splice(0, 0, 'transparent');


Highcharts.chart('container3', {

    chart: {
        height: '100%'
    },

    title: {
        text: 'Sentiment Distribution over Tweets'
    },
    subtitle: {
        //text: 'Qualitative view (about a quarter of the dataset has been considered)'
    },
    series: [{
        type: "sunburst",
        data: data,
        allowDrillToNode: true,
        cursor: 'pointer',
        dataLabels: {
            format: '{point.name}',
            filter: {
                property: 'innerArcLength',
                operator: '>',
                value: 16
            }
        },
        levels: [{
            level: 1,
            levelIsConstant: false,
            dataLabels: {
                rotationMode: 'parallel',
                filter: {
                    property: 'outerArcLength',
                    operator: '>',
                    value: 64
                }
            }
        }, {
            level: 2,
            colorByPoint: true,
            dataLabels: {
                rotationMode: 'parallel'
            }
        },
            {
                level: 3,
                colorVariation: {
                    key: 'brightness',
                    to: -0.5
                }
            }, {
                level: 4,
                colorVariation: {
                    key: 'brightness',
                    to: 0.5
                }
            }
        ]

    }],
    tooltip: {
        headerFormat: "",
        //pointFormat: '<b>{point.name}</b>: <b>{point.value}</b>'
        pointFormat: '<b>{point.name}</b>'
    }
});