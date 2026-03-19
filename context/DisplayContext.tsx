import React, { createContext, Dispatch, ReactNode, SetStateAction, useState } from 'react'

type DisplayContextType = {
    displayed: string
    setDisplayed: Dispatch<SetStateAction<string>>
}

export const DisplayContext = createContext<DisplayContextType | undefined>(undefined)

const DisplayProvider = ({ children }: { children: ReactNode }) => {
    const [displayed, setDisplayed] = useState("0")
    return (
        <DisplayContext.Provider value={{ displayed, setDisplayed }}>
            {children}
        </DisplayContext.Provider>
    )
}

export default DisplayProvider