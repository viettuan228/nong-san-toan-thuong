/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        extend: {
            keyframes: {
                bounce: {
                    '0%, 100%': {
                        transform: 'translateY(-5%)',
                        animationTimingFunction: 'cubic-bezier(0.8,0,1,1)',
                    },
                    '50%': {
                        transform: 'none',
                        animationTimingFunction: 'cubic-bezier(0,0,0.2,1)',
                    },
                },
            },
        },
        container: {
            // you can configure the container to be centered
            center: true,

            // or have default horizontal padding
            padding: '1rem',

            // default breakpoints but with 40px removed
            screens: {
                sm: '600px',
                md: '728px',
                lg: '984px',
                xl: '1200px',
                '2xl': '1496px',
            },
        },
        colors: {
            lime: '#88C74A',
            limeHover: '#6FAA34',
            gray: '#999489',
            gray2: '#ededed',
            black: '#252525',
            white: '#fff',
            bgGray: '#F5F5F5',
            red: '#e44343',
        },
    },
    plugins: [],
}
