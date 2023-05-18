import { useState,useEffect } from "react";

const ImageSlider = () => {
  const [changeData, setChangeData] = useState(1);
  const [getData, setGetData] = useState([]);
useEffect(()=>{
    async function ApiData() {
        const response = await fetch(`https://fakestoreapi.com/products/${changeData}`);
        const responseData = await response.json();
        setGetData(responseData);
      }
    ApiData();
},[changeData])
  


  const nextFunc = () => {
    if (changeData <= 200)
    setChangeData(changeData + 1);
  };
  const prevFunc = () => {
    if (changeData > 1) {
      setChangeData(changeData - 1);
    }
  };

  return (
    <>
      <div className="container">
         
        <div id="carouselExampleControls" class="carousel slide">
          <div class="carousel-inner ">
              <img src={getData.image} class="m-auto" alt="" />
          </div>

          <button
            class="carousel-control-prev "
            type="button"
            onClick={prevFunc}
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          </button>

          <button
            class="carousel-control-next"
            type="button"
            onClick={nextFunc}
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
          </button>
        </div>
      </div>
    </>
  );
};

export default ImageSlider;
