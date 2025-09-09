import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import { useEffect, useState } from 'react';

const BarChart = () => {
  const [options, setOptions] = useState({});

  useEffect(() => {
    setOptions({
      chart: {
        type: 'column',
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
        categories: ['Desktop', 'Mobile', 'Tablet', 'Smart TV'],
        gridLineWidth: 0,
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
        name: 'Users',
        data: [
          { y: 4200, color: 'hsl(var(--chart-1))' },
          { y: 3800, color: 'hsl(var(--chart-2))' },
          { y: 1200, color: 'hsl(var(--chart-3))' },
          { y: 800, color: 'hsl(var(--chart-4))' }
        ],
        borderRadius: 8,
        pointPadding: 0.1,
        groupPadding: 0.2
      }],
      plotOptions: {
        column: {
          animation: {
            duration: 1000
          },
          dataLabels: {
            enabled: true,
            style: {
              color: 'hsl(var(--foreground))',
              fontWeight: 'bold'
            }
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
          return `<b>${this.x}</b><br/>Users: ${this.y.toLocaleString()}`;
        }
      }
    });
  }, []);

  return <HighchartsReact highcharts={Highcharts} options={options} />;
};

export default BarChart;