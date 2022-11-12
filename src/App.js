import { RouterProvider } from 'react-router-dom';
import './App.css';
import { router } from './routes/routes/routes';

function App() {
  return (
    <div className='max-w-[1440px] mx-auto text-gray-500'>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
