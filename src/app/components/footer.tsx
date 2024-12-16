import { GiSofa } from "react-icons/gi"
import { FaFacebook } from "react-icons/fa"
import { FaTwitter } from "react-icons/fa"
import { FaInstagram } from "react-icons/fa"
import { FaPinterest } from "react-icons/fa"
import { FaYoutube } from "react-icons/fa"

export function Footer(){
    return(
        <div className="flex h-[418px] mt-[136px] gap-[120px] border-solid border-2 border-[#E1E3E5]">
            <div className="mt-[80px] ml-16 w-[350px]">
                <div className="flex items-center gap-[4.5px]"><GiSofa className="text-[#029FAE] text-[40px]"/> <span className="font-medium text-[26px] text-[#272343] ">Comforty</span></div>
                <p className="mt-[24px] text-[16px] opacity-[60%] leading-[24px] text-[#272343]">
                Vivamus tristique odio sit amet velit semper, eu posuere turpis interdum.
                Cras egestas purus 
                </p>
                <div className="mt-[24px] flex items-center gap-3">
                    <FaFacebook className="text-[25px] text-[#029FAE] w-[38px] "/>
                    <FaTwitter className=" text-[25px] text-[#636270]  w-[38px]"/>
                    <FaInstagram className=" text-[25px] text-[#636270]  w-[38px]"/>
                    <FaPinterest className=" text-[25px] text-[#636270]  w-[38px]"/>
                    <FaYoutube className=" text-[25px] text-[#636270]  w-[38px]"/>



                </div>

            </div>
            <div className="mt-[80px]">
                <h1 className="text-[14px] font-medium text-[#9A9CAA]">CATEGORY</h1>
                <h1 className="text-[16px] mt-[20px]">Sofa</h1>
                <h1 className="text-[16px] mt-[12px]">Armchair</h1>
                <h1 className="text-[16px] mt-[12px]">Wing Chair</h1>
                <h1 className="text-[16px] mt-[12px]">Desk Chair</h1>
                <h1 className="text-[16px] mt-[12px]">Wooden Chair</h1>
                <h1 className="text-[16px] mt-[12px]">Park Bench</h1>
            </div>
            <div className="mt-[80px]">
                <h1 className="text-[14px] font-medium text-[#9A9CAA]">SUPPORT</h1>
                <h1 className="text-[16px] mt-[20px]">Help & Support</h1>
                <h1 className="text-[16px] mt-[12px]">Tearems & Support</h1>
                <h1 className="text-[16px] mt-[12px]">Privacy & Policy</h1>
                <h1 className="text-[16px] mt-[12px]">Help</h1>
            </div>
            <div className="mt-[80px]">
                <h1 className="text-[14px] font-medium text-[#9A9CAA]">NEWSLETTER</h1>
                <input className="rounded-lg pl-4  border-2 border-solid border-[E1E3E5] h-[46px] w-[285px] mt[20px] "  type="email" name="" id="" placeholder="Your email" /> <button className="ml-[12px] mt-[20px] h-[46px] w-[127px] rounded-lg items-center text-white bg-[#029FAE]">Subscribe</button>
                <p className="mt-[15px] opacity-[60%] w-[424px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tincidunt erat enim.</p>
                
            </div>
                

        </div>
    )
}