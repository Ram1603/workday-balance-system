
import React, { useState } from "react";
import DashboardHeader from "@/components/DashboardHeader";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import LeaveRequestTable from "@/components/LeaveRequestTable";
import EmployeeTable from "@/components/EmployeeTable";
import StatCard from "@/components/StatCard";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { AlertCircle, BarChart3, CalendarDays, UsersRound } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

const mockLeaveRequests = [
  {
    id: "1",
    employeeName: "John Doe",
    leaveType: "Annual Leave",
    startDate: "2025-05-01",
    endDate: "2025-05-05",
    status: "pending" as const,
  },
  {
    id: "2",
    employeeName: "Jane Smith",
    leaveType: "Sick Leave",
    startDate: "2025-04-18",
    endDate: "2025-04-19",
    status: "pending" as const,
  },
  {
    id: "3",
    employeeName: "Robert Johnson",
    leaveType: "Personal Leave",
    startDate: "2025-04-20",
    endDate: "2025-04-20",
    status: "approved" as const,
  },
  {
    id: "4",
    employeeName: "Emily Davis",
    leaveType: "Annual Leave",
    startDate: "2025-05-10",
    endDate: "2025-05-14",
    status: "rejected" as const,
  },
];

const mockEmployees = [
  {
    id: "1",
    name: "John Doe",
    email: "john.doe@example.com",
    department: "Engineering",
    position: "Software Developer",
    status: "active" as const,
  },
  {
    id: "2",
    name: "Jane Smith",
    email: "jane.smith@example.com",
    department: "Marketing",
    position: "Marketing Manager",
    status: "active" as const,
  },
  {
    id: "3",
    name: "Robert Johnson",
    email: "robert.johnson@example.com",
    department: "Finance",
    position: "Financial Analyst",
    status: "active" as const,
  },
  {
    id: "4",
    name: "Emily Davis",
    email: "emily.davis@example.com",
    department: "Human Resources",
    position: "HR Specialist",
    status: "active" as const,
  },
  {
    id: "5",
    name: "Michael Wilson",
    email: "michael.wilson@example.com",
    department: "Engineering",
    position: "QA Engineer",
    status: "inactive" as const,
  },
];

const AdminDashboard = () => {
  const [userName] = useState("Admin User");
  const { toast } = useToast();

  const handleAddEmployee = () => {
    toast({
      title: "Feature coming soon",
      description: "The add employee feature is under development.",
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <DashboardHeader title="Admin Dashboard" userName={userName} />
      <main className="p-4 md:p-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          <StatCard
            title="Total Employees"
            value="5"
            icon={<UsersRound className="h-4 w-4" />}
            description="Active and inactive"
          />
          <StatCard
            title="Pending Requests"
            value="2"
            icon={<AlertCircle className="h-4 w-4" />}
            description="Require your approval"
          />
          <StatCard
            title="Employees on Leave"
            value="1"
            icon={<CalendarDays className="h-4 w-4" />}
            description="Currently on leave"
          />
          <StatCard
            title="Total Leave Days"
            value="12"
            icon={<BarChart3 className="h-4 w-4" />}
            description="Approved this month"
          />
        </div>

        <Tabs defaultValue="leave-requests">
          <TabsList className="grid w-full md:w-[400px] grid-cols-2">
            <TabsTrigger value="leave-requests">Leave Requests</TabsTrigger>
            <TabsTrigger value="employees">Employees</TabsTrigger>
          </TabsList>
          <TabsContent value="leave-requests" className="mt-4">
            <Card>
              <CardHeader>
                <CardTitle>Pending Leave Requests</CardTitle>
                <CardDescription>Approve or reject employee leave requests</CardDescription>
              </CardHeader>
              <CardContent>
                <LeaveRequestTable requests={mockLeaveRequests} isAdmin={true} />
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="employees" className="mt-4">
            <Card>
              <CardHeader>
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                  <div>
                    <CardTitle>Employee Management</CardTitle>
                    <CardDescription>Manage your employee records</CardDescription>
                  </div>
                  <Button onClick={handleAddEmployee}>Add Employee</Button>
                </div>
              </CardHeader>
              <CardContent>
                <EmployeeTable employees={mockEmployees} />
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
};

export default AdminDashboard;
