import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import imgZone from '../img/imgZone.png'
import Image from "next/image"
import i1 from '../img/i1.png'
import i2 from '../img/i2.png'
import i3 from '../img/i3.png'
import i4 from '../img/i4.png'
import pages from '../img/pages.png'
import im1 from '../img/pages/IMAGE.png'
import im2 from '../img/pages/IMAGE-1.png'
import im3 from '../img/pages/IMAGE-2.png'
import im4 from '../img/pages/IMAGE-3.png'
import im5 from '../img/pages/IMAGE-4.png'
import im6 from '../img/pages/IMAGE-5.png'
import im7 from '../img/pages/IMAGE-6.png'
import im8 from '../img/pages/IMAGE-7.png'
import im9 from '../img/pages/IMAGE-8.png'
import im10 from '../img/pages/IMAGE-9.png'
import im11 from '../img/pages/IMAGE-10.png'
import im12 from '../img/pages/IMAGE-11.png'
import im13 from '../img/pages/IMAGE-12.png'
import im14 from '../img/pages/IMAGE-13.png'
import im15 from '../img/pages/IMAGE-14.png'
import im16 from '../img/pages/IMAGE-15.png'
import im17 from '../img/pages/IMAGE-16.png'
import im18 from '../img/pages/IMAGE-17.png'
import im19 from '../img/pages/IMAGE-18.png'
import im20 from '../img/pages/IMAGE-19.png'
import im21 from '../img/pages/IMAGE-20.png'
import im22 from '../img/pages/IMAGE-21.png'
import im23 from '../img/pages/IMAGE-22.png'
import im24 from '../img/pages/IMAGE-23.png'
import im25 from '../img/pages/IMAGE-24.png'
import im26 from '../img/pages/IMAGE-25.png'
import im27 from '../img/pages/IMAGE-26.png'

