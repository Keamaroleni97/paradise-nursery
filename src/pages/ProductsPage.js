import Header from "../components/Header";
import { plants } from "../data/plants";
import ProductCard from "../components/ProductCard";

export default function ProductsPage() {
  const categories = [...new Set(plants.map(p => p.category))];

  return (
    <>
      <Header />
      {categories.map(cat => (
        <div key={cat}>
          <h2>{cat}</h2>
          <div className="grid">
            {plants.filter(p => p.category === cat).map(p => (
              <ProductCard key={p.id} plant={p} />
            ))}
          </div>
        </div>
      ))}
    </>
  );
}
