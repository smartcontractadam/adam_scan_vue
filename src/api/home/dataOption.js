export const options = {
    title: { text: '' },
    backgroundColor: '#ffffff',
    tooltip: {
        trigger: 'axis',
        formatter: function (params) {
            return '<div style="text-align: left">'
                + '<span style="color: black;text-align: left;">'
                + params[0].axisValue
                + '</span>'
                +'</br>'
                + '<span style="color: #FF6B22;text-align: left;">'
                + params[0].value + "TIB"
                + '</span>'
                +'</br>'
                + '</div>';
        }
    },
    xAxis: {
        data: {},
    },
    yAxis: {
        subtext: " TIB",
    },
    series: [{
        type: 'line',
        smooth: true,
        // symbol: 'circle',     //折点设定为实心点
        symbolSize: 7,   //设定点的大小
        itemStyle : {  //折线点的颜色
            normal : {
                color:'#FF6B22',
                lineStyle: { // 折线颜色
                    normal: {
                        color: '#FF6B22',
                        width: 3
                    }
                },
            }
        },
    }]
}
