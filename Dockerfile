FROM node:10-alpine as builder

COPY package.json package-lock.json ./

RUN npm install && mkdir /lrqi-web && mv ./node_modules ./lrqi-web

WORKDIR /lrqi-web

COPY . .

RUN npm run ng build --prod

FROM nginx:stable

# support running as arbitrary user which belogs to the root group
RUN chmod g+rwx /var/cache/nginx /var/run /var/log/nginx
# users are not allowed to listen on priviliged ports
RUN sed -i.bak 's/listen\(.*\)80;/listen 8080;/' /etc/nginx/conf.d/default.conf
RUN sed -i '3d' /etc/nginx/conf.d/default.conf
EXPOSE 8080
# comment user directive as master process is run as user in OpenShift anyhow
RUN sed -i.bak 's/^user/#user/' /etc/nginx/nginx.conf

RUN addgroup nginx root
USER nginx

## Remove default nginx index page
##RUN rm -rf /usr/share/nginx/html/*

COPY --from=builder /lrqi-web/dist/lrqi-ui /usr/share/nginx/html

ENTRYPOINT ["nginx", "-g", "daemon off;"]