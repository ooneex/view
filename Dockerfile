FROM node:20.2-alpine3.16

WORKDIR /home/node/app
RUN npm install -D tailwindcss postcss autoprefixer postcss-import postcss-nesting @tailwindcss/container-queries
RUN echo "#! /bin/sh" > build.sh
RUN echo "npx tailwindcss --postcss -i ./public/main.css -o ./public/dist/main.css -m" >> build.sh
RUN echo "#! /bin/sh" > watch.sh
RUN echo "npx tailwindcss --postcss -i ./public/main.css -o ./public/dist/main.css --watch" >> watch.sh

RUN echo -e "module.exports = {\
  plugins: {\n\
    'postcss-import': {},\n\
    'tailwindcss/nesting': 'postcss-nesting',\n\
    'tailwindcss': {},\n\
    'autoprefixer': {},\n\
    ...(process.env.NODE_ENV === 'production' ? { cssnano: {} } : {}),\n\
  },\n\
};\n\
" > postcss.config.js
