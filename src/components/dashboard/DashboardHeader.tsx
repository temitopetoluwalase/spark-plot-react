import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const DashboardHeader = () => {
  return (
    <div className="mb-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
        <div>
          <h1 className="text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent">
            Analytics Dashboard
          </h1>
          <p className="text-muted-foreground mt-2">
            Real-time insights and data visualization
          </p>
        </div>
        <div className="flex items-center gap-3">
          <Badge variant="secondary" className="bg-chart-1/10 text-chart-1 border-chart-1/20">
            Live Data
          </Badge>
          <Badge variant="outline">
            Updated 2 min ago
          </Badge>
        </div>
      </div>
      
      <Card className="p-6 bg-gradient-card shadow-header">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="text-2xl font-bold text-chart-1">$47.2K</div>
            <div className="text-sm text-muted-foreground">Total Revenue</div>
            <div className="text-xs text-chart-3 mt-1">+12.5%</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-chart-2">1,234</div>
            <div className="text-sm text-muted-foreground">Active Users</div>
            <div className="text-xs text-chart-3 mt-1">+8.3%</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-chart-4">98.7%</div>
            <div className="text-sm text-muted-foreground">Uptime</div>
            <div className="text-xs text-chart-3 mt-1">+0.2%</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-chart-5">456</div>
            <div className="text-sm text-muted-foreground">Conversions</div>
            <div className="text-xs text-chart-3 mt-1">+15.7%</div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default DashboardHeader;