import { HomeContainer, Product } from "../styles/pages/home";
import Image from "next/image";

import Shirt1 from 'src/assets/tshirt.png'
import Shirt2 from 'src/assets/tshirt1.png'


export default function Home() {
  return (
    <HomeContainer>
     
      <Product>
        <Image src={Shirt1} alt="shirt" width={520} height={480}/>
        
        <footer>
          <strong>Shirt X</strong>
          <span>$30,00</span>
       
        </footer>
      </Product>
     
      <Product>
        <Image src={Shirt2} alt="shirt" width={520} height={480}/>
        
        <footer>
          <strong>Shirt Y</strong>
          <span>$30,00</span>
        
        </footer>
      </Product>
    </HomeContainer>
  )
}
