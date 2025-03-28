import { useState } from "react";
import { Tabs, Tab } from "react-bootstrap";
import {
  Settings as SettingsIcon,
  Users,
  Key,
  Bell,
  PlusCircle,
  FileCheck,
} from "lucide-react";

import AddUserModal from "./addusermodal";
import UserList from "./userlist";
import RoleManager from "./rolemanager";
import ContractAssigner from "./contractassigner";
import NotificationSettings from "./notificationsettings";

const SettingsPage = () => {
  const [activeKey, setActiveKey] = useState("userlist");

  const tabStyle = "d-flex align-items-center gap-1 fw-semibold";

  return (
    <div className="container py-5">
      {/* Başlık */}
      <div className="d-flex align-items-center gap-2 mb-4">
        <SettingsIcon size={26} className="text-primary" />
        <h2 className="fs-3 fw-bold mb-0">Ayarlar</h2>
      </div>

      {/* Sekmeler */}
      <Tabs
        activeKey={activeKey}
        onSelect={(k) => setActiveKey(k || "userlist")}
        className="mb-4 border-bottom pb-2"
        justify
      >
        <Tab
          eventKey="userlist"
          title={
            <span className={tabStyle}>
              <Users size={16} /> Kullanıcı Listesi
            </span>
          }
        >
          <UserList />
        </Tab>

        <Tab
          eventKey="adduser"
          title={
            <span className={tabStyle}>
              <PlusCircle size={16} /> Kullanıcı Ekle
            </span>
          }
        >
          <AddUserModal />
        </Tab>

        <Tab
          eventKey="roles"
          title={
            <span className={tabStyle}>
              <Key size={16} /> Rol Yönetimi
            </span>
          }
        >
          <RoleManager />
        </Tab>

        <Tab
          eventKey="assign"
          title={
            <span className={tabStyle}>
              <FileCheck size={16} /> Sözleşme Atama
            </span>
          }
        >
          <ContractAssigner />
        </Tab>

        <Tab
          eventKey="notifications"
          title={
            <span className={tabStyle}>
              <Bell size={16} /> Bildirim Ayarları
            </span>
          }
        >
          <NotificationSettings />
        </Tab>
      </Tabs>
    </div>
  );
};

export default SettingsPage;
