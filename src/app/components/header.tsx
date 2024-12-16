import { IoArrowForwardOutline } from "react-icons/io5"

export function Header(){
    return(
        <div className="bg-[#F0F2F3] h-[850px] rounded-b-[48px] grid grid-cols-2">
               <div className=" pt-[229px] pl-[70px]">
                <p className="font-normal text-[14px] text-[#272343] letter tracking-[2px]"> WELCOME TO CHAIRY</p>
                <h1 className="text-[#272343] text-[60px] w-[557px] font-bold mt-[24px]">Best Furniture Collection for your interior.</h1>
                <button className="text-white bg-[#029FAE] h-[52px] w-[171px] rounded-[8px] text-[16px] flex items-center justify-center mt-[49px]">Shop Now <IoArrowForwardOutline className="ml-[4px]"/></button>
               </div>
               <div>
                <img className="h-[584px] w-[434px] ml-[150px] mt-[140px]" src="https://s3-alpha-sig.figma.com/img/cdc7/113b/68039af7d7222a3d15eae2a39d068924?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=a2Q9gXzwFzLNrwzOi5AN2BwWlZvTaf4AKTYowK~0OTlrj5OnNdwg5-jEIJ4BIi9cBaEYI5Ho-B3F9IsUItUOacm6qqZAOPVqDXyXozI~3UOfFS7UYNPocRQf1y7Bl7MIBl7uGZMNTQ~oYZb3rIJHg7ZGX1fqI~wuUJ-Hnmc3szwckQBc~Ed7OIjVrw-kBNdps9LA~~ijxy-Ke5o2JAHMDjE8Q4co4~m~~lK8vidEdvg2oG252yi08ucrPx0P8ERr2XwlGsQh-74s8F-jvIpFFl170E~~pZYCra4CNH31UoFsl14q31gNMeGnVRfxBna-0is4iICuunZsRfeiRATuog__" alt="" />
               </div>
        </div>
    )
}