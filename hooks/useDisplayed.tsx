import { DisplayContext } from '@/context/DisplayContext'
import { useContext } from 'react'

const useDisplayed = () => {

    const ctx = useContext(DisplayContext)

    if (!ctx) {
        throw new Error("useDisplayed must be used within DisplayContextProvider!")
    }
    return ctx
}

export default useDisplayed