/**
 * Renders a single product row with name + price
 *
 * @param {Object} product
 * @param {String} product.name
 * @param {String} product.price
 * @param {Boolean} product.stocked
 */
export function ProductRow({ product }) {
  // If not stocked, show name in red
  const style = product.stocked ? undefined : { color: "red" };

  return (
    <tr>
      <td style={style}>{product.name}</td>
      <td>{product.price}</td>
    </tr>
  );
}

