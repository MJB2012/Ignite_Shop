import { HomeContainer, Product } from "../styles/pages/home";

import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';

import Image from "next/image";

import Shirt1 from 'src/assets/tshirt.png';
import Shirt2 from 'src/assets/tshirt1.png';
import Shirt3 from 'src/assets/tshirt2.png';
import Shirt4 from 'src/assets/tshirt3.png';
import { stripe } from "../lib/stripe";
import { GetServerSideProps } from "next";

export default function Home() {
  
  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 3,
      spacing: 48,
    },
  })
  
  return (
    <HomeContainer ref={sliderRef} className="keen-slider">
     
      <Product className="keen-slider__slide">
        <Image src={Shirt1} alt="shirt" width={520} height={480}/>
        
        <footer>
          <strong>Shirt X</strong>
          <span>$30,00</span>
       
        </footer>
      </Product>
     
      <Product className="keen-slider__slide">
        <Image src={Shirt2} alt="shirt" width={520} height={480}/>
        
        <footer>
          <strong>Shirt Y</strong>
          <span>$30,00</span>
        
        </footer>
      </Product>

      <Product className="keen-slider__slide">
        <Image src={Shirt3} alt="shirt" width={520} height={480}/>
        
        <footer>
          <strong>Shirt Y</strong>
          <span>$30,00</span>
        
        </footer>
      </Product>

      <Product className="keen-slider__slide">
        <Image src={Shirt4} alt="shirt" width={520} height={480}/>
        
        <footer>
          <strong>Shirt Y</strong>
          <span>$30,00</span>
        
        </footer>
      </Product>
    </HomeContainer>
  )
}

export const getServerSideProps:GetServerSideProps= async () => {
  const response = await stripe.products.list()
 
  const products = response.data.map(product => {
    return {
      id: product.id,
      name:product.name,
      imageUrl: product.images
    }
  })

  console.log(response.data);

  return {
    props: {
      list: [1, 2, 3]
    }
  }
}