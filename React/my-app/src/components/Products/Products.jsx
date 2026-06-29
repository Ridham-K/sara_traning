import "./Products.css"

/*function Products(props){
    return(
        <>
        <h1>Product Name: {props.name}</h1>
        <h2>Price: {props.price}</h2>
        </>
        
    )
}*/

function Products({name = "default",price = "NaN"}){
    return(
        <>
        <h1>{name}</h1>
        <h2>{price}</h2>
        </>
    )
}

function Card({ children }) {
  return (
    <div
      style={{
        border: "1px solid pink",
        padding: "20px",
        margin: "10px"
      }}
    >
      {children}
    </div>
  );
}



export default Products;
export { Card };