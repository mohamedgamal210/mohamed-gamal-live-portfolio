import React, { useMemo, useState } from "react";
import { Search, TrendingUp, Users, ShoppingBag, DollarSign, ArrowUpRight } from "lucide-react";
import DemoHeader from "../../components/demos/DemoHeader";

const orders = [
  {id:"#1048", customer:"Ahmed Ali", product:"Wireless Headphones", amount:79, status:"Completed"},
  {id:"#1047", customer:"Sara Hassan", product:"Smart Watch", amount:129, status:"Pending"},
  {id:"#1046", customer:"Omar Khaled", product:"Keyboard", amount:95, status:"Completed"},
  {id:"#1045", customer:"Mona Adel", product:"Desk Lamp", amount:51, status:"Cancelled"},
  {id:"#1044", customer:"Youssef Samir", product:"USB-C Hub", amount:35, status:"Completed"},
];

export default function DashboardDemo() {
  const [query,setQuery]=useState("");
  const [status,setStatus]=useState("All");
  const visible=useMemo(()=>orders.filter(o=>(status==="All"||o.status===status)&&`${o.customer} ${o.product} ${o.id}`.toLowerCase().includes(query.toLowerCase())),[query,status]);

  return (
    <>
      <DemoHeader title="Business Dashboard" description="Responsive dashboard with KPIs, search and transaction filtering." />
      <main className="demo-page">
        <div className="container dashboard">
          <div className="dash-top"><div><span className="eyebrow">OVERVIEW</span><h2>Business Dashboard</h2><p>Monitor sales and recent orders.</p></div><span className="date-pill">September 2026</span></div>
          <div className="kpi-grid">
            <div className="kpi"><span><DollarSign/></span><small>Total Revenue</small><strong>$48,295</strong><em>+12.8%</em></div>
            <div className="kpi"><span><ShoppingBag/></span><small>Orders</small><strong>1,284</strong><em>+8.4%</em></div>
            <div className="kpi"><span><Users/></span><small>Customers</small><strong>8,492</strong><em>+5.2%</em></div>
            <div className="kpi"><span><TrendingUp/></span><small>Conversion</small><strong>4.82%</strong><em>+1.1%</em></div>
          </div>
          <div className="orders-panel">
            <div className="orders-head"><div><h3>Recent Orders</h3><p>Search and filter the table.</p></div><div className="order-tools"><div className="search-box"><Search size={17}/><input value={query} onChange={e=>setQuery(e.target.value)} placeholder="Search..." /></div><select value={status} onChange={e=>setStatus(e.target.value)}><option>All</option><option>Completed</option><option>Pending</option><option>Cancelled</option></select></div></div>
            <div className="table-wrap"><table><thead><tr><th>Order</th><th>Customer</th><th>Product</th><th>Amount</th><th>Status</th><th></th></tr></thead><tbody>{visible.map(o=><tr key={o.id}><td><b>{o.id}</b></td><td>{o.customer}</td><td>{o.product}</td><td><b>${o.amount}</b></td><td><span className={`status ${o.status.toLowerCase()}`}>{o.status}</span></td><td><button className="table-icon"><ArrowUpRight size={16}/></button></td></tr>)}</tbody></table></div>
          </div>
        </div>
      </main>
    </>
  );
}