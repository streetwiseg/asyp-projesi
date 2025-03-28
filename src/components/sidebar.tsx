// src/components/sidebar.tsx
import { NavLink } from "react-router-dom";
import { FaHome, FaFileSignature, FaChartPie, FaChartBar, FaRobot, FaHistory, FaCog } from "react-icons/fa";

// Sidebar componenti - Kurumsal Sidebar
const Sidebar = () => {
    return (
        <aside className="d-flex flex-column bg-white shadow-sm p-3" style={{ width: 260, minHeight: "100vh", position: "fixed", top: 0, left: 0, zIndex: 1000 }}>
            <h4 className="text-primary fw-bold mb-4">ASYP Panel</h4>

            <nav>
                <ul className="nav flex-column gap-2">

                    <li>
                        <NavLink to="/dashboard" className={({ isActive }) => `nav-link ${isActive ? 'active fw-bold text-primary' : 'text-dark'}`}>
                            <FaHome className="me-2" /> Anasayfa
                        </NavLink>
                    </li>

                    <li>
                        <NavLink to="/dashboard/assign" className={({ isActive }) => `nav-link ${isActive ? 'active fw-bold text-primary' : 'text-dark'}`}>
                            <FaFileSignature className="me-2" /> Sözleşme Atama
                        </NavLink>
                    </li>

                    <li>
                        <NavLink to="/dashboard/reports/summary" className={({ isActive }) => `nav-link ${isActive ? 'active fw-bold text-primary' : 'text-dark'}`}>
                            <FaChartPie className="me-2" /> Özet Rapor
                        </NavLink>
                    </li>

                    <li>
                        <NavLink to="/dashboard/reports/detail" className={({ isActive }) => `nav-link ${isActive ? 'active fw-bold text-primary' : 'text-dark'}`}>
                            <FaChartBar className="me-2" /> Detaylı Rapor
                        </NavLink>
                    </li>

                    <li>
                        <NavLink to="/dashboard/ai-analysis" className={({ isActive }) => `nav-link ${isActive ? 'active fw-bold text-primary' : 'text-dark'}`}>
                            <FaRobot className="me-2" /> Yapay Zeka Analizi
                        </NavLink>
                    </li>

                    <li>
                        <NavLink to="/dashboard/ai-analysis/history" className={({ isActive }) => `nav-link ${isActive ? 'active fw-bold text-primary' : 'text-dark'}`}>
                            <FaHistory className="me-2" /> Analiz Geçmişi
                        </NavLink>
                    </li>

                    <li>
                        <NavLink to="/dashboard/settings" className={({ isActive }) => `nav-link ${isActive ? 'active fw-bold text-primary' : 'text-dark'}`}>
                            <FaCog className="me-2" /> Ayarlar
                        </NavLink>
                    </li>

                </ul>
            </nav>
        </aside>
    );
};

export default Sidebar;
