FROM nginx:1.17.1-alpine
COPY nginx.conf /etc/nginx/nginx.conf
COPY /dist /usr/share/nginx/html

COPY localhost.crt /etc/ssl/certs/
COPY localhost.key /etc/ssl/private/

COPY default-ssl.conf /etc/nginx/conf.d/default-ssl.conf