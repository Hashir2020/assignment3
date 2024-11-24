import Navbar from "./component/navbar";
import Image from "next/image";
import Content from "@/app/images/Content.png"
import google from "@/app/images/google.png"
import Microsoft from "@/app/images/Microsoft.png"
import Slack from "@/app/images/Slack.png"
import Apple from "@/app/images/Apple.png"
import logo from "@/app/images/logo.png"


export default function Home(){
  return(
    <div>
       <Navbar/>

     {/*first portion start*/}

      <div className="h-[830px] w-[1920px] bg-blue-950 px-[220px] py-[140px] flex">
        <div className="h-[361px] w-[656px] ">
         <h2 className="text-[64px] leading-[72px] pt-[80px] font-arial font-bold text-white">Get More Done with whitepace</h2>
         <p className="font-normal leading-[32px] pt-6 pb-10 text-white">Project management software that enables your teams to collaborate, plan, analyze and manage everyday tasks</p>
        
         <button className="bg-blue-400 rounded-lg  h-[63px] w-[219px] p-[20px] gap-[10px] text-white ">Try white space free</button>
        </div>

        <div className="h-[549px] w-[824px] bg-blue-300 gap-1"></div>

      </div>

         {/*first portion end*/}



            {/*second portion start*/}
        

      <div className="w-[1920px] h-[700px] px-[220px] py-[140px] flex bg-white gap-7">
      <div className="h-[361px] w-[656px] ">
         <h2 className=" h-[174px] w-[552px] text-[64px] leading-[72px] pt-[80px] font-arial font-bold text-black">Project Management</h2>
         <p className="font-normal leading-[32px] pt-[70px] pb-10 text-black">Images, videos, PDFs and audio files are supported. Create math expressions and diagrams directly from the app. Take photos with the mobile app and save them to a note.</p>
        
         <button className="bg-blue-400 rounded-lg h-[63px] w-[200px] p-[20px] gap-[10px] text-white ">Get started</button>
        </div>
        <div className="h-[520px] w-[748px] bg-blue-400 gap-1"></div>
      </div>

    {/*second portion end*/}



      {/*third portion start*/}
      <div className="h-[900px] w-[1920px] gap-[100px] bg-white px-[220px] py-[140px]">
      <Image className="w-[1480px] h-[650px]" src={Content} alt=""/>
      </div>

 {/*third portion end*/}

  {/*forth portion start*/}





  <div className="w-[1920px] h-[700px] px-[220px] py-[100px] flex bg-blue-950 gap-[24px]">
      <div className="h-[361px] w-[656px] ">
         <h2 className="text-[64px] leading-[72px] pt-[80px] text-white font-arial font-bold">Use as Extension</h2>
         <p className="font-normal leading-[32px] pt-6 pb-10 text-white">Use the web clipper extension, available on Chrome and Firefox, to save web pages or take screenshots as notes.
         </p>
        
         <button className="bg-blue-400 rounded-lg h-[63px] w-[200px] p-[20px] gap-[10px] text-white ">Lets Go</button>
        </div>
        <div className="h-[520px] w-[748px] bg-blue-300 "></div>
      </div>
  {/*forth portion end*/}



    {/*fifth portion start*/}


    
  <div className="w-[1920px] h-[700px] px-[220px] py-[100px] flex bg-white gap-[40px]">
      
        <div className="h-[532px] w-[710px] bg-blue-300 "></div>
        <div className="h-[361px] w-[656px] ">
         <h2 className="text-[64px] leading-[72px] pt-[80px] text-black font-arial font-bold">Customise it
         to your needs</h2>
         <p className="font-normal leading-[32px] pt-6 pb-10 text-black">Customise the app with plugins, custom themes and multiple text editors (Rich Text or Markdown). Or create your own scripts and plugins using the Extension API.
         </p>
        
         <button className="bg-blue-400 rounded-lg h-[63px] w-[200px] p-[20px] gap-[10px] text-white ">Lets Go</button>
        </div>
      </div>


      {/*fifth portion end*/}



        {/*sixth portion start*/}

      <div className="h-[575px] w-[1920px] px-[220px] py-[140px] bg-blue-950 flex justify-center items-center text-[72px]">
          <div className="h-[294px] w-[1481px] text-center ">
        <div className="flex justify-center items-center">
        <h1 className=" text-white  font-arial font-bold">Your work, everywhere you are</h1>
        </div>
        <p className="text-[18px]  text-white  w-[1050px] h-[60px] font-normal pt-3 text-center mx-auto  ">Access your notes from your computer, phone or tablet by synchronising with various services, including whitepace, Dropbox and OneDrive. The app is available on Windows, macOS, Linux, Android and iOS. A terminal app is also available!</p> 
             <div className="pt-[10px] ">
        <button className=" h-[63px] leading-[23px] w-[195px] rounded-[8px] text-[18px] pl-[40px] text-white pr-[40px] pt-[20px] pb-[20px] bg-blue-400">Try Taskey</button>
             </div>
              </div>

              </div>
        {/*sixth portion end*/}


        {/*seven portion start*/}


        <div className="h-[540px] w-[1920px] bg-white px-[220px] py-[140px] gap-[100px] ">
          <h1 className=" text-black text-[72px] font-bold flex justify-center ">Our sponsors</h1>
          <div className="flex justify-between h-[71px] w-[1481px] gap pt-[90px]">
          <Image className="h-[68px] w-[56px] gap-1  " src={Apple} alt=""/>
          <Image className="h-[62px] w-[287px] gap-1 " src={Microsoft} alt=""/>
          <Image className="h-[71px] w-[280px] gap-1  " src={Slack} alt=""/>
          <Image className="h-[70px] w-[211px] gap-1 " src={google} alt=""/>
          </div>

        </div>
         {/*seven portion end*/}




          {/*footer portion start*/}



<footer>
  <div className="h-[461px] w-[1920px] bg-blue-950 px-[220px] py-[140px]">
  <div className=" flex justify-between gap-[100px]">
<div>
    <Image className="w-[191px] h-[34px] flex justify-between mt-2" src={logo} alt=""/>
    <p className=" leading-8 text-[19px] h-[120px] w-[240px] pt-6 text-white">whitepace was created for the new ways we live and work. We make a better workspace around the world</p>
</div>

<div className="leading-9">
  <li className="text-[18px] text-white flex font-bold">Products</li>
  <li className="text-[18px] text-white flex ">Overview</li>
  <li className="text-[18px] text-white flex ">Pricing</li>
  <li className="text-[18px] text-white flex ">customer services</li>
</div>



<div className="leading-9">
  <li className="text-[18px] text-white flex font-bold">Resources</li>
  <li className="text-[18px] text-white flex ">Blog</li>
  <li className="text-[18px] text-white flex ">Guides & tutorials</li>
  <li className="text-[18px] text-white flex ">Help center</li>
</div>

<div className="leading-9">
  <li className="text-[18px] text-white flex font-bold">Company</li>
  <li className="text-[18px] text-white flex ">About us</li>
  <li className="text-[18px] text-white flex ">Careers</li>
  <li className="text-[18px] text-white flex ">Media kit</li>
</div>

  </div>

  <div className="h-[0.5px] w-[1500px] bg-blue-900 mt-[90px] items-center"></div>
  <div id="last"  className="text-white font-normal">©2021 Whitepace LLC.</div>

  </div>



 

</footer>











      </div>
  )
}