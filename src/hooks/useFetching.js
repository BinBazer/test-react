import { useState } from "react";

export const useFetching = (callbakc) => {
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState('')
    
    const fetching = async () => {
        try {
            setIsLoading(true)
            await callbakc()
        } catch (e) {
            setError(e.message)
        } finally {
            setIsLoading(false)
        }
    }
    return [fetching, isLoading, error]
}