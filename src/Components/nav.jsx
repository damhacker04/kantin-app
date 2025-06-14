import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";

function Nav() {
    return (
    <nav>
      <Link to="/canteen">Kantin</Link> | <Link to="/cart">Keranjang</Link>
      <SearchBar onSearch={handleSearch} />
    </nav>
  );
}

export default Nav;