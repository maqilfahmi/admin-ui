import accounts from "../../../data/accounts";
import Card from "../../Elements/Card";
import Stepper from "../../Elements/Stepper";

const CardBalance = () => {
    const balanceCard = accounts.map((account) => (<div key={account.id}>{account.bankName}</div>));

    return (
        <Card title="Total Balance" desc={<Stepper desc={balanceCard}/>} />
    )
}

export default CardBalance