import { FC } from "react"
import { useHeader } from './hook'
import { StyledContainer, StyledTitle, StyledCar, StyledIcon, StyledTotal } from './Header.styles'

const Header: FC = (): JSX.Element => {
    const { totalProducts, goToShoopingCar } = useHeader()
    return (
        <StyledContainer>
            <StyledTitle>Grocery Store  <StyledIcon onClick={goToShoopingCar}><StyledCar /> {totalProducts > 0 && <StyledTotal>{totalProducts}</StyledTotal>}</StyledIcon> </StyledTitle>
        </StyledContainer>
    )
}

export default Header