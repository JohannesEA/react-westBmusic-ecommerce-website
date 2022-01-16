import SecondNavbar from "../../components/navbar/SecondNavbar";
import AdminAboutSectionHandler from "./AdminAboutSectionHandler";
import AdminHeroSectionHandler from "./AdminHeroSectionHandler";
import AdminProductsHandler from "./producthandler/AdminProductsHandler";
import AdminWorkProcessSectionHandler from "./AdminWorkProcessSectionHandler";
import { LogoutButton } from "../../style/buttons";
import { logout } from "../../apihandling/apiCalls";

const AdminHome = () => {
  const handleLogout = () => {
    logout();
    window.location.reload();
  };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <SecondNavbar />
      <LogoutButton onClick={handleLogout}>Logg Ut</LogoutButton>
      <AdminHeroSectionHandler />
      <AdminAboutSectionHandler />
      <AdminWorkProcessSectionHandler />
      <AdminProductsHandler />
    </div>
  );
};

export default AdminHome;
