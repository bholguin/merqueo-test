import { FC } from "react"
import { ICantButtonProps } from "./CantButton.interfaces"
import { StyledContainer, StyledButton, StyledText } from "./CantButton.styles"

const CantButton: FC<ICantButtonProps> = (props): JSX.Element => {
    const { children, onAdd, onLess } = props
    return (
        <StyledContainer>
            <StyledButton onClick={onLess}>-</StyledButton><StyledText>{children}</StyledText><StyledButton onClick={onAdd}>+</StyledButton>
        </StyledContainer>
    )
}

export default CantButton