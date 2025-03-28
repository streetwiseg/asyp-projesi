// 📄 src/components/navbar.tsx

import { useAuth } from "@/hooks/useAuth";
import { useNavigate, Link } from "react-router-dom";
import { toast } from "react-toastify";

const Navbar = () => {
  const { isAuthenticated, logout, user } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    toast.info("Çıkış yapıldı 👋");
    navigate("/login");
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light border-bottom px-4 shadow-sm">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand fw-bold text-primary fs-4">
          ASYP
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link to="/features" className="nav-link">
                Özellikler
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/packages" className="nav-link">
                Paketler
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link">
                Hakkımızda
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/contact" className="nav-link">
                İletişim
              </Link>
            </li>
          </ul>

          <div className="d-flex align-items-center gap-2">
            {!isAuthenticated ? (
              <>
                <Link to="/login" className="btn btn-outline-dark">
                  Giriş Yap
                </Link>
                <Link to="/register" className="btn btn-primary">
                  Kurumsal Üyelik
                </Link>
              </>
            ) : (
              <>
                <span className="text-muted small me-2">
                  👤 {user?.email}
                </span>
                <button
                  onClick={handleLogout}
                  className="btn btn-outline-danger"
                >
                  Çıkış Yap
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
