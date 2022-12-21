import { HomeContainer, Product } from "../styles/pages/home";

import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';

import Image from "next/image";

import Shirt1 from 'src/assets/tshirt.png';
import Shirt2 from 'src/assets/tshirt1.png';
import Shirt3 from 'src/assets/tshirt2.png';
import Shirt4 from 'src/assets/tshirt3.png';
import { stripe } from "../lib/stripe";
import Stripe from "stripe"
import { GetServerSideProps } from "next";

interface HomeProps {
  products: {
    id: string;
    name: string;
    imageUrl: string;
    price: number
  }[]
}

export default function Home({ products }:HomeProps) {
  
  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 3,
      spacing: 48,
    },
  })
  
  return (
    <HomeContainer ref={sliderRef} className="keen-slider">
      {products.map(product => {
        return (
          <Product key={product.id}className='keen-slider__slide'>
          <Image src={Shirt1} width={520} height={480} alt='' />
          <footer>
            <strong>{product.name}</strong>
            <span>{product.price}</span>
          </footer>
        </Product>
         )
      })}
    
    </HomeContainer>
  )
}

export const getServerSideProps:GetServerSideProps= async () => {
  const response = await stripe.products.list({
    expand: ['data.default_price']
  })
 
  
  
  const products = response.data.map(product => {
    const price = product.default_price as Stripe.Price
    
    return {
      id: product.id,
      name:product.name,
      imageUrl: product.images[0],
      url: product.url,
      price: price.unit_amount! / 100,
    }
  })

  console.log(response.data);

  return {
    props: {
      products,
    }
  }
}