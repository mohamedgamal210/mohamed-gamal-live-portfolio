import React, { useMemo, useState } from "react";
import { Plus, Trash2, CheckCircle2, Circle, ListTodo } from "lucide-react";
import DemoHeader from "../../components/demos/DemoHeader";

export default function TaskDemo() {
  const [text, setText] = useState("");
  const [filter, setFilter] = useState("all");
  const [tasks, setTasks] = useState([
    {id:1, text:"Build reusable React components", done:true},
    {id:2, text:"Connect project demo routes", done:false},
    {id:3, text:"Make the portfolio responsive", done:false},
  ]);

  const add = (e) => {
    e.preventDefault();
    if (!text.trim()) return;
    setTasks(prev => [{id:Date.now(), text:text.trim(), done:false}, ...prev]);
    setText("");
  };
  const visible = useMemo(() => tasks.filter(t => filter==="all" || (filter==="active" ? !t.done : t.done)), [tasks,filter]);

  return (
    <>
      <DemoHeader title="Task Management App" description="Add, complete, filter and delete tasks using React state." />
      <main className="demo-page">
        <div className="container narrow-demo">
          <div className="task-app">
            <div className="task-top"><div><span className="eyebrow">PRODUCTIVITY</span><h2><ListTodo/> My Tasks</h2></div><span className="task-count">{tasks.filter(t=>!t.done).length} active</span></div>
            <form className="add-task" onSubmit={add}><input value={text} onChange={e=>setText(e.target.value)} placeholder="What needs to be done?" /><button><Plus size={18}/> Add Task</button></form>
            <div className="task-filters">{["all","active","done"].map(f=><button key={f} className={filter===f?"active":""} onClick={()=>setFilter(f)}>{f}</button>)}</div>
            <div className="tasks-list">
              {visible.map(t => <div className={`task-row ${t.done?"done":""}`} key={t.id}>
                <button className="check-btn" onClick={()=>setTasks(prev=>prev.map(x=>x.id===t.id?{...x,done:!x.done}:x))}>{t.done?<CheckCircle2/>:<Circle/>}</button>
                <span>{t.text}</span>
                <button className="delete-task" onClick={()=>setTasks(prev=>prev.filter(x=>x.id!==t.id))}><Trash2 size={17}/></button>
              </div>)}
              {visible.length===0 && <div className="empty-state">No tasks in this filter.</div>}
            </div>
          </div>
        </div>
      </main>
    </>
  );
}