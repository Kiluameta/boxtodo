import React, { createContext, useState, useContext } from 'react'

export const GlobalContext = createContext({})

export const GlobalProvider = ({ children }) => {

    const [userSession, setUserSession] = useState({})

    //LOADING
    const [loading, setLoading] = useState(false)
    const [modalLoading, setModalLoading] = useState(false)

    const statesReturn = {
        loading, setLoading,
        modalLoading, setModalLoading
    }

    return (
        <GlobalContext.Provider value={{userSession, setUserSession, ...statesReturn}} >
            {children}
        </GlobalContext.Provider>
    )

}

export const useUser = () => useContext(GlobalContext)