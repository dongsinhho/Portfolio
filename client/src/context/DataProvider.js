import React, { createContext, useState } from 'react'


export const DataContext = createContext();

export const DataProvider = ({ children }) => {
    const [accessToken, setAccessToken] = useState("");

    const data = {
        token: [accessToken, setAccessToken],
    }

    return (
        <DataContext.Provider value={data}>
            {children}
        </DataContext.Provider>
    )
}