export default function Home() {
    return(
      <>
        <Navbar />
        <div className="p-[50px]">
          <div className="flex justify-between">
            <div className="flex justify-center p-[50px] flex-col">
                <div className="bg-[#E2B013] w-[150px] uppercase text-white p-[5px]">Design addicted</div>
                <h1 className="text-[96px]">A stylish UI Kit</h1>
                <h3 className="text-[50px]">for all web creatives</h3>
                <h5 className="text-[26px] opacity-[0.8]">Zero is a Webflow Ecommerce and CMS UI kit including several carefully designed page layouts.</h5>
                <br /><br />
                <div className="flex gap-[100px]">
                  <div className="flex justify-center items-center gap-[5px] flex-col">
                    <Image src={ i1 } />
                    <h1 className="uppercase text-[10px] opacity-[0.8]">smooth</h1>
                    <h1 className="uppercase text-[10px] opacity-[0.8]">interactions</h1>
                  </div>
                  <div className="flex justify-center items-center gap-[5px] flex-col">
                    <Image src={ i2 } />
                    <h1 className="uppercase text-[10px] opacity-[0.8]">smooth</h1>
                    <h1 className="uppercase text-[10px] opacity-[0.8]">interactions</h1>
                  </div>
                  <div className="flex justify-center items-center gap-[5px] flex-col">
                    <Image src={ i3 } />
                    <h1 className="uppercase text-[10px] opacity-[0.8]">smooth</h1>
                    <h1 className="uppercase text-[10px] opacity-[0.8]">interactions</h1>
                  </div>
                  <div className="flex justify-center items-center gap-[5px] flex-col">
                    <Image src={ i4 } />
                    <h1 className="uppercase text-[10px] opacity-[0.8]">smooth</h1>
                    <h1 className="uppercase text-[10px] opacity-[0.8]">interactions</h1>
                  </div>
                </div>
            </div>
            <div>
              <Image src={ imgZone } className='w-[728px]' />
            </div>
          </div>
          <div className="flex justify-between mt-[150px]">
            <div className="w-[50%]"><Image src={ pages } className='h-[550px]' /></div>
            <div className="w-[50%]">
              <h1 className="text-[96px]">Zero Design</h1>
              <h3 className="text-[22px]">Includes a total of 10 static pages, divided like this: 4 Landing pages, 2 About pages, 2 Contact page, 1 Team page, 1 FAQ page. In addition to these, there are Webflow CMS driven pages: Blog (in 2 variations), Shop (in 2 variations), Works and Careers. All with their respective single pages!</h3>
              <div className="flex mt-[10px] gap-[5px]"><button className='hover:bg-white hover:text-black duration-[0.5s] border-black border-[1px] py-[10px] px-[30px] bg-black text-white flex justify-center items-center'><a href="">4 LANDING</a></button><button className='hover:bg-white hover:text-black duration-[0.5s] border-black border-[1px] py-[10px] px-[30px] bg-black text-white flex justify-center items-center'><a href="">2 ABOUT</a></button><button className='hover:bg-white hover:text-black duration-[0.5s] border-black border-[1px] py-[10px] px-[30px] bg-black text-white flex justify-center items-center'><a href="">3 CONTACT</a></button></div>
              <div className="flex mt-[10px] gap-[5px]"><button className='hover:bg-white hover:text-black duration-[0.5s] border-black border-[1px] py-[10px] px-[30px] bg-black text-white flex justify-center items-center'><a href="">3 BLOG</a></button><button className='hover:bg-white hover:text-black duration-[0.5s] border-black border-[1px] py-[10px] px-[30px] bg-black text-white flex justify-center items-center'><a href="">2 SHOP</a></button></div>
              <div className="flex mt-[10px] gap-[5px]"><button className='hover:bg-white hover:text-black duration-[0.5s] border-black border-[1px] py-[10px] px-[30px] bg-black text-white flex justify-center items-center'><a href="">WORKS</a></button><button className='hover:bg-white hover:text-black duration-[0.5s] border-black border-[1px] py-[10px] px-[30px] bg-black text-white flex justify-center items-center'><a href="">TEAM</a></button><button className='hover:bg-white hover:text-black duration-[0.5s] border-black border-[1px] py-[10px] px-[30px] bg-black text-white flex justify-center items-center'><a href="">CAREERS</a></button></div>
              <div className="flex mt-[10px] gap-[5px]"><button className='hover:bg-white hover:text-black duration-[0.5s] border-black border-[1px] py-[10px] px-[30px] bg-black text-white flex justify-center items-center'><a href="">FORMS</a></button><button className='hover:bg-white hover:text-black duration-[0.5s] border-black border-[1px] py-[10px] px-[30px] bg-black text-white flex justify-center items-center'><a href="">UTILITY</a></button></div>
            </div>
          </div>
          <div>
            <h1 className="bg-black text-white p-[10px] w-[300px] text-[36px] mt-[80px]">LANDING PAGES</h1>
            <div className="flex justify-between mt-[10px]">
              <div className="W-[50%] rounded-sm p-[20px] bg-gray-300 flex flex-col justify-center items-center"><Image src={ im1 } />LANDING 1</div>
              <div className="W-[50%] rounded-sm p-[20px] bg-gray-300 flex flex-col justify-center items-center"><Image src={ im2 } />LANDING 2</div>
            </div>
            <div className="flex justify-between mt-[10px]">
              <div className="W-[50%] rounded-sm p-[20px] bg-gray-300 flex flex-col justify-center items-center"><Image src={ im3 } />LANDING 3</div>
              <div className="W-[50%] rounded-sm p-[20px] bg-gray-300 flex flex-col justify-center items-center"><Image src={ im4 } />LANDING 4</div>
            </div>
          </div>
          <div>
            <h1 className="bg-black text-white p-[10px] w-[350px] text-[36px] mt-[80px]">COMPONY PAGES</h1>
            <div className="flex justify-between mt-[10px]">
              <div className="W-[50%] rounded-sm p-[20px] bg-gray-300 flex flex-col justify-center items-center"><Image src={ im5 } />ABOUT 1</div>
              <div className="W-[50%] rounded-sm p-[20px] bg-gray-300 flex flex-col justify-center items-center"><Image src={ im6 } />ABOUT 2</div>
              <div className="W-[50%] rounded-sm p-[20px] bg-gray-300 flex flex-col justify-center items-center"><Image src={ im7 } />CONTACT 1</div>
            </div>
            <div className="flex justify-between mt-[10px] gap-[10px]">
              <div className="W-[50%] rounded-sm p-[20px] bg-gray-300 flex flex-col justify-center items-center"><Image src={ im8 } />CONTACT 2</div>
              <div className="W-[50%] rounded-sm p-[20px] bg-gray-300 flex flex-col justify-center items-center"><Image src={ im9 } />CONTACT 3</div>
              <div className="W-[50%] rounded-sm p-[20px] bg-gray-300 flex flex-col justify-center items-center"><Image src={ im10 } />TEAM</div>
            </div>
            <div className="flex justify-between mt-[10px] gap-[10px]">
              <div className="rounded-sm p-[20px] bg-gray-300 flex flex-col justify-center items-center"><Image src={ im11 } />FAQ</div>
            </div>
          </div>
          <div>
            <h1 className="bg-black text-white p-[10px] w-[250px] text-[36px] mt-[80px]">CMS PAGES</h1>
            <div className="flex justify-between mt-[10px]">
              <div className="W-[50%] rounded-sm p-[20px] bg-gray-300 flex flex-col justify-center items-center"><Image src={ im12 } />WORKS</div>
              <div className="W-[50%] rounded-sm p-[20px] bg-gray-300 flex flex-col justify-center items-center"><Image src={ im13 } />BLOG 1</div>
            </div>
            <div className="flex justify-between mt-[10px]">
              <div className="W-[50%] rounded-sm p-[20px] bg-gray-300 flex flex-col justify-center items-center"><Image src={ im14 } />BLOG 2</div>
              <div className="W-[50%] rounded-sm p-[20px] bg-gray-300 flex flex-col justify-center items-center"><Image src={ im15 } />BLOG 3</div>
            </div>
            <div className="flex justify-between mt-[10px]">
              <div className="W-[50%] rounded-sm p-[20px] bg-gray-300 flex flex-col justify-center items-center"><Image src={ im16 } />SHOP 1</div>
              <div className="W-[50%] rounded-sm p-[20px] bg-gray-300 flex flex-col justify-center items-center"><Image src={ im17 } />SHOP 2</div>
            </div>
            <div className="flex justify-between mt-[10px]">
              <div className="W-[50%] rounded-sm p-[20px] bg-gray-300 flex flex-col justify-center items-center"><Image src={ im18 } />CAREERS</div>
              <div className="W-[50%] rounded-sm p-[20px] bg-gray-300 flex flex-col justify-center items-center"><Image src={ im19 } />SINGE PRODUCT PAGE</div>
            </div>
            <div className="flex justify-between mt-[10px]">
              <div className="W-[50%] rounded-sm p-[20px] bg-gray-300 flex flex-col justify-center items-center"><Image src={ im20 } />SINGLE POST PAGE</div>
              <div className="W-[50%] rounded-sm p-[20px] bg-gray-300 flex flex-col justify-center items-center"><Image src={ im21 } />SINGLE CAREERS PAGE</div>
            </div>
            <div className="flex justify-between mt-[10px]">
              <div className="W-[50%] rounded-sm p-[20px] bg-gray-300 flex flex-col justify-center items-center"><Image src={ im22 } />SINGLE WORK PAGE</div>
            </div>
          </div>
          <div>
            <h1 className="bg-black text-white p-[10px] w-[200px] text-[36px] mt-[80px]">UTILITY</h1>
            <div className="flex justify-between mt-[10px]">
              <div className="W-[50%] rounded-sm p-[20px] bg-gray-300 flex flex-col justify-center items-center"><Image src={ im23 } />COMING SOON</div>
              <div className="W-[50%] rounded-sm p-[20px] bg-gray-300 flex flex-col justify-center items-center"><Image src={ im24 } />404</div>
            </div>
            <div className="flex justify-between mt-[10px]">
              <div className="W-[50%] rounded-sm p-[20px] bg-gray-300 flex flex-col justify-center items-center"><Image src={ im25 } />PASSWORD</div>
              <div className="W-[50%] rounded-sm p-[20px] bg-gray-300 flex flex-col justify-center items-center"><Image src={ im26 } />PRIVACY POLICY</div>
            </div>
            <div className="flex justify-between mt-[10px]">
              <div className="W-[50%] rounded-sm p-[20px] bg-gray-300 flex flex-col justify-center items-center"><Image src={ im27 } />TERMS AND CONDITIONS</div>
            </div>
          </div>
        </div>
        <Footer />
      </>
    )
}
