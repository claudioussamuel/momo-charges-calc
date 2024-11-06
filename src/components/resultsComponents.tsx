import { TransactionResults } from "@/utils/interfaces";
import EmptyIcon from "../../public/illustration-empty.svg";
import Image from "next/image";
import ModalClass from "./modal";



export default  function Results({ results }: { results: TransactionResults }) {

    return (
        <div className="bg-slate-900 rounded-r-xl rounded-es-[4rem]">
            {
                Object.keys(results).length && results.totalAmount !== 0 ? (
                    <div>
                     <div className="p-8">
                        <h2 className="font-bold text-white text-xl">
                            Your Charges
                        </h2>
                        <p className="text-slate-300 mt-4 text-sm">Your Results are shown below based on the details you provided, you can do recalculation or Join our  news letter</p>
                        <div className="rounded-md h-fit p-4 bg-slate-700 mt-4 border-t-2 border-yellow-500">
                            <p className="text-sm text-white"> Your charges are</p>
                            <p className="lg:text-6xl text-2xl text-yellow-500 font-bold mt-2 tracking-wide">GH₵{results.charges}</p>
                            <hr className="bg-slate-300 h-[2px] mt-6" />
                            <p className="text-sm text-white mt-6">The total amount you are sending is</p>
                            <p className="lg:text-xl text-lg text-white font-bold mt-2 text-xl tracking-wide">GH₵{results.totalAmount}</p>
                        </div>
                        <ModalClass />
                     </div>
                    </div>
                ) : (
                    <div className="flex flex-col justify-center items-center h-full py-6">
                     <Image src={EmptyIcon} alt="empty" />
                     <h2 className="font-bold text-white text-2xl">Results will appear here</h2>
                     <p className="text-white text-sm text-center px-6 mt-2">Please select a valid operator and amount to calculate charges</p>
                    </div>
                )
            }
        </div>
    )
}