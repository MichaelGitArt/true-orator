import path from 'path'
import { defineConfig } from 'windicss/helpers'

export default defineConfig({
  attributify: true,
  preflight: true,
  shortcuts: {
    'btn': 'inline-flex items-center justify-center py-2 px-5 rounded-lg transition bg-gray-100 hover:bg-gray-200 :dark:bg-gray-400 dark:bg-opacity-20 dark:hover:bg-opacity-40',
    'btn--primary': 'bg-red-500 hover:bg-red-600 text-white font-semibold dark:bg-green-600 dark:hover:bg-green-500 dark:text-black',
    'btn--outline-gray': 'border-1 border-solid border-gray-300',
  },
  theme: {
    extend: {
      colors: {
        'accent': '#009688',
        'accent-dark': '#00796B',
      },
    },
  },
})
