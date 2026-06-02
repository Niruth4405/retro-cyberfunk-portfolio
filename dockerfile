
FROM node:20-alpine AS builder

WORKDIR /app

COPY package*.json ./
RUN npm ci                  # installs ALL deps (including devDeps)

COPY . .
RUN npm run build           # Vite compiles → outputs to /app/dist


FROM nginx:stable-alpine

COPY --from=builder /app/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]