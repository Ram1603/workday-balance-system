
import React, { useState } from "react";
import DashboardHeader from "@/components/DashboardHeader";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import LeaveRequestForm from "@/components/LeaveRequestForm";
import LeaveRequestTable from "@/components/LeaveRequestTable";
import StatCard from "@/components/StatCard";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { AlertCircle, Calendar, CheckCircle, Clock, FileCheck } from "lucide-react";

const mockLeaveRequests = [
  {
    id: "1",
    employeeName: "John Doe",
    leaveType: "Annual Leave",
    startDate: "2025-05-01",
    endDate: "2025-05-05",
    status: "approved" as const,
  },
  {
    id: "2",
    employeeName: "John Doe",
    leaveType: "Sick Leave",
    startDate: "2025-03-15",
    endDate: "2025-03-16",
    status: "approved" as const,
  },
  {
    id: "3",
    employeeName: "John Doe",
    leaveType: "Personal Leave",
    startDate: "2025-04-20",
    endDate: "2025-04-20",
    status: "pending" as const,
  },
];

const EmployeeDashboard = () => {
  const [userName] = useState("John Doe");

  return (
    <div className="min-h-screen bg-background">
      <DashboardHeader title="Employee Dashboard" userName={userName} />
      <main className="p-4 md:p-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <StatCard
            title="Available Balance"
            value="15 days"
            icon={<Calendar className="h-4 w-4" />}
            description="Annual leave remaining"
          />
          <StatCard
            title="Pending Requests"
            value="1"
            icon={<Clock className="h-4 w-4" />}
            description="Awaiting approval"
          />
          <StatCard
            title="Approved Leaves"
            value="2"
            icon={<CheckCircle className="h-4 w-4" />}
            description="For this year"
          />
        </div>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="text-lg">Leave Balances</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Annual Leave</span>
                  <span className="font-medium">15/20 days</span>
                </div>
                <Progress value={75} />
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Sick Leave</span>
                  <span className="font-medium">8/10 days</span>
                </div>
                <Progress value={80} />
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Personal Leave</span>
                  <span className="font-medium">3/5 days</span>
                </div>
                <Progress value={60} />
              </div>
            </div>
          </CardContent>
        </Card>

        <Tabs defaultValue="request">
          <TabsList className="grid w-full md:w-[400px] grid-cols-2">
            <TabsTrigger value="request">New Request</TabsTrigger>
            <TabsTrigger value="history">Leave History</TabsTrigger>
          </TabsList>
          <TabsContent value="request" className="mt-4">
            <LeaveRequestForm />
          </TabsContent>
          <TabsContent value="history" className="mt-4">
            <Card>
              <CardHeader>
                <CardTitle>Leave History</CardTitle>
              </CardHeader>
              <CardContent>
                <LeaveRequestTable requests={mockLeaveRequests} />
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
};

export default EmployeeDashboard;
