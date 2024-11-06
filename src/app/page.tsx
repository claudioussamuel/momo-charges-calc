import Button from "@/components/button";
import Results from "@/components/resultsComponents";
import SelectionDropdown from "@/components/selectionDropdown";
import { Telco } from "@/utils/interfaces";
import { calculateCharges } from "@/utils/actions";
import { useChargesStore } from "@/zustan/charges-store";

const telcosUrl = "https://telcos-five.vercel.app/api/telcos";

export default async function Home() {
  const res = await fetch(telcosUrl);
  const telcos: Telco[] = await res.json();

  return (
    <div className="bg-slate-100 w-screen min-h-screen flex items-center justify-center">
      <div className="bg-white grid grid-cols-1 lg:grid-cols-2 rounded-xl lg:w-2/3 lg:m-4 m-2">
       <div className="lg:py-6 lg:px-8 py-4 px-4">
       <div className="flex justify-between items-center ">
        <h1 className="font-bold text-2xl">Momo Charges Calculator</h1>
        </div>
          <form action={calculateCharges} className="mt-6 flex flex-col h-full">
          <input
              type="number"
              name="amount"
              placeholder="Enter amount"
              className="p-2 border rounded-md h-14 w-full mb-4"
              required
            />
          
            <SelectionDropdown telcos={telcos} label="From" name="sourceTelco" required />
            
            <SelectionDropdown telcos={telcos} label="To" name="destinationTelco" required />
          
            
            <Button color="warning" type="submit" >Calculate Charges</Button>
          </form>
     

       </div>
       
       <Results results={useChargesStore.getState()} />
      </div>
    </div>
  );
}
