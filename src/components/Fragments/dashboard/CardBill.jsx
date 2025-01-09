import { useEffect, useState } from "react";
import bills from "../../../data/bills"; // Data statis untuk fallback
import Card from "../../Elements/Card";

const CardBill = () => {
    const [loading, setLoading] = useState(true); // State untuk loader
    const [billData, setBillData] = useState([]); // State untuk data bills

    // Simulasi fetch data dari backend
    const fetchBills = async () => {
        setLoading(true);
        try {
            const response = await new Promise((resolve) =>
                setTimeout(() => resolve({ data: bills }), 1500) // Simulasi delay fetch
            );
            setBillData(response.data); // Set data dari backend
        } catch (error) {
            console.error("Error fetching bills:", error);
            setBillData(bills); // Gunakan data fallback jika gagal
        } finally {
            setLoading(false); // Matikan loader
        }
    };

    useEffect(() => {
        fetchBills(); // Panggil fetch data saat komponen di-mount
    }, []);

    const billCard = billData.map((bill) => (
        <div key={bill.id} className="lg:flex justify-between pt-3 pb-3">
            <div className="flex">
                <div className="bg-special-bg me-3 px-4 rounded-lg flex place-content-center flex-col">
                    <span className="text-xs">{bill.month}</span>
                    <span className="text-2xl font-bold">{bill.date}</span>
                </div>
                <div className="">
                    <img
                        className="h-6"
                        src={`/images/${bill.logo}`}
                        alt={`${bill.name} logo`}
                        onError={(e) => (e.target.src = "/images/placeholder.png")} // Placeholder jika gambar gagal dimuat
                    />
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

    return (
        <Card
            title="Upcoming Bill"
            desc={
                <div className="h-full flex flex-col justify-around">
                    {loading ? ( // Tampilkan loader jika loading
                        <div className="flex justify-center items-center h-full">
                            <div className="loader"></div> {/* Loader animation */}
                        </div>
                    ) : (
                        billCard // Tampilkan data jika loading selesai
                    )}
                </div>
            }
        />
    );
};

export default CardBill;