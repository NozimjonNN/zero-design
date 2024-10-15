import logo from '../img/logo.png'
import l1 from '../img/L1.png'
import l2 from '../img/L2.png'
import Image from 'next/image'

export default function Navbar() {
    return(
        <>
            <nav className="flex p-[30px] justify-between">
                <div className='flex items-center justify-center gap-[20px]'>
                    <Image src={ logo } width='137px' h='64px'/>
                    <ul className='flex gap-[15px]'>
                        <li><a href="" className='text-[20px] hover:opacity-[0.6] duration-[0.5s]'>Landing</a></li>
                        <li><a href="" className='text-[20px] hover:opacity-[0.6] duration-[0.5s]'>Company</a></li>
                        <li><a href="" className='text-[20px] hover:opacity-[0.6] duration-[0.5s]'>CMS Pages</a></li>
                        <li><a href="" className='text-[20px] hover:opacity-[0.6] duration-[0.5s]'>Utility</a></li>
                    </ul>
                </div>
                <div className='flex justify-center items-center  gap-[30px]'>
                    <button className='hover:bg-white hover:text-black duration-[0.5s] border-black border-[1px] py-[10px] px-[30px] bg-black text-white flex justify-center items-center'><a href="">$129 Buy Now</a></button>
                    <a href=''><Image src={ l1 } /></a>
                    <a href=''><Image src={ l2 } /></a>
                </div>
            </nav>
        </>
    )
}
