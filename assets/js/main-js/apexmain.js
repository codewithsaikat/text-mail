function areaChart(idName, width, height = "253") {
  var optionRadial = {
    chart: {
      width: width,
      height: height,
      type: 'line',
      stacked: false,
      toolbar: {
        show: false,

      },

    },

    dataLabels: {
      enabled: false,
    },

    stroke: {
      curve: 'smooth',
      width: 4,
    },

    legend: {
      itemMargin: {
        horizontal: 18
      },
      show: true,
      position: "top",
      fontSize: '12px',
      fontFamily: 'Kumbh Sans',
      fontWeight: 400,
      offsetX: 150,
      offsetY: 0,
      markers: {
        width: 8,
        height: 8,
        offsetX: -6,

      },

    },
    tooltip: {
      shared: true,
      intersect: false,
      custom: function ({
        series,
        seriesIndex,
        dataPointIndex,
        w
      }) {
        return (
          '<div class="arrow_box">' +
          "<span>" +
          w.globals.labels[dataPointIndex] +
          "000$" +
          // series[seriesIndex][dataPointIndex] +
          "</span>" +
          "</div>"
        );
      },
    },

    markers: {
      size: 0,
      colors: '#5243AA',
      strokeColors: '#fff',
      strokeWidth: 2,

    },
    grid: {
      show: true,
      borderColor: '#FFF4FE',
      padding: {
        top: 10,
        right: 10,
        bottom: 0,
        left: 30,
      },
      xaxis: {
        lines: {
          show: true
        },

      },
      yaxis: {
        lines: {
          show: false
        }
      },

    },
    series: [{
        name: 'Income',
        data: [{
          x: "Apr 14",
          y: 9
        }, {
          x: "Apr 15",
          y: 1
        }, {
          x: "Apr 16",
          y: 3
        }, {
          x: "Apr 17",
          y: 9
        }, {
          x: "Apr 18",
          y: 6
        }, {
          x: "Apr 19",
          y: 4
        }, {
          x: "Apr 20",
          y: 7
        }],

      },
      {
        name: 'Expenses',
        data: [{
          x: "Apr 14",
          y: 1
        }, {
          x: "Apr 15",
          y: 7
        }, {
          x: "Apr 16",
          y: 5
        }, {
          x: "Apr 17",
          y: 4
        }, {
          x: "Apr 18",
          y: 3
        }, {
          x: "Apr 19",
          y: 1
        }, {
          x: "Apr 20",
          y: 7
        }],

      },

    ],
    colors: ['#29A073', '#C8EE44'],
    xaxis: {
      // categories: ['Apr 14', 'Apr 15', 'Apr 16', 'Apr 17', 'Apr 18', 'Apr 19', 'Apr 20'],
      type: "dateTime",
      tickAmount: 5,

      labels: {
        offsetY: 0,
        style: {
          fontSize: '12px',
          colors: '#929EAE',
          fontWeight: 400,
        },
        // hover: {
        //   offsetY: 5,
        //   fontSize: '14px',
        //   fontWeight: 600,
        //   colors: '#1B212D',
        //   offsetX: 10,
        // }


      },

      axisBorder: {
        show: false,

      },
      axisTicks: {
        show: false,

      },
      crosshairs: {
        show: true,
        position: 'back',
        width: 49,
        borderRadius: 12,
        stroke: {
          color: '#FFF4FE',
          width: 0,
          dashArray: 0,
        },

        fill: {
          type: "gradient",
          borderRadius: 12,
          gradient: {
            colorFrom: '#FAFBFE',
            colorTo: '#F2F6FC',
            shadeIntensity: 1,
            opacityFrom: 0.2,
            opacityTo: 66.56,
            radius: 12,
            stops: [0, 90, 100]
          }
        },
      },
    },
    yaxis: {

      labels: {
        formatter: function (val) {
          return val.toFixed(0) + 'k'
        },

        align: 'left',
        offsetX: 0,

        style: {
          fontSize: '12px',
          colors: '#929EAE',
          fontWeight: 400,

        },

      },

      min: 0,
      max: 10,
      tickAmount: 4,
      // minorTickCount: 3,
      // interval: 3,


    }
  };

  if ($(idName).length > 0) {
    new ApexCharts(document.querySelector(idName), optionRadial).render();
  }
}
areaChart('#chart', '100%');