import { useEffect, useState } from 'react'
import './App.css'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import ProductCard from './components/ProductCard'
import ProductDetails from './components/ProductDetails'


function App() {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [limit, setLimit] = useState('30')
  const product = products.map((product) => product)
  const loadMoreProducts = () => {
    setLimit((prev) => prev + 10);
  };
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY || window.pageYOffset;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      if (scrollY + windowHeight >= documentHeight - 100) {
        loadMoreProducts();
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    fetch(`https://dummyjson.com/products?limit=${limit}`, {
      method: 'GET',
    })
    .then((response) => response.json())
    .then((data) => {
      setProducts(data.products)
      setLoading(false)
    })
  }, [limit])
  return (
    <>
      <Router>
      <h1 style={{textAlign: 'center'}}>Our Products</h1>
    <div style={{
      padding: '80px 25px',
    }}>
      {loading ? "loading...." : (
        <Routes>
          <Route path='/' element={<ProductCard products={products} loading={loading} />} />
          <Route path='/products/:productId' element={<ProductDetails product={product} />} />
        </Routes>
      )}
    </div>
      </Router>
    </>
  )
}

export default App
