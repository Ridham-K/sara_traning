function PriceTag({
  price,
  currency = "USD",
  discount = 0
}) {
  
  const displayPrice = price.toFixed(2);

  const discountedPrice = (price - discount).toFixed(2);

  return (
    <div className="price-tag">
      <p>Price: {currency} {displayPrice}</p>

      {discount > 0 && (
        <p>
          After Discount: {currency} {discountedPrice}
        </p>
      )}
    </div>
  );
}

export default PriceTag;