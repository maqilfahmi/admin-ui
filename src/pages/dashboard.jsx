import { useState } from "react";
import Card from "../components/Elements/Card";
import MainLayout from "../components/Layouts/MainLayout";
import bills from "../data/bills";
import expensesBreakdowns from "../data/expense"; // Pastikan file ini ada dan benar
import transactions from "../data/transaction";

const DashboardPage = () => {
  const tabs = ["A11", "Revenue", "Expense"];

  const [activateTab, setActivateTab] = useState("A11");
  // Render kartu untuk setiap bill
  const billCard = bills.map((bill) => (
    <div key={bill.id} className="lg:flex justify-between pt-3 pb-3">
      <div className="flex">
        <div className="bg-special-bg me-3 px-4 rounded-lg flex place-content-center flex-col">
          <span className="text-xs">{bill.month}</span>
          <span className="text-2xl font-bold">{bill.date}</span>
        </div>
        <div>
          <img className="h-6" src={`/images/${bill.logo}`} alt={bill.name} />
          <span className="font-bold">{bill.name}</span>
          <br />
          <span className="text-xs">Last Charge - {bill.lastCharge}</span>
        </div>
      </div>
      <div className="flex place-content-center flex-col">
        <span className="p-2 border rounded-lg font-bold text-center">
          ${bill.amount}
        </span>
      </div>
    </div>
  ));

  // Render kartu untuk setiap expense
  const expenseCard = expensesBreakdowns.map((expensesBreakdown) => (
    <div key={expensesBreakdown.id} className="flex pb-4 justify-between">
      <div className="flex">
        <div className="bg-special-bg px-3 rounded-lg flex flex-col place-content-center">
          {expensesBreakdown.icon}
        </div>
        <div className="ms-4">
          <span className="text-gray-02">{expensesBreakdown.category}</span>
          <br />
          <span className="font-bold text-lg">${expensesBreakdown.amount}</span>
          <div className="flex">
            <span className="text-gray-02">
              {expensesBreakdown.percentage}%*
            </span>{" "}
            {expensesBreakdown.arrow}
          </div>
        </div>
      </div>
      <div className="flex place-content-center flex-col me-8">
      </div>
    </div>
  ));

 const transactionCard = transactions.map((transaction) => (
    <div key={transaction.id} className="flex justify-between my-6">
      <div className="flex">
        <div className="bg-special-bg px-3 rounded-lg flex flex-col place-content-center">
          {transaction.icon}
        </div>
        <div className="ms-4">
          <span className="text-xl font-bold">
            {transaction.transactionName}
          </span>
          <br />
          <span className="text-gray-02">{transaction.shopName}</span>
        </div>
      </div>
      <div className="text-right">
        <span className="text-xl font-bold text-gray-02">
          ${transaction.amount}
        </span>
        <br />
        <span className="text-gray-02">{transaction.date}</span>
      </div>
    </div>
  ));
  return (
    <MainLayout type="dashboard">
      {/* Konten atas */}
      <div className="md:grid md:grid-cols-3 md:gap-x-6">
        <Card title="Total Balance" />
        <Card
          title="Goals"
          desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam dolore sapiente suscipit nam, vel officia ipsam praesentium earum unde provident nisi corrupti sit? Officia minima maxime magni quaerat id exercitationem."
        />
        <Card
          title="Upcoming Bill"
          desc={<div className="h-full flex flex-col justify-around">{billCard}</div>}
        />
       <Card
        variant="md:col-span-1 md:row-span-2"
        title="Recent Transaction"
        desc={
          <div>
            <div className="mb-4">
              {tabs.map((tab) => (
                <button key={tab} value={tab}>
                  {tab}
                </button>
              ))}
            </div>
            {transactionCard}
          </div>
        }
        />
        <Card variant="md:col-span-2" title="Statistics" />
        <Card
          variant="md:col-span-2"
          title="Expenses Breakdown"
          desc={
            <div className="h-full md:grid md:grid-cols-3 gap-4">{expenseCard}</div>
          }
        />
      </div>
      {/* Konten bawah */}
    </MainLayout>
  );
};

export default DashboardPage;
