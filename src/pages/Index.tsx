
import React from "react";
import LoginForm from "@/components/LoginForm";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 to-cyan-100">
      <div className="mb-8 text-center">
        <h1 className="text-4xl font-bold text-primary mb-2">WorkdayBalance</h1>
        <p className="text-muted-foreground">Employee Leave Management System</p>
      </div>
      <LoginForm />
      <footer className="mt-8 text-sm text-center text-muted-foreground">
        <p>© 2025 WorkdayBalance. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Index;
