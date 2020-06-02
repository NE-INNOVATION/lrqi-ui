FROM node:10-alpine as builder

COPY package.json package-lock.json ./

RUN npm install && mkdir /lrqi-web && mv ./node_modules ./lrqi-web

WORKDIR /lrqi-web

COPY . .

RUN npm run ng build --prod

FROM nginxinc/nginx-unprivileged
COPY ./config/nginx.conf /etc/nginx/conf.d/default.conf

COPY --from=builder /lrqi-web/dist/lrqi-ui /usr/share/nginx/html

ENTRYPOINT ["nginx", "-g", "daemon off;"]
