
import { useProducts } from "./hook"
import { FC } from "react"
import Header from "components/Header"
import CantButton from "components/CantButton"
import Card from "components/Card"
import Button from "components/Button"
import useUtils from "helpers/utils"
import { IProduct } from "models/interfaces/product"
import {
    StyledContainer,
    StyledPriceProduct,
    StyledNameProduct,
    StyledImgProduct,
    StyledPriceOld
} from './products.styles'


const Products: FC = (): JSX.Element => {
    const { products, addProduct, lessProduct } = useProducts()
    const { formatter, validatePromoDate } = useUtils()
    return (
        <>
            <Header />
            <StyledContainer>
                {products.map((item: IProduct, index: number) => {
                    const price = validatePromoDate(item)
                    return (
                        <Card key={index}>
                            <StyledImgProduct src={item.attributes.image_medium_url} alt={item.attributes.name} />
                            <StyledNameProduct> {item.attributes.name}</StyledNameProduct>
                            {
                                price
                                    ? <>
                                        <StyledPriceOld> {formatter.format(item.attributes.price)}</StyledPriceOld>
                                        <StyledPriceProduct> {formatter.format(price)}</StyledPriceProduct>
                                    </>
                                    : <StyledPriceProduct> {formatter.format(item.attributes.price)}</StyledPriceProduct>
                            }

                            {item.cant_selected && item.cant_selected > 0
                                ? <CantButton onAdd={() => addProduct(item)} onLess={() => lessProduct(item)}>{item.cant_selected}</CantButton>
                                : <Button onClick={() => addProduct(item)}>Comprar</Button>
                            }
                        </Card>
                    )
                })}
            </StyledContainer>
        </>

    )
}


export default Products