import type { PropsProduct } from "../types/typeProducts";

const ProductItem = ({ props }: { props: PropsProduct }) => {

    const { name, price, stock, id } = props;

    return (
        <div key={id} style={{ display: "flex", flexDirection: "row", gap: "30px", listStyle: "none" }}>
            <li>{name}</li>
            <li>$ {price}</li>
            <li>{stock}</li>
        </div>
    )
}
export default ProductItem;