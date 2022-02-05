//functions / hooks
import { logout } from "../../apihandling/apiCalls";
import { ScrollToTop } from "../../common/Functions";
//styles
import { LogoutButton } from "../../style/buttons";
//components
import SecondNavbar from "../../components/navbar/SecondNavbar";
import AdminAboutSectionHandler from "./AdminAboutSectionHandler";
import AdminHeroSectionHandler from "./AdminHeroSectionHandler";
import AdminProductsHandler from "./producthandler/AdminProductsHandler";
import AdminWorkProcessSectionHandler from "./AdminWorkProcessSectionHandler";

const AdminHome = () => {
  const handleLogout = () => {
    logout();
    window.location.reload();
  };
  ScrollToTop();

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
