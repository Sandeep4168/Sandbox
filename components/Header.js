
import Image from "next/image"
import Head from "next/head"
import HeaderItem from "./HeaderItem"
import {
    BadgeCheckIcon,
    CollectionIcon,
    HomeIcon,
    LightningBoltIcon,
    SearchIcon,
    UserIcon
} from "@heroicons/react/outline"
const Header = () => {
  return (
    <header className="flex flex-col sm:flex-row m-5 justify-between items-center h-auto">
        <div className="flex flex-grow max-w-2xl">
            <HeaderItem title={"HOME"} Icon={HomeIcon}/>
            <HeaderItem title={"TRENDING"} Icon={LightningBoltIcon}/>
            <HeaderItem title={"VERIFIED"} Icon={BadgeCheckIcon}/>
            <HeaderItem title={"COLLECTIONS"} Icon={CollectionIcon}/>
            <HeaderItem title={"SEARCH"} Icon={SearchIcon}/>
            <HeaderItem title={"ACCOUNT"} Icon={UserIcon}/>

        </div>
       
        {/* <Image 
        className="object-contain" alt=" "
        src="https://links.papareact.com/ua6" width={200} height={100}/> */}

        <div>
          <h1 
          className="tracking-wide text-3xl text-white mr-20 font-montserrat transition cursor-pointer 
          duration-100 transform hover:scale-125"
          > S A N D B O X</h1>
        </div>
    
    </header>
  )
}

export default Header