import React from 'react';
import { useParams } from 'react-router-dom';

type Props = {
  product: {
    id: number;
    title: string;
    category: string;
    images: string[];
    description: string;
    price: number;
    brand: string;
  };
};

const ProductDetails = ({ product }: Props) => {
  // Use the useParams hook to get the product ID from the route
  const { productId } = useParams<{ productId: string }>();

  // Find the specific product based on the product ID
  const selectedProduct = product.find((p) => String(p.id) === productId);

  if (!selectedProduct) {
    return <p>Product not found</p>;
  }

  return (
    <div>
      <img src={selectedProduct.images[0]} alt="" />
      <h2>{selectedProduct.title}</h2>
      <p>{selectedProduct.description}</p>
    </div>
  );
};

export default ProductDetails;