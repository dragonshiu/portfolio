/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}', 'node_modules/flowbite-react/lib/esm/**/*.js'],
    theme: {
        extend: {
            fontFamily: {
                satoshi: ['Satoshi', 'sans-serif'],
                inter: ['Inter', 'sans-serif'],
                philo: ['Philosopher', 'sans-serif'],
                zilla: ['Zilla Slab', 'sans-serif'],
            },
            colors: {
                b1: '#8ecae6',
                b2: '#219ebc',
                b3: '#126782',
                b4: '#023047',
                y1: '#ffb703',
                y2: '#fd9e02',
                y3: '#fb8500',
            },
            keyframes: {
                wiggle: {
                    '0%, 100%': { transform: 'rotate(-3deg)' },
                    '50%': { transform: 'rotate(3deg)' },
                },
                spin: {
                    '100%': { transform: 'rotateY(360deg)' },
                },
            },
            animation: {
                wiggle1: 'wiggle 1s ease-in-out infinite',
                spin: 'spin 1s linear',
            },
        },
    },
    plugins: [require('flowbite/plugin')],
};
