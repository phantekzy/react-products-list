import { useState } from "react";
import { Input } from "./components/forms/Input.jsx";
import { Checkbox } from "./components/forms/Checkbox.jsx";
import { ProductCategoryRow } from "./components/products/ProductCategoryRow.jsx";
import { ProductRow } from "./components/products/ProductRow.jsx";

// Mock product data
const PRODUCTS = [  
  { category: "Fruits",     price: "$1", stocked: true,  name: "Apple" },  
  { category: "Fruits",     price: "$1", stocked: true,  name: "Dragonfruit" },  
  { category: "Fruits",     price: "$2", stocked: false, name: "Passionfruit" },  
  { category: "Vegetables", price: "$2", stocked: true,  name: "Spinach" },  
  { category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin" },  
  { category: "Vegetables", price: "$1", stocked: true,  name: "Peas" }  
];

// Main App component
function App() {
  // State for filtering
  const [showStockedOnly, setShowStockOnly] = useState(false);
  const [search, setSearch] = useState("");

  // Compute products to display (filtering by stock + search query)
  const visibleProducts = PRODUCTS.filter(product => {
    if (showStockedOnly && !product.stocked) return false; // hide unstocked
    if (search && !product.name.toLowerCase().includes(search.toLowerCase())) return false; // filter by name
    return true;
  });

  return (
    <div className="container my-3">
      {/* Search inputs (text + checkbox) */}
      <SearchBar 
        search={search}
        onSearchChange={setSearch}
        showStockedOnly={showStockedOnly}
        onStockedOnlyChange={setShowStockOnly}
      />

      {/* Table of products */}
      <ProductTable products={visibleProducts} />
    </div>
  );
}

// Search inputs (text + checkbox)
function SearchBar({ showStockedOnly, onStockedOnlyChange, search, onSearchChange }) {
  return (
    <div className="mb-3">
      <Input 
        value={search}
        onChange={onSearchChange}
        placeholder="Search for products"
      />

      <Checkbox 
        checked={showStockedOnly}
        onChange={onStockedOnlyChange}
        id="stocked"
        label="Available products only"
      />
    </div>
  );
}

// Table of products grouped by category
function ProductTable({ products }) {
  const rows = [];
  let lastCategory = null;

  // Build rows: insert category header, then product rows
  for (let product of products) {
    if (product.category !== lastCategory) {
      rows.push(
        <ProductCategoryRow key={product.category} name={product.category} />
      );
    }
    rows.push(<ProductRow key={product.name} product={product} />);
    lastCategory = product.category;
  }

  return (
    <table className="table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  );
}

export default App;

