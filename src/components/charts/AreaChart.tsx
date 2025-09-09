import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import { useEffect, useState } from 'react';

const AreaChart = () => {
  const [options, setOptions] = useState({});

  useEffect(() => {
    setOptions({
      chart: {
        type: 'area',
        backgroundColor: 'transparent',
        height: 300,
        animation: {
          duration: 1000
        }
      },
      title: {
        text: null
      },
      xAxis: {
        categories: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6'],
        gridLineWidth: 1,
        gridLineColor: 'hsl(var(--border))',
        lineColor: 'hsl(var(--border))',
        tickColor: 'hsl(var(--border))',
        labels: {
          style: {
            color: 'hsl(var(--muted-foreground))'
          }
        }
      },
      yAxis: {
        title: {
          text: null
        },
        gridLineColor: 'hsl(var(--border))',
        labels: {
          style: {
            color: 'hsl(var(--muted-foreground))'
          }
        }
      },
      legend: {
        enabled: true,
        itemStyle: {
          color: 'hsl(var(--foreground))'
        }
      },
      credits: {
        enabled: false
      },
      series: [{
        name: 'Page Views',
        data: [12000, 18000, 15000, 22000, 25000, 28000],
        color: 'hsl(var(--chart-2))',
        fillOpacity: 0.3,
        lineWidth: 3,
        marker: {
          radius: 5,
          fillColor: 'hsl(var(--chart-2))',
          lineWidth: 2,
          lineColor: 'white'
        }
      }, {
        name: 'Sessions',
        data: [8000, 12000, 10000, 15000, 17000, 19000],
        color: 'hsl(var(--chart-3))',
        fillOpacity: 0.3,
        lineWidth: 3,
        marker: {
          radius: 5,
          fillColor: 'hsl(var(--chart-3))',
          lineWidth: 2,
          lineColor: 'white'
        }
      }],
      plotOptions: {
        area: {
          animation: {
            duration: 1000
          },
          enableMouseTracking: true,
          stacking: 'normal'
        }
      },
      tooltip: {
        backgroundColor: 'hsl(var(--background))',
        borderColor: 'hsl(var(--border))',
        style: {
          color: 'hsl(var(--foreground))'
        },
        shared: true,
        formatter: function() {
          let tooltip = `<b>${this.x}</b><br/>`;
          this.points.forEach(point => {
            tooltip += `${point.series.name}: ${point.y.toLocaleString()}<br/>`;
          });
          return tooltip;
        }
      }
    });
  }, []);

  return <HighchartsReact highcharts={Highcharts} options={options} />;
};

export default AreaChart;