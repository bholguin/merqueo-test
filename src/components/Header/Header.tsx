import { FC } from "react"
import { StyledContainer, StyledTitle } from './Header.styles'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const Header: FC = (): JSX.Element => {
    return (
        <StyledContainer>
            <StyledTitle>Grocery Store  <ShoppingCartIcon /></StyledTitle>

        </StyledContainer>
    )
}

export default Header