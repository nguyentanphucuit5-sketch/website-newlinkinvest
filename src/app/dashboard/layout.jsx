import { SidebarProvider } from "@/components/ui/sidebar";
import { ToastContainer } from "react-toastify";
import "../globals.css";
import "react-toastify/dist/ReactToastify.css";
import AppSideBar from "@/components/Dashboard/SideBar/AppSideBar";
import { getSession } from "@/lib/Auth/getSession";

export default async function DashboardLayout({ children }) {
  const session = await getSession();

  return (
    <SidebarProvider>
      <AppSideBar session={session} />
      <main className="w-full bg-white text-black">{children}</main>
      <ToastContainer />
    </SidebarProvider>
  );
}
