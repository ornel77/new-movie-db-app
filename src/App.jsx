import { useEffect, useState } from "react";
// import Card from "./components/Card"

const Card = ({ title }) => {
  const [count, setCount] = useState(0)
  const [hasLiked, setHasLiked] = useState(false);

  useEffect(() => {

  }, [])

  return (
    <div className="card" onClick={() => setCount(prev => prev + 1)}>
      <h2> {title} - {count} </h2>
      <button onClick={() => setHasLiked(!hasLiked)}>
        {
          hasLiked ? "💗" : "🤍"
        }
      </button>
     
    </div>
  );
};

const App = () => {
  return (
    <div className="card-container">
      <Card title="Dune" />
      <Card title="Avatar" />
      <Card title="Star wars" />
    </div>
  );
};

export default App;
