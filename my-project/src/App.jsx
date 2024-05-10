import "./App.css";
import {
  Link,
  Route,
  Routes,
  useParams,
  Outlet,
  NavLink,
} from "react-router-dom";

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

const Tacos = () => {
  const { name } = useParams();
  return (
    <div>
      {" "}
      <h1>Tacos</h1>
      {name}
      <Link to="details">It a los detalles</Link>
      <Outlet />
    </div>
  );
};

const TacoDetails = () => {
  const { name } = useParams();
  return (
    <div>
      <h1>Taco Details {name}</h1>
    </div>
  );
};

const TacoIndex = () => {
  return <h1>Index Route de Tacos</h1>;
};

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
              <NavLink
                className={({ isActive }) => {
                  return isActive ? "is-active" : undefined;
                }}
                to="/"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) => {
                  return isActive ? "is-active" : undefined;
                }}
                to="/search-page"
              >
                Search Page
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search-page" element={<SearchPage />} />
        <Route path="/tacos/:name" element={<Tacos />}>
          <Route index element={<TacoIndex />} />
          <Route path="details" element={<TacoDetails />} />
        </Route>
        <Route path="*" element={<h1>Not Found</h1>} />
      </Routes>
    </>
  );
}

export default App;

// 37:40 / 1:44:22
