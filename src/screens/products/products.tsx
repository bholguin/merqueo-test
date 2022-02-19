
import { useProducts } from "./hook"
import { FC } from "react"


const Products: FC = (): JSX.Element => {
    const { products } = useProducts()

    console.log(products);

    return <div>get data</div>
}


export default Products