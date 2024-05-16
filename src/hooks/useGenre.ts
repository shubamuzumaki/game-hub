import genre from '../data/genre'
export interface Genre {
  id: number
  name: string
  image_background: string
}

const useGenre = () => ({ data: genre, error: null, isLoading: null })

export default useGenre
