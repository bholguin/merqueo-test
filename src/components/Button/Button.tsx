import { FC } from "react"
import { IButtonProps } from "./Button.interfaces"
import { StyledButton } from "./Button.styles"
const Button: FC<IButtonProps> = (props): JSX.Element => {
    const { children, onClick } = props
    return <StyledButton onClick={onClick}>{children}</StyledButton>
}

export default Button