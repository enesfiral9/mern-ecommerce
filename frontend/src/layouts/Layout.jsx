import { isAdmin } from "../config/isAdmin"; // Adjust the import path as necessary
import AdminLayout from "./AdminLayout";
import MainLayout from "./MainLayout";  



export const Layout = isAdmin ? AdminLayout : MainLayout;