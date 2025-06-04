import React, { useEffect, useState } from 'react';

function CardComponent() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://api.escuelajs.co/api/v1/products');
        const data = await response.json();
        setProducts(data);
        console.log(data)
        console.log(data.images.slice(1,3))
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="container">
      <div className="row ">
        {products.map((product) => (
          <div className="col-md-3" key={product.id}>
            <div className="card" style={{ width: "18rem" }}>
              <img
                src={product.images?.[0]}
                className="card-img-top"
                alt={product.title}
                style={{ height: '200px', objectFit: 'cover' }}
              />
              {/* <img src={product.images[1]} 
              style={{height:"50px" ,width:"100px" , objectFit:"cover"}}
              alt="" />
               <img src={product.images[2]}
                 style={{height:"50px" ,width:"100px" , objectFit:"cover"

                    ,position:"relative",
                    left:"120px"
                 }}
               alt="" /> */}
           <div className="d-flex justify-content-center gap-2 p-2">
  {
    product.images.slice(1, 3).map((e, index) => (
      <img 
        src={e} 
        alt="" 
        key={index}
        style={{
          height: '50px',
          width: '70px',
          objectFit: 'cover',
          borderRadius: '5px',
          border: '1px solid #ddd'
        }}
      />
    ))
  }
</div>


              <div className="card-body">
                <h5 className="card-title fs-6">{product.title}</h5>
                <p className="card-text">${product.price}</p>
                <p className="card-text">{product.description.slice(0,100)}</p>
                <a href="#" className="btn btn-primary w-100">Buy Now</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>

  );
}

export default CardComponent;
