import axios from 'axios'

export default axios.create({
  baseURL: 'https://api.rawg.io/api',
  params: {
    key: 'd78abbcc328343a08526a2e7d479b57b',
  },
})
