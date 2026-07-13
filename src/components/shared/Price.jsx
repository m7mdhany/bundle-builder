function Price({ price, compareAtPrice }) {
  return (
    <div>
      {compareAtPrice && <span>${compareAtPrice}</span>}
      <span>${price}</span>
    </div>
  );
}

export default Price;