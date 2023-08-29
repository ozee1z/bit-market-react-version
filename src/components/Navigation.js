import { ArrowRight } from 'react-bootstrap-icons';

export function App() {
  return <ArrowRight />;
}

export default function Navigation() {
  return (
    <nav className="navbar navbar-expand-lg fixed-top bg-body-tertiary container-fluid">
      <div className="container">
        <a className="navbar-brand text-primary fw-bold" href="#section1">
          BitMarket
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarNav"
        >
          <ul className="navbar-nav">
            <li className="nav-item me-5">
              <a className="nav-link link-dark" href="#section1">
                Home
              </a>
            </li>
            <li className="nav-item me-5">
              <a className="nav-link link-dark" href="#section2">
                Market
              </a>
            </li>
            <li className="nav-item me-5">
              <a className="nav-link link-dark" href="#section3">
                Choose Us
              </a>
            </li>
            <li className="nav-item me-5">
              <a className="nav-link link-dark" href="#section4">
                Join
              </a>
            </li>
          </ul>
          <button className="btn btn-primary">
            Sing In <ArrowRight />
          </button>
        </div>
      </div>
    </nav>
  );
}
