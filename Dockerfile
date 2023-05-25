FROM node:20.2-alpine3.16

WORKDIR /home/node/app
RUN npm install -D tailwindcss postcss autoprefixer postcss-import postcss-nesting
RUN echo "#! /bin/sh" > build.sh
RUN echo "npx tailwindcss -o ./public/dist/main.css -m" >> build.sh
RUN echo "#! /bin/sh" > watch.sh
RUN echo "npx tailwindcss -i ./public/main.css -o ./public/dist/main.css --watch" >> watch.sh
