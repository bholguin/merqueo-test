
import { useProducts } from "./hook"
import { FC } from "react"
import Header from "components/Header"
import { StyledContainer, StyledProduct, StyledPriceProduct, StyledNameProduct, StyledImgProduct, StyledButtonProduct } from './products.styles'

const Products: FC = (): JSX.Element => {
    const { products, formatter } = useProducts()

    return (
        <>
            <Header />
            <StyledContainer>
                {products.data && products.data.map((item: any, index: number) => {
                    return (
                        <StyledProduct key={index}>
                            <StyledImgProduct src={item.attributes.image_medium_url} alt={item.attributes.name} />
                            <StyledNameProduct> {item.attributes.name}</StyledNameProduct>
                            <StyledPriceProduct> {formatter.format(item.attributes.price)}</StyledPriceProduct>
                            <StyledButtonProduct onClick={() => { }}>Comprar</StyledButtonProduct>
                        </StyledProduct>
                    )
                })}
            </StyledContainer>
        </>

    )
}


export default Products