  "use server"
import { useChargesStore } from "@/zustan/charges-store";
import { revalidatePath } from "next/cache";

const calculateCharges = async (formData: FormData) => {
  
    const sourceTelco = formData.get("sourceTelco")
    const destinationTelco = formData.get("destinationTelco")
    const amount = Number(formData.get("amount"))
    let charges = 0;
  
    if (sourceTelco == "Telecel" && destinationTelco == "Telecel") {
      if (amount <= 100) {
        charges = 0;
      } else if (amount <= 1000) {
        charges = amount * 0.015;
      } else {
        charges = 5;
      }
    } else if (sourceTelco == "AT" && destinationTelco == "AT") {
      let charges = 0;
      if (amount <= 100) {
        charges = 0;
      } else if (amount <= 1000) {
        charges = amount * 0.015;
      } else {
        charges = 5;
      }
    }
    else if (sourceTelco == "MTN" && destinationTelco == "MTN") {
       charges = amount <= 50 ? amount * 0.015 : amount * 0.02;
    
    } else if (sourceTelco == "MTN" && destinationTelco == "AT") {
       charges =amount * 0.025;
    }
    else if (sourceTelco == "MTN" && destinationTelco == "Telecel") {
       charges =amount * 0.025;
    }
    else if (sourceTelco == "Telecel" && destinationTelco == "MTN") {
       charges =amount * 0.025;
    }
    else if (sourceTelco == "Telecel" && destinationTelco == "AT") {
       charges =amount * 0.025;
    }
    else if (sourceTelco == "AT" && destinationTelco == "MTN") {
       charges =amount * 0.025;
    }
    else if (sourceTelco == "AT" && destinationTelco == "Telecel") {
       charges =amount * 0.025;
    }
   
    useChargesStore.getState().setAmount(amount);
    useChargesStore.getState().setCharges(charges);
  
    revalidatePath("/");
  }
  
  export { calculateCharges };