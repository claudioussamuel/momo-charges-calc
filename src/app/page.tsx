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
        <h1 className="font-bold text-2xl text-black">Momo Charges Calculator</h1>
        </div>
          <form action={calculateCharges} className="mt-6 flex flex-col h-full text-black">
          <input
              type="number"
              name="amount"
              placeholder="Enter amount"
              className="p-2 border rounded-md h-14 w-full mb-4 text-black"
              required
            />
          
            <SelectionDropdown telcos={telcos} label="From" name="sourceTelco" required />
            
            <SelectionDropdown telcos={telcos} label="To" name="destinationTelco" required />
          
            <div className="lg:mt-auto lg:mb-16">
            <Button actions="Calculating..." color="warning" type="submit" >Calculate Charges</Button>
          
            </div>
          </form>
     

       </div>
       
       <Results results={useChargesStore.getState()} />
      </div>
    </div>
  );
}
