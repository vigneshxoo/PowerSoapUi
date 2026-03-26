// import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import ProductDetails from "./pages/ProductDetails";
import NotFound from "./pages/NotFound";
import { DashBoard } from "./pages/Dashboard";
import IntroDashboard from "./pages/InterDashBoard";

import { Login } from "./pages/Login";
import { Signup } from "./pages/Signup";
import { ProtectedRoute } from "./components/auth/ProtectedRoute";
import { CartProvider } from "./context/CartContext";
import { AddToCart } from "./pages/Cart";
import OrderHistory from "./pages/OrderHistory";
import OrderDetails from "./pages/OrderDetails";
const queryClient = new QueryClient();
import 'aos/dist/aos.css';
import { useEffect } from "react";
import AOS from 'aos';
import 'react-loading-skeleton/dist/skeleton.css'
import { Stocks } from "./pages/stockin_hand/Stocks";
import { Schemes } from "./pages/schema/Schema";
import { SalesOrder } from "./components/Modules/OrderManagement/SalesOrder";
// import { Toaster } from 'react-hot-toast';
import { InventoryManagemntLayout } from "./components/layout/RootLayouts/Inventroy_M_Layout";
import { OrdeerManagemntLayout } from "./components/layout/RootLayouts/Order_Management_Layout";
import { VanOrder } from "./components/Modules/OrderManagement/Van_Order";
import { RetailerOrder } from "./components/Modules/OrderManagement/RetailerOrder";
import { EmployeeManagement } from "./components/Modules/Employee Management/Employees";
import { Employee_Management_Layout } from "./components/layout/RootLayouts/Employee_Management_Layout";
import { AddEmployee } from "./components/Modules/Employee Management/AddEmploye";
import { Reatiler_Management_isnide_Layout, Reatiler_Management_Layout } from "./components/layout/RootLayouts/ReaiterManagement_Layout";
import { OnboardedRetailer } from "./components/Modules/Retailer Management/Onboarded_Retailer";
import { Reatiler_Request } from "./components/Modules/Retailer Management/Reatiler_Request";
import { ReatilerManagementTakeOrderList } from "./components/Modules/Retailer Management/Take_Order";
import { Reatiler_Manage_OrderHistory } from "./components/Modules/Retailer Management/Order_history";
import { ReatilerOutstandingList } from "./components/Modules/Retailer Management/Outstanding";
import { DailySummeryManagement_Nav, SheduleManagement_Nav } from "./components/layout/navconfig/navConfig";
import { Shedule_Management_Layouts } from "./components/layout/RootLayouts/Shedule_Management_Layouts";
import { DailyScheduleManagement } from "./components/Modules/Schedule Management/Daily_Shedule";
import { CreateSchedule } from "./components/Modules/Schedule Management/CreateShedule";
import { UnitGrouping } from "./components/Modules/Schedule Management/UnitGrouping";
import { SummeryMnagemet_Layout } from "./components/layout/RootLayouts/DailySummeryManagement_layout";
import { DailySummary } from "./components/Modules/DailySummeryManagement/DailySummery";
import { Testing } from "./pages/Testing";
import { ReportAnalityical_Layout } from "./components/layout/RootLayouts/ReportsAnalytics";
import { Dashboard } from "./components/Modules/Reports and Analytics/ReportsandAnalytics";
import { Communication_Nav } from "./components/layout/navconfig/navConfig";

import { Communication } from "./components/Modules/CommunicationManagement/Communication";
import { Communication_Layout } from "./components/layout/RootLayouts/Communication_Layout";
import { Privacy_policy_Layout } from "./components/layout/RootLayouts/PrivacyPolicy_Layout";
import { PrivacyPolicy } from "./components/Modules/TermsAndCondtion/PrivacyPolicy";
import { TermsAndConditions } from "./components/Modules/TermsAndCondtion/Terms_and_Conditions";
import { AboutUs } from "./components/Modules/TermsAndCondtion/AboutUs";
const App = () => (

  useEffect(() => {
    AOS.init({
      duration: 300,   // animation speed
      once: true,      // once mattum nadakkum
      easing: "ease-in-out",
    });
  }, []),
  <QueryClientProvider client={queryClient}>
    <CartProvider>
      <TooltipProvider>
        {/* < position="top-right"
          reverseOrder={false}  /> */}
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />

            <Route element={<ProtectedRoute />}>
              <Route path="/" element={<DashBoard />} />
              {/* rootlayouts */}

              <Route element={<InventoryManagemntLayout />}>
                <Route path="/products" element={<Index />} />
                <Route path="/product/:id" element={<ProductDetails />} />
                <Route path="/cart" element={<AddToCart />} />
                <Route path="/orders" element={<OrderHistory />} />
                <Route path="/order-details/:id" element={<OrderDetails />} />
                <Route path="/stock" element={<Stocks />} />
                <Route path="/schema" element={<Schemes />} />

              </Route>
              {/* OrderManagemnt */}

              <Route element={<OrdeerManagemntLayout />}>
                <Route path="/salesOrder" element={<SalesOrder />} />
                <Route path="/vanOrder" element={<VanOrder />} />
                <Route path="/Retialer" element={<RetailerOrder />} />
              </Route>

              {/* employe management */}

              <Route element={<Employee_Management_Layout />}>
                <Route path="/emp" element={< EmployeeManagement />} />
                <Route path="/addemp" element={< AddEmployee />} />
              </Route>

              {/* Reatiler Management */}

              <Route element={<Reatiler_Management_Layout />}>
                <Route path="/onboard_reaitler" element={< OnboardedRetailer />} />
                <Route path="/Reatiler_Request" element={< Reatiler_Request />} />
              </Route>
              <Route element={<Reatiler_Management_isnide_Layout />}>
                <Route path="/Reaitler_takeorder" element={< ReatilerManagementTakeOrderList />} />
                <Route path="/Reatiler_history" element={< Reatiler_Manage_OrderHistory />} />
                <Route path="/Reatiler_outstanding" element={< ReatilerOutstandingList />} />
              </Route>


              {/* shedule mamagement */}

              <Route element={<Shedule_Management_Layouts />}>
                <Route path="/daily-shedule" element={< DailyScheduleManagement />} />
                <Route path="/createshedule" element={< CreateSchedule />} />
                <Route path="/unit_group" element={< UnitGrouping />} />

              </Route>

              <Route element={<SummeryMnagemet_Layout />}>
                <Route path="/summery" element={< DailySummary />} />
                {/* <Route path="/createshedule" element={< CreateSchedule />} />
                <Route path="/unit_group" element={< UnitGrouping />} /> */}

              </Route>
              {/* report and analitces */}

              <Route element={<ReportAnalityical_Layout />}>
                <Route path="/report" element={< Dashboard />} />
                {/* <Route path="/createshedule" element={< CreateSchedule />} />
                <Route path="/unit_group" element={< UnitGrouping />} /> */}

              </Route>


              {/* communication  */}


              <Route element={<Communication_Layout />}>
                <Route path="/message" element={< Communication />} />
                {/* <Route path="/createshedule" element={< CreateSchedule />} />
                <Route path="/unit_group" element={< UnitGrouping />} /> */}

              </Route>

              {/* policay */}

              <Route element={<Privacy_policy_Layout />}>
                <Route path="/privacy_policy" element={< PrivacyPolicy />} />
                <Route path="/Condition" element={< TermsAndConditions />} />
                <Route path="/about" element={< AboutUs />} />

              </Route>









              <Route path="/testing" element={<Testing />} />

            </Route>
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </CartProvider>
  </QueryClientProvider>
);

export default App;
