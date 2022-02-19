
import useActions from "api/actions"
import { FC, useEffect } from "react"


const Products: FC = (): JSX.Element => {
    const { dispatch, useProductActions } = useActions()
    const { actGetProducts } = useProductActions()


    useEffect(() => {
        dispatch(actGetProducts())
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [dispatch])



    return <div>get data</div>
}


export default Products