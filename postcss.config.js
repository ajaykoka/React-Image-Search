const tailwindcss = require('tailwindcss');

module.exports = {
    plugins: [
        tailwindcss('./tailwind.js'), // include tailwind.js file
        require('autoprefixer')
    ]
}