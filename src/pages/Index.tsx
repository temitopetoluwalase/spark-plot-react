import DashboardHeader from "@/components/dashboard/DashboardHeader";
import ChartCard from "@/components/dashboard/ChartCard";
import LineChart from "@/components/charts/LineChart";
import BarChart from "@/components/charts/BarChart";
import PieChart from "@/components/charts/PieChart";
import AreaChart from "@/components/charts/AreaChart";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-dashboard">
      <div className="container mx-auto px-4 py-8">
        <DashboardHeader />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          <ChartCard 
            title="Revenue Trend" 
            description="Monthly revenue growth over the year"
          >
            <LineChart />
          </ChartCard>
          
          <ChartCard 
            title="User Distribution" 
            description="Active users across different platforms"
          >
            <BarChart />
          </ChartCard>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <ChartCard 
            title="Traffic Sources" 
            description="Breakdown of website traffic by source"
          >
            <PieChart />
          </ChartCard>
          
          <ChartCard 
            title="Engagement Metrics" 
            description="Weekly page views and sessions comparison"
          >
            <AreaChart />
          </ChartCard>
        </div>
      </div>
    </div>
  );
};

export default Index;
