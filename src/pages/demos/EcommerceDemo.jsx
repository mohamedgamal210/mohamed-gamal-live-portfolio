import React, { useMemo, useState } from "react";
import { ShoppingCart, Search, Plus, Minus, Trash2, ArrowLeft } from "lucide-react";
import DemoHeader from "../../components/demos/DemoHeader";

const products = [
  { id: 1, name: "Wireless Headphones", category: "Audio", price: 79, icon: "🎧" },
  { id: 2, name: "Mechanical Keyboard", category: "Desk", price: 95, icon: "⌨️" },
  { id: 3, name: "Smart Watch", category: "Wearables", price: 129, icon: "⌚" },
  { id: 4, name: "Laptop Stand", category: "Desk", price: 42, icon: "💻" },
  { id: 5, name: "USB-C Hub", category: "Accessories", price: 35, icon: "🔌" },
  { id: 6, name: "Desk Lamp", category: "Desk", price: 51, icon: "💡" },
];

export default function EcommerceDemo() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");
  const [cart, setCart] = useState([]);
  const [checkout, setCheckout] = useState(false);

  const categories = ["All", ...new Set(products.map(p => p.category))];

  const visible = products.filter(p =>
    (category === "All" || p.category === category) &&
    p.name.toLowerCase().includes(query.toLowerCase())
  );

  const add = (product) => {
    setCart(prev => {
      const found = prev.find(x => x.id === product.id);
      return found ? prev.map(x => x.id === product.id ? {...x, qty: x.qty + 1} : x) : [...prev, {...product, qty: 1}];
    });
  };

  const change = (id, amount) => setCart(prev => prev.map(x => x.id === id ? {...x, qty: Math.max(0, x.qty + amount)} : x).filter(x => x.qty > 0));
  const total = useMemo(() => cart.reduce((sum, x) => sum + x.price * x.qty, 0), [cart]);

  return (
    <>
      <DemoHeader title="E-Commerce Store" description="Functional shopping cart with search, filters and checkout interaction." />
      <main className="demo-page">
        <div className="container">
          <div className="store-toolbar">
            <div className="search-box"><Search size={18}/><input value={query} onChange={e => setQuery(e.target.value)} placeholder="Search products..." /></div>
            <div className="category-row">{categories.map(c => <button className={category === c ? "active" : ""} onClick={() => setCategory(c)} key={c}>{c}</button>)}</div>
            <button className="cart-button" onClick={() => document.getElementById("cart")?.scrollIntoView({behavior:"smooth"})}><ShoppingCart size={18}/> Cart ({cart.reduce((s,x)=>s+x.qty,0)})</button>
          </div>

          <div className="demo-layout">
            <section>
              <div className="demo-section-heading"><h2>Products</h2><span>{visible.length} items</span></div>
              <div className="store-grid">
                {visible.map(p => (
                  <article className="store-product" key={p.id}>
                    <div className="product-icon">{p.icon}</div>
                    <span>{p.category}</span><h3>{p.name}</h3>
                    <div className="product-bottom"><strong>${p.price}</strong><button onClick={() => add(p)}><Plus size={17}/> Add</button></div>
                  </article>
                ))}
              </div>
            </section>

            <aside id="cart" className="cart-panel">
              <h2><ShoppingCart size={20}/> Your Cart</h2>
              {cart.length === 0 ? <p className="empty">Your cart is empty. Add a product to test it.</p> : (
                <>
                  {cart.map(item => (
                    <div className="cart-item" key={item.id}>
                      <div><strong>{item.name}</strong><small>${item.price} each</small></div>
                      <div className="qty"><button onClick={() => change(item.id,-1)}><Minus size={14}/></button><b>{item.qty}</b><button onClick={() => change(item.id,1)}><Plus size={14}/></button></div>
                      <button className="delete-btn" onClick={() => setCart(prev => prev.filter(x => x.id !== item.id))}><Trash2 size={16}/></button>
                    </div>
                  ))}
                  <div className="cart-total"><span>Total</span><strong>${total.toFixed(2)}</strong></div>
                  <button className="checkout-btn" onClick={() => setCheckout(true)}>Checkout</button>
                </>
              )}
            </aside>
          </div>
        </div>
      </main>
      {checkout && <div className="modal-backdrop"><div className="modal"><button className="modal-close" onClick={() => setCheckout(false)}>×</button><div className="success-icon">✓</div><h2>Demo Checkout</h2><p>This is a working front-end demo. Your cart total is <strong>${total.toFixed(2)}</strong>.</p><button className="checkout-btn" onClick={() => {setCart([]);setCheckout(false)}}>Complete Demo Order</button></div></div>}
    </>
  );
}