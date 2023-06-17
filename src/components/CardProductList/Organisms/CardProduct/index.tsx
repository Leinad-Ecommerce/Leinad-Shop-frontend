import { Col } from "react-bootstrap"
import { Image } from "../../Atoms/Image"
import { Title } from "../../Atoms/Title"
import { Customer } from "../../Molecules/Customer"
import { Value } from "../../Molecules/Value"
import { CardProductStyles, ColCardProductStyles } from "./styles"

export type CardProductProps = {
    title: string,
    price: number,
    customer: {
        username: string,
        avatarURL: string
    },
    imageURL: string,
    promotion?: {
        old_value: number,
        value: number,
        discount_percentage: number
    },
    product_type: "MANUAL" | "AUTO"
}

export const CardProduct = (product: CardProductProps) => {
    return (
        <ColCardProductStyles md={3}>
            <CardProductStyles>
                <Image title={product.title} imageURL={product.imageURL} />
                <Title title={product.title} />
                <Value price={product.price} promotion={product.promotion} />
                <Customer username={product.customer.username} avatarURL={product.customer.avatarURL} />
            </CardProductStyles>
        </ColCardProductStyles>
    )
}