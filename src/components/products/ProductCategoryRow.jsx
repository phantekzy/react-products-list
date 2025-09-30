/**
 * Renders a category header row in the product table
 *
 * @param {String} name - Category name
 */
export function ProductCategoryRow({ name }) {
  return (
    <tr>
      {/* colspan=2 makes the header span across Name + Price columns */}
      <td colSpan={2}><strong>{name}</strong></td>
    </tr>
  );
}

