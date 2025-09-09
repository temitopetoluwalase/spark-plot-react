import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import { useEffect, useState } from 'react';

const LineChart = () => {
  const [options, setOptions] = useState({});

  useEffect(() => {
    setOptions({
      chart: {
        type: 'line',
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
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
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
        enabled: false
      },
      credits: {
        enabled: false
      },
      series: [{
        name: 'Revenue',
        data: [2900, 3200, 3800, 3600, 4200, 4800, 5100, 5400, 4900, 5800, 6200, 6800],
        color: 'hsl(var(--chart-1))',
        lineWidth: 3,
        marker: {
          radius: 5,
          fillColor: 'hsl(var(--chart-1))',
          lineWidth: 2,
          lineColor: 'white'
        },
        shadow: {
          color: 'hsl(var(--chart-1))',
          opacity: 0.3,
          offsetX: 0,
          offsetY: 2,
          width: 10
        }
      }],
      plotOptions: {
        line: {
          enableMouseTracking: true,
          animation: {
            duration: 1000
          }
        }
      },
      tooltip: {
        backgroundColor: 'hsl(var(--background))',
        borderColor: 'hsl(var(--border))',
        style: {
          color: 'hsl(var(--foreground))'
        },
        formatter: function() {
          return `<b>${this.x}</b><br/>Revenue: $${this.y.toLocaleString()}`;
        }
      }
    });
  }, []);

  return <HighchartsReact highcharts={Highcharts} options={options} />;
};

export default LineChart;