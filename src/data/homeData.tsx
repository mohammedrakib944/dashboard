import { BsFillPeopleFill } from "react-icons/bs";
import { FaWallet } from "react-icons/fa";
import { FaMoneyBillWave } from "react-icons/fa";
import { MdSavings } from "react-icons/md";

export const dashboardData = [
  {
    id: 2,
    title: "Total User",
    value: "250",
    icon: <BsFillPeopleFill />,
  },
  {
    id: 1,
    title: "Total Earnings",
    value: "$2913",
    icon: <FaMoneyBillWave />,
  },
  {
    id: 3,
    title: "Total Profit",
    value: "$600",
    icon: <FaWallet />,
  },
  {
    id: 4,
    title: "Total Savings",
    value: "$300",
    icon: <MdSavings />,
  },
];
