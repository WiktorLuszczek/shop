import { ProductInOrder } from "../../components/ProductInOrder/ProductInOrder"
import { SummaryOrder } from "../../components/SummaryOrder/SummaryOrder"
import { useOrderContext } from "../../context/OrderContext"
import { SchemaProduct } from "../../schema/schema"

export default function OrderPage() {
    const { order } = useOrderContext()
    return (
        <div className="w-11/12 mx-auto flex">
            <div className="m-2 w-4/6">
                <h1 className="text-3xl font-bold">Bag</h1>
                {order === null || order.length === 0 
                    ? 
                        <p>You have no products in your shopping cart</p>
                    : 
                        <ul>
                            {order.map((product: SchemaProduct, i: number) =>
                            <ProductInOrder product={product} i={i} />)}
                        </ul>
                }
            </div>
            <SummaryOrder />
        </div>
    )
  }