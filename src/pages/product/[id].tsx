import { useRouter } from "next/router";
import { ImageContainer, ProductContainer, ProductDetails } from "../../styles/pages/product";

export default function Product() {
    const { query } = useRouter()

    return (
        <ProductContainer>
            <ImageContainer>

            </ImageContainer>

            <ProductDetails>
                <h1>Shirt X</h1>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                    Quis omnis fuga ab excepturi. Iste natus delectus dignissimos ad quod animi. 
                    Odio itaque inventore voluptatibus esse excepturi amet voluptates quia. 
                    Odit.</p>
                    <button>Comprar</button>
            </ProductDetails>
        </ProductContainer>
    )
}