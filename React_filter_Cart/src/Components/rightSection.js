const RightSection = ({cartegories}) => {



  return (
    <>
      <div className="right-cont">
        {cartegories && cartegories.map((value,index) => {
          const {category,images,price,title,id} = value
          return (
            <>
              <div className="card" key={index}>
                <img src={images[0]} alt="..." />
                <div className="card-body cart-body">
                 
                  <p className="card-text" >  <span>Title:</span> {title}</p>
                  <p className="card-text" > <span>ID:</span> {id}</p>
                  <h6 className="card-text" ><span>Category:</span> {category}</h6>
                  <h6 className="card-title" ><span>Price:</span> ${price}</h6>
                  <button className="btn btn-primary" >Add To Cart</button>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default RightSection;

// Api website Link
// https://balajidharma.medium.com/free-store-api-for-developers-to-practice-front-end-e-commerce-development-fcf5b75e4982