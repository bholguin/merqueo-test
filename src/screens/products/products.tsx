
import { useProducts } from "./hook"
import { FC } from "react"
import Header from "components/Header"
import CantButton from "components/CantButton"
import Card from "components/Card"
import useUtils from "helpers/utils"
import { StyledContainer, StyledPriceProduct, StyledNameProduct, StyledImgProduct, StyledButtonProduct } from './products.styles'
import { IProduct } from "models/interfaces/product"

const Products: FC = (): JSX.Element => {
    const { products, addProduct, lessProduct } = useProducts()
    const { formatter } = useUtils()
    return (
        <>
            <Header />
            <StyledContainer>
                {products.map((item: IProduct, index: number) => {
                    return (
                        <Card key={index}>
                            <StyledImgProduct src={item.attributes.image_medium_url} alt={item.attributes.name} />
                            <StyledNameProduct> {item.attributes.name}</StyledNameProduct>
                            <StyledPriceProduct> {formatter.format(item.attributes.price)}</StyledPriceProduct>
                            {item.cant_selected && item.cant_selected > 0
                                ? <CantButton onAdd={() => addProduct(item)} onLess={() => lessProduct(item)}>{item.cant_selected}</CantButton>
                                : <StyledButtonProduct onClick={() => addProduct(item)}>Comprar</StyledButtonProduct>
                            }
                        </Card>
                    )
                })}
            </StyledContainer>
        </>

    )
}


export default Products