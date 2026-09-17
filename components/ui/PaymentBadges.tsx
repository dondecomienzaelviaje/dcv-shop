import {
    FaCcVisa,
    FaCcMastercard,
    FaCcAmex,
    FaCcDinersClub,
    FaCcPaypal,
  } from "react-icons/fa";
  
  type Props = {
    className?: string;
  };
  
  export default function PaymentBadges({ className = "" }: Props) {
    return (
      <div
        className={`flex items-center gap-2 text-neutral-500 ${className}`}
        aria-label="Métodos de pago aceptados"
      >
        <FaCcVisa size={28} />
        <FaCcMastercard size={28} />
        <FaCcAmex size={28} />
        <FaCcDinersClub size={28} />
        <FaCcPaypal size={28} />
      </div>
    );
  }