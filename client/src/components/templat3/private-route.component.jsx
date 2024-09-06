import React, { useContext } from 'react'
import { DataContext } from '../../context/DataProvider'
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import routes from '../../utils/routes';

const PrivateRoute = () => {
  const dataContext = useContext(DataContext);
  const [accessToken,] = dataContext.token
  const location = useLocation();

  return (
    accessToken
      ? <Outlet />
      : <Navigate to={routes.login.path} state={{ from: location }} replace />
  )
}

export default PrivateRoute