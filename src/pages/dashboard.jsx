import { useContext, useEffect, useState } from "react";
import { ColorModeContext } from "../context/ColorModeContext"; // Import Context
import MainLayout from "../components/Layouts/MainLayout";
import CardBalance from "../components/Fragments/dashboard/CardBalance";
import CardGoal from "../components/Fragments/dashboard/CardGoal";
import CardBill from "../components/Fragments/dashboard/CardBill";
import CardTransaction from "../components/Fragments/dashboard/CardTransaction";
import CardStatistic from "../components/Fragments/dashboard/CardStatistic";
import CardExpenseBreakdown from "../components/Fragments/dashboard/CardExpenseBreakdown";
import axios from "axios"; // Import axios untuk fetch data

const DashboardPage = () => {
  const { isDarkMode } = useContext(ColorModeContext); // Gunakan Dark Mode context
  const [bills, setBills] = useState([]); // State untuk menyimpan data bills

  // Fungsi untuk fetch data bills dari backend
  const fetchBills = async () => {
    const token = localStorage.getItem("refreshToken"); // Ambil token dari localStorage
    try {
      const response = await axios.get(
        "https://jwt-auth-eight-neon.vercel.app/bills",
        {
          headers: {
            Authorization: `Bearer ${token}`, // Sertakan token dalam header
          },
        }
      );

      // Validasi data bills
      const validBills = response.data.data.map(bill => ({
        ...bill,
        // Misalkan data yang perlu dicek adalah nilai tagihan (misalnya amount)
        amount: isNaN(bill.amount) ? 0 : bill.amount,
      }));

      setBills(validBills); // Simpan data bills yang sudah divalidasi ke state
    } catch (error) {
      console.error("Error fetching bills:", error.response || error.message); // Log error jika ada
    }
  };

  // Panggil fetchBills saat komponen di-render
  useEffect(() => {
    fetchBills(); // Ambil data bills hanya saat pertama kali komponen di-mount
  }, []); // Dependency array kosong: hanya dipanggil sekali

  return (
    <MainLayout type="dashboard">
      <div
        className={`min-h-screen p-4 ${
          isDarkMode ? "bg-special-mainBgDark text-white" : "bg-special-mainBg text-black"
        }`}
      >
        {/* top content start */}
        <div className="md:grid md:grid-cols-3 md:gap-x-6">
          <CardBalance />
          <CardGoal />
          <CardBill bills={bills} /> {/* Kirim data bills ke CardBill */}
          <CardTransaction />
          <CardStatistic />
          <CardExpenseBreakdown />
        </div>
        {/* bottom content end */}
      </div>
    </MainLayout>
  );
};

export default DashboardPage;
