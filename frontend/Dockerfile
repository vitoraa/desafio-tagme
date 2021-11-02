FROM  node:14.16.0 as build-step
RUN mkdir -p /app
WORKDIR /app
COPY package.json /app
RUN npm install
COPY . /app
RUN npm run build

FROM nginx:1.20.1
COPY nginx.conf /etc/nginx/nginx.conf
COPY --from=build-step /app/dist/frontend /usr/share/nginx/html
EXPOSE 4200:80