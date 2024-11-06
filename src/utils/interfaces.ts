
export interface Telco {
    name: string;
    logo: string;
  }
  
 export interface InputButtonProps {
    label?: string;
    id: string;
    placeholder?: string;
    onChange?: (value: string) => void;
    value?: string | number;
    type?: string;
  }

  export interface TransactionResults {
    charges?: number;
    totalAmount?: number;
  }
  export interface ButtonProps {
    children: React.ReactNode
    onClick?: () => void
    color?: "primary" | "secondary" | "success" | "warning" | "danger"
    variant?: "solid" | "bordered" | "light" | "flat" | "faded" | "shadow"
    size?: "sm" | "md" | "lg"
    type?: "button" | "submit" | "reset"
  }