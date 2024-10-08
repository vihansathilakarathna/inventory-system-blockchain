import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from './Pages/Home/MainPage';
import LoginPage from './Pages/Home/LoginPage';
import SignupPage from './Pages/Home/SignupPage';
import HomePage from './Pages/Admin/HomePage';
import EditAdminProfilePage from './Pages/Admin/EditAdminProfilePage';
import InventoryAdminPage from './Pages/Admin/InventoryAdminPage';
import OrdersPage from './Pages/Admin/OrdersPage';
import ReportsPage from './Pages/Admin/ReportsPage';
import SalesPage from './Pages/Admin/SalesPage';
import StockPage from './Pages/Admin/StockPage';
import DashboardPage from './Pages/User/DashboardPage';
import InventoryPage from './Pages/User/InventoryPage';
import NotificationPage from './Pages/User/NotificationPage';
import SupportPage from './Pages/User/SupportPage';
import EditProfilePage from './Pages/User/EditProfilePage';
import ClientPage from './Pages/Admin/ClientPage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
      <Route path="/" element={<MainPage />}></Route>
      <Route path='/login' element={<LoginPage />}></Route>
      <Route path='/signup' element={<SignupPage/>}></Route>
      <Route path='/admin/dashboard' element={<HomePage/>}></Route>
      <Route path='/admin/editprofile' element={<EditAdminProfilePage />}></Route>
      <Route path='/admin/inventory' element={<InventoryAdminPage />}></Route>
      <Route path='/admin/orders' element={<OrdersPage />}></Route>
      <Route path='/admin/reports' element={<ReportsPage />}></Route>
      <Route path='/admin/sales' element={<SalesPage />}></Route>
      <Route path='/admin/stock' element={<StockPage />}></Route>
      <Route path='/user/dashboard' element={<DashboardPage />}></Route>
      <Route path='/user/orders' element={<InventoryPage />}></Route>
      <Route path='/user/history' element={<NotificationPage />}></Route>
      <Route path='/user/help' element={<SupportPage />}></Route>
      <Route path='/editprofile' element={<EditProfilePage />}></Route>
      <Route path='/admin/clients' element={<ClientPage />}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
