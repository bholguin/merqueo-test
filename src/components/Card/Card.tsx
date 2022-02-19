import { FC } from "react"
import { StyledCard } from "./Card.styles"

const Card: FC = (props): JSX.Element => {
    const { children } = props
    return <StyledCard>{children}</StyledCard>
}


export default Card