import ProductCardComponent from "@/component/ProductCardComponent";
import HeaderComponent from "@/component/HeaderComponent";
import React from "react";
import { getProducts } from "@/service/GetProducts.service";
import { getUser } from "@/service/getUser.service";

const Page = async () => {
  const user = await getUser();
  const products = await getProducts();

  console.log("this is user in page :", user);

  return (
    <div className="flex flex-col min-h-screen">
      <HeaderComponent user={user} />

      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {products?.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {products.map((product, index) => (
              <ProductCardComponent
                key={product.productId ?? index}
                product={product}
              />
            ))}
          </div>
        ) : (
          <div className="text-center h-96 grid place-content-center">
            <h2 className="text-2xl font-semibold text-gray-800">
              No products found
            </h2>
            <p className="text-gray-600 mt-2">
              Try refreshing the page or check back later.
            </p>
          </div>
        )}
      </main>
    </div>
  );
};

export default Page;
