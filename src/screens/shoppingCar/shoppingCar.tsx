import { FC } from "react"
import Header from "components/Header"
import { useShoppingCar } from "./hook"
import Card from "components/Card"
import useUtils from "helpers/utils"
import { IProduct } from "models/interfaces/product"
import { StyledContainer, StyledImgProduct, StyledNameProduct, StyledPriceProduct } from './shoppingCard.styles'
import CantButton from "components/CantButton"


const ShoppingCar: FC = (): JSX.Element => {
    const { auxProducts } = useShoppingCar()
    const { formatter } = useUtils()

    return (
        <>
            <Header />
            <StyledContainer>
                {auxProducts.map((item: IProduct, index: number) => {
                    return (
                        <Card key={index}>
                            <StyledImgProduct src={item.attributes.image_medium_url} alt={item.attributes.name} />
                            <StyledNameProduct> {item.attributes.name}</StyledNameProduct>
                            <StyledPriceProduct> {formatter.format(item.attributes.price)}</StyledPriceProduct>
                            <CantButton onAdd={() => { }} onLess={() => { }}>{item.cant_selected}</CantButton>
                        </Card>
                    )
                })}
            </StyledContainer>
        </>
    )
}


export default ShoppingCar