import "./App.css";
import { Link, Route, Routes } from "react-router-dom";

// Componentes => Elementos
const Home = () => <h1>Home</h1>;
const SearchPage = () => {
  const tacos = ["cochinita", "chili", "carnita", "quesadilla"];

  return (
    <>
      <h1>Search Page</h1>
      {/* <Link to={tacos}>Tacos</Link> */}
      <ul>
        {tacos.map((taco) => (
          <li key={taco}>
            {" "}
            <Link to={`/tacos/${taco}`}>{taco}</Link>
          </li>
        ))}
      </ul>
    </>
  );
};
const Tacos = () => <h1>Tacos</h1>;

function App() {
  return (
    <>
      <header>
        <h1>MichiShop</h1>
        <nav>
          <ul>
            {/* <li>
              <a href="/search-page">Search Page</a>
            </li>
            <li>
              <a href="/">Home</a>
            </li> */}
            <li>
              <Link to="/">Home</Link>
              <Link to="/search-page">Search Page</Link>
            </li>
          </ul>
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search-page" element={<SearchPage />} />
        <Route path="/tacos/:name" element={<Tacos />} />
      </Routes>
    </>
  );
}

export default App;


37:40 / 1:44:22