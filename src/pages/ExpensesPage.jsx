import React from "react";
import ExpensesComparison from "../components/Expenses/ExpensesComparison"; // pastikan jalur impor benar
import ExpensesBreakdown from "../components/Expenses/ExpensesBreakdown"; // pastikan jalur impor benar
import MainLayout from "../components/Layouts/MainLayout";

const ExpensesPage = () => {
  return (
    <MainLayout type="ExpensesPage">
      
      {/* Expenses Comparison - satu baris */}
      <div className="mb-4 flex justify-center">
        <ExpensesComparison />
      </div>
      
      {/* Expenses Breakdown - tiga kolom */}
      <div className="mb-4 grid grid-cols-1 sm:grid-cols-3 gap-4">
        <ExpensesBreakdown />
        <ExpensesBreakdown />
      </div>

      {/* bottom content start*/}
      <div className="mb-4 sm:flex sm:gap-6">
        <div className="mb-4 sm:w-1/3">
          
        </div>
        <div className="mb-4 sm:w-1/3">
        
        </div>
        <div className="mb-4 sm:w-1/3">
        
        </div>
      </div>
      {/* bottom content end*/}
    </MainLayout>
  );
};

export default ExpensesPage;
