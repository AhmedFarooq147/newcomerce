import { FaShoppingCart } from "react-icons/fa";
import { TbCircleNumber2Filled } from "react-icons/tb"
import { GiSofa } from "react-icons/gi"

export function Middle(){
    return(
        <div className="h-[84px] bg-[#F0F2F3] flex justify-between pt-[11px] pr-[16px] rounded-lg items-center">
            <div className="flex items-center gap-[4.5px]"><GiSofa className="text-[#029FAE] text-[40px]"/> <span className="font-medium text-[26px] text-[#272343] ">Comforty</span></div>
           <div className="h-[44px] bg-white  w-[120px] flex justify-evenly items-center rounded-md">
            <FaShoppingCart className="h-22px"/>
            <span className="text-[12px] font-medium">Cart</span>
            <TbCircleNumber2Filled className="h-22px text-[#029FAE] text-[12px]"/>
           
           </div>
        </div>
    )
}