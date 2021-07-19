# Stage 1
FROM 14.16.1-alpine3.13 as builder

RUN mkdir -p /app
WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

ENV DOCKER=true
RUN npm run build

# Stage 2
FROM nginx:1.17-alpine

RUN mkdir -p /static_files
WORKDIR /static_files

COPY --from=builder /app/public .
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
