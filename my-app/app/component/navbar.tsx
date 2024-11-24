import Image from "next/image";
import Logo from "@/app/images/Logo.png"


export default function Navbar(){
  return(
    <div className="h-[92px] w-[1920px] bg-blue-950 flex justify-between px-[220px] py-[16px] " >
      <div >
    <Image className="w-[191px] h-[34px] flex justify-between mt-2" src={Logo} alt=""/>
      </div>





     
    <div className="flex items-center justify-end  gap-[32px] w-[738px] h-[60px] text-white">
    <span>Products</span>
    <span>Solutions</span>
    <span>Resourses</span>
    <span>Pricing</span> 
      </div>
      <div className="h-[60px] w-[126px] flex">
          <button className=" bg-yellow-400 rounded text-black px-[40px] py-[16px] ">Login</button>
      </div>
      
      
      
      
      
      </div>

  )
}