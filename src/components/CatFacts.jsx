import { useState, useEffect } from "react";
export default function CatFacts() {
  const [facts, setFacts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://catfact.ninja/facts?limit=5")
      .then((res) => {
        if (!res.ok) throw new Error("Kunne ikke hente kattefakta");
        return res.json();
      })
      .then((data) => {
        setFacts(data.data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Feil: {error}</p>;

  return (
    <div>
      <h2>Kattefakta</h2>
      <ul>
        {facts.map((fact, index) => (
          <li key={index}>{fact.fact}</li>
        ))}
      </ul>
    </div>
  );
}
