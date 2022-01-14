import SecondNavbar from "../../components/navbar/SecondNavbar";
import AdminAboutSectionHandler from "./AdminAboutSectionHandler";
import AdminHeroSectionHandler from "./AdminHeroSectionHandler";
import AdminProductsHandler from "./producthandler/AdminProductsHandler";
import AdminWorkProcessSectionHandler from "./AdminWorkProcessSectionHandler";

const AdminHome = () => {
  return (
    <div>
      <SecondNavbar />
      <AdminHeroSectionHandler />
      <AdminAboutSectionHandler />
      <AdminWorkProcessSectionHandler />
      <AdminProductsHandler />
    </div>
  );
};

export default AdminHome;
