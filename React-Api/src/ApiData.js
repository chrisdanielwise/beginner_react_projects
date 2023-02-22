import React from "react";

const ApiData = ({apiData}) => {
  // const [myname,setMyname] =useState("")
  // fetch('https://fakestoreapi.com/products/1')
  return (
    <>
        <div className="container-fluid">
            <div class="row row-cols-lg-3 row-cols-md-1 g-4">
    {apiData.map((values)=>{
        return(
            <>
          <div class="col">
            <div class="card m-3">
              <div class="card-body">
                <h5 class="card-title">{values.title}</h5>
                <p class="card-text">{values.description}</p>
              </div>
              <img src={values.image} class="card-img-top" alt="..." />
            </div>
          </div>

            </>
        )
    })}
      
    </div>
    </div>
    </>
  );
};

export default ApiData;
