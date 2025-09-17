import { useState, useEffect } from 'react'

export default async function useMovies(){
    const [loading, setLoading] = useState<boolean>(false)
    const [error, setError] = useState<string | null>(null)
    const [movieNames, setMovieNames] = useState<string[]>([])

}
