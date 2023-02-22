import Data from "../Components/Data";
export default function DataFiles() {
  return (
    <>
      {Data.map((values) => {
        return (
          <>
            <div className=" card-body  m-auto my-4 p-3">
              <img src={values.image} alt="" className="hotel-image mb-5" />
              <h2 className="mx-3 text-danger">{values.title}</h2>
              <p className="mx-3">{values.text}</p>
              <button className="btn btn-dark mx-3" type="submit">
                {values.btn}
              </button>
            </div>
          </>
        );
      })}
    </>
  );
};

