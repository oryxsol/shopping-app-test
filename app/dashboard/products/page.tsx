import { fetchProducts } from "../../services/productService";
import ProductTableClient from "../../components/ProductTableClient";
import { ProductArray } from "../../types/productTypes";

// This is a Server-Side Rendering component
export default async function ProductsPage() {
  const products: ProductArray = await fetchProducts();
  const fourProducts = products.slice(0, 4);

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center bg-white rounded-2xl p-4">
        <p className="text-base font-semibold">Projects</p>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <svg
              width="14"
              height="12"
              viewBox="0 0 14 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5.66665 11.3333V7.33333H8.33331V11.3333H11.6666V6H13.6666L6.99998 0L0.333313 6H2.33331V11.3333H5.66665Z"
                fill="#364152"
              />
            </svg>
            <p className="text-sm font-medium">Forms</p>
          </div>
          <svg
            width="8"
            height="12"
            viewBox="0 0 8 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2.00003 0L0.590027 1.41L5.17003 6L0.590027 10.59L2.00003 12L8.00003 6L2.00003 0Z"
              fill="#364152"
            />
          </svg>
          <div className="flex items-center gap-2">
            <p className="text-sm font-medium">Text Field</p>

          </div>
        </div>
      </div>
      <ProductTableClient products={fourProducts} />
    </div>
  );
}

