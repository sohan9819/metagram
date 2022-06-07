import './style/app.css';
import { RouterRoutes } from './routes/routes';
import axios from 'axios';
import { useSelector } from 'react-redux';
import {
  selectCurrentToken,
  selectCurrentUserStatus,
} from './features/auth/authSlice';
import { useEffect } from 'react';

function App() {
  const token = useSelector(selectCurrentToken);
  const authStatus = useSelector(selectCurrentUserStatus);

  useEffect(() => {
    if (authStatus) {
      axios.defaults.headers.common['authorization'] = token;
    }
  }, [token, authStatus]);

  return (
    <div className='App'>
      <RouterRoutes />
    </div>
  );
}

export default App;
