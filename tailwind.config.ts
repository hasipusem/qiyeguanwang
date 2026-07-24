import type { Config } from 'tailwindcss'

export default <Partial<Config>>{
  theme: {
    extend: {
      colors: { navy: '#0B1F33', gold: '#C9A86A', mist: '#F7F8FA' },
      fontFamily: { sans: ['Inter', '"Noto Sans SC"', 'sans-serif'] }
    }
  }
}
