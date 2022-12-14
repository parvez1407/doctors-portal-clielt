import { RouterProvider } from 'react-router-dom';
import './App.css';
import { router } from './routes/routes/routes';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <div className='max-w-[1440px] mx-auto text-gray-500'>
      <ToastContainer position="top-center" />
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
