import { CardProduct, CardProductProps } from "../CardProduct"
import { RowCardStyled } from "./styles"

type Props = {
    products: CardProductProps[]
}

export const RowCards = ({ products }: Props) => {
    return (
        <RowCardStyled>
            {products.map((product) => (
                <CardProduct {...product} />
            ))}
        </RowCardStyled>
    )
}