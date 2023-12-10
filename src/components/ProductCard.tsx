import React from 'react'
import { Link, } from 'react-router-dom'

type Props = {
  id: number;
  title: string;
  category: string;
  images: string[];
  description: string;
  price: number;
  brand: string;
}
type productCardProps = {
  products: Props[];
  loading: boolean;
}

const ProductCard = ({ products, loading }: productCardProps) => {
  return (
    <div>
      <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: 10,
        }}>
          {products.map((product: Props) => {
            return (
              (
                <Link to={`/products/${product.id}`} key={product.id} style={{
                  border: '1px solid #ccc',
                  listStyle: 'none',
                  position: 'relative',
                  cursor: 'pointer'
                }}
                >
                  <img style={{
                    width: '100%',
                    height: '140px',
                    objectFit: 'cover',
                    borderRadius: 10,
                  }} src={product.images[0] || product.images[1]} alt={product.title} />
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '10px 10px 25px',
                  }}>
                    <h3>{product.title}</h3>
                    <p style={{color:'#333'}}>{product.category}</p>
                  </div>
                  <div style={{
                    paddingTop: '20px 10px',
                    display: 'flex',
                    fontWeight: 'bold',
                  }}>
                    <span style={{color:'#333', padding: 10}}>${product.price}</span>
                  </div>
                </Link>
              )
            )
          })}
        </div>
        {loading && <p style={{textAlign: 'center'}}>loading....</p>}
    </div>
  )
}

export default ProductCard