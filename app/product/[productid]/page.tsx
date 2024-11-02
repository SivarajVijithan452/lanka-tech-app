import Container from "@/app/components/Container";
import { product } from "@/utils/product";
import ProductDetails from "./ProductDetails";

interface IParams {
    productid?: string;
}

const Product = async ({ params }: { params: Promise<IParams> }) => {
    // Await the params to get the resolved value
    const resolvedParams = await params;
    console.log("params:", resolvedParams);
    // Access the productid from resolvedParams
    const productId = resolvedParams.productid;
    console.log("productId:", productId);
    

    return (
        <div className="p-8">
            <Container>
                <ProductDetails product={ product } />
            </Container>
        </div>
    );
};

export default Product;
