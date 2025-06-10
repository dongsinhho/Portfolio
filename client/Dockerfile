FROM node:22-alpine AS build

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm install

COPY . .

RUN npm run build

FROM nginx:alpine
COPY --from=build /app/build /usr/share/nginx/html

COPY nginx.conf /etc/nginx/nginx.conf
ARG REACT_APP_API_URL
ENV REACT_APP_API_URL=$API_URL

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
