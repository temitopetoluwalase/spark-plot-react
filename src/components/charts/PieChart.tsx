import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import { useEffect, useState } from 'react';

const PieChart = () => {
  const [options, setOptions] = useState({});

  useEffect(() => {
    setOptions({
      chart: {
        type: 'pie',
        backgroundColor: 'transparent',
        height: 300,
        animation: {
          duration: 1000
        }
      },
      title: {
        text: null
      },
      legend: {
        align: 'right',
        verticalAlign: 'middle',
        layout: 'vertical',
        itemStyle: {
          color: 'hsl(var(--foreground))'
        }
      },
      credits: {
        enabled: false
      },
      series: [{
        name: 'Traffic Source',
        data: [
          { 
            name: 'Organic Search', 
            y: 45.2, 
            color: 'hsl(var(--chart-1))'
          },
          { 
            name: 'Direct', 
            y: 28.7, 
            color: 'hsl(var(--chart-2))'
          },
          { 
            name: 'Social Media', 
            y: 15.3, 
            color: 'hsl(var(--chart-3))'
          },
          { 
            name: 'Email', 
            y: 7.1, 
            color: 'hsl(var(--chart-4))'
          },
          { 
            name: 'Referral', 
            y: 3.7, 
            color: 'hsl(var(--chart-5))'
          }
        ],
        innerSize: '50%',
        dataLabels: {
          enabled: true,
          format: '{point.name}: {point.percentage:.1f}%',
          style: {
            color: 'hsl(var(--foreground))',
            fontWeight: 'bold'
          },
          distance: 20
        },
        showInLegend: true
      }],
      plotOptions: {
        pie: {
          animation: {
            duration: 1000
          },
          allowPointSelect: true,
          cursor: 'pointer',
          borderWidth: 2,
          borderColor: 'hsl(var(--background))',
          shadow: {
            color: 'rgba(0,0,0,0.1)',
            opacity: 0.3,
            offsetX: 0,
            offsetY: 4,
            width: 8
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
          return `<b>${this.point.name}</b><br/>${this.percentage.toFixed(1)}% (${this.y}%)`;
        }
      }
    });
  }, []);

  return <HighchartsReact highcharts={Highcharts} options={options} />;
};

export default PieChart;