import React, { useContext, useEffect, useState } from 'react'
import { DataContext } from '../../context/DataProvider'
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import routes from '../../utils/routes';
import useAxios from '../../hooks/useAxios';
import Loader from '../atoms/loader';

const PrivateRoute = () => {
  const axios = useAxios();
  const dataContext = useContext(DataContext);
  const [accessToken, setAccessToken] = dataContext.token
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const RefreshToken = async() => {
      if (!accessToken) {
        try {
          const newAccessToken = await axios.refreshAccessToken();
          if (newAccessToken) {
            setAccessToken(newAccessToken);
            setIsLoading(false);
          }
          if (newAccessToken == null) {
            setIsLoading(false);
          }
        }
        catch(err) {
          console.log(`Exception: ${err}`)
          setIsLoading(false);
        }
      }
      else {
        setIsLoading(false);
      }
    }
    RefreshToken();
  }, [accessToken, axios, setAccessToken])  

  
  return (
    isLoading
      ? <Loader/>
      :
        accessToken 
        ?
        <Outlet />
        : <Navigate to={routes.login.path} state={{ from: location }} replace />
  )
}

export default PrivateRoute