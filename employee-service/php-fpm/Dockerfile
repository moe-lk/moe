# Dockerfile for a php:7.2-apache container

FROM phpearth/php:7.2-nginx

RUN apk add --no-cache php7.2-sodium   php7.2-intl php7.2-pdo_mysql \
    && apk add --no-cache php7-mysqli mysql
RUN apk add --no-cache phpunit
RUN apk add --no-cache composer

ADD . /var/www/html

WORKDIR /var/www/html

RUN sed -ri 's/^www-data:x:82:82:/www-data:x:1000:50:/' /etc/passwd

EXPOSE 80