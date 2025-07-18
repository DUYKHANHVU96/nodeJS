import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export function useLoading() {
    const [isLoading, setIsLoading] = useState(false)
    const location = useLocation()

    useEffect(() => {
        setIsLoading(true)
        const timer = setTimeout(() => {
            setIsLoading(false)
        }, 300) // Simulate loading time

        return () => clearTimeout(timer)
    }, [location.pathname])

    return isLoading
} 