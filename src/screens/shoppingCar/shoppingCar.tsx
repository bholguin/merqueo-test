import { FC } from "react"
import Header from "components/Header"
import { useShoppingCar } from "./hook"
import Card from "components/Card"
import useUtils from "helpers/utils"
import { IProduct } from "models/interfaces/product"
import CantButton from "components/CantButton"
import Button from "components/Button"
import {
    StyledContainer,
    StyledImgProduct,
    StyledNameProduct,
    StyledPriceProduct,
    StyledContentProd,
    StyledContentDetail,
    StyledTotal,
    StyledTitleDetail,
    StyledContentDetailProd,
    StyledTotalPrice,
    StyledLink,
    StyledPriceOld,
    StyledEmptyCar,
    StyledLinkEmpty,
    StyledCard
} from './shoppingCard.styles'



const ShoppingCar: FC = (): JSX.Element => {
    const { auxProducts, totalPrice, addProduct, lessProduct, goToProducts, cleanCar } = useShoppingCar()
    const { formatter } = useUtils()

    return (
        <>
            <Header />
            <StyledContainer>
                {
                    auxProducts.length === 0
                        ? <StyledEmptyCar> Aun no tienes producttos en el Carrito <StyledLinkEmpty onClick={goToProducts}> Ir por productos</StyledLinkEmpty></StyledEmptyCar>
                        : <>
                            <StyledContentProd>
                                {auxProducts.map((item: IProduct, index: number) => {
                                    const price = item.attributes.special_price ? item.attributes.special_price : item.attributes.price
                                    return (
                                        <Card key={index}>
                                            <StyledNameProduct> {item.attributes.name}</StyledNameProduct>
                                            <StyledImgProduct src={item.attributes.image_medium_url} alt={item.attributes.name} />
                                            <CantButton onAdd={() => addProduct(item)} onLess={() => lessProduct(item)}>{item.cant_selected}</CantButton>
                                            {
                                                item.attributes.special_price
                                                    ? <>
                                                        <StyledPriceOld> {formatter.format(item.attributes.price)}</StyledPriceOld>
                                                        <StyledPriceProduct> {`${formatter.format(price)} x ${item.cant_selected} und`}</StyledPriceProduct>
                                                    </>
                                                    : <StyledPriceProduct> {`${formatter.format(price)} x ${item.cant_selected} und`}</StyledPriceProduct>
                                            }
                                            <StyledTotal> {`Total ${formatter.format(price * (item.cant_selected ? item.cant_selected : 0))}`}</StyledTotal>
                                        </Card>
                                    )
                                })}
                            </StyledContentProd>
                            <StyledContentDetail>
                                <StyledCard>
                                    <StyledTitleDetail>
                                        Detalle de la compra
                                    </StyledTitleDetail>
                                    {
                                        auxProducts.map((item: IProduct, index: number) => {
                                            const price = item.attributes.special_price ? item.attributes.special_price : item.attributes.price
                                            return (
                                                <StyledContentDetailProd key={`total-${index}`}>
                                                    <StyledTotal>{item.attributes.name}</StyledTotal>
                                                    <StyledTotal> {`${formatter.format(price * (item.cant_selected ? item.cant_selected : 0))}`}</StyledTotal>
                                                </StyledContentDetailProd>

                                            )
                                        })
                                    }
                                    <StyledTotalPrice>
                                        {`Total ......... ${formatter.format(totalPrice)}`}
                                    </StyledTotalPrice>
                                    <Button onClick={cleanCar}>Finalizar la compra</Button>
                                    <StyledLink onClick={goToProducts}>
                                        ir por mas productos
                                    </StyledLink>

                                </StyledCard>
                            </StyledContentDetail>
                        </>
                }
            </StyledContainer>

        </>
    )
}


export default ShoppingCar