"use client";
import Loader from "@/components/Loader/Loading";
import useGetProducts from "@/hooks/useGetProducts";
import Link from "next/link";

const Client = () => {
  const products = useGetProducts(); // custome hoook that fetch products

  let Products = null;

  if (products) {
    Products = (
      <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 md:gap-4">
        {products.map((product: any) => (
          <div className="bg-white p-5 rounded-lg" key={product.id}>
            <img
              className="w-full h-[120px] lg:h-[200px] object-contain"
              src={product.image}
              alt=""
            />
            <p className="text-sm text-accent pt-2 pb-2">{product.category}</p>
            <p className="font-semibold text-sm md:text-base">
              {product.title}
            </p>
            <p className="font-bold text-accent mt-2">
              Price: ${product.price}
            </p>
          </div>
        ))}
      </div>
    );
  } else {
    Products = <Loader title="Products loading..." />;
  }

  return (
    <div>
      <div className="text-sm breadcrumbs pb-5">
        <ul>
          <li>
            <Link href="/">Dashboard</Link>
          </li>
          <li>Products</li>
        </ul>
      </div>
      <h2 className="text-lg font-bold mb-4">
        <span>All Products</span>
        <span className="font-light text-sm"> - Client side rendering</span>
      </h2>
      {Products}
    </div>
  );
};

export default Client;
