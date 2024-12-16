import { Top } from "./components/top";
import { Middle } from "./components/middle";
import { Navbar } from "./components/navbar";
import { Header } from "./components/header";
import { CompanyLogo } from "./components/companylogo";
import {Featured} from "./components/featured"
import { Topcategories } from "./components/topcategories";
import { Hot } from "./components/Hot";
import { Ourproduct } from "./components/ourproducts";
import { Footer } from "./components/footer";
import { Frame } from "./components/frame";


export default function Home() {
  return (
    <div>
      <Top/>
      <Middle/>
      <Navbar/>
      <Header/>
      <CompanyLogo />
      <Featured/>
      <Topcategories/>
      <Hot/>
      <Ourproduct/>
      <Footer/>
      <Frame/>
      
      
    </div>
  );
}
