FROM phpdockerio/php71-fpm:latest

# Install selected extensions and other stuff
RUN apt-get update \
    && apt-get -y --no-install-recommends install  php7.1-mysql php7.1-intl php7.1-mbstring php7.1-sqlite3\
    && apt-get clean; rm -rf /var/lib/apt/lists/* /tmp/* /var/tmp/* /usr/share/doc/*



# CMD ['php','cake.php','migrations','migrate','../config/Snapshot/3.11.0/20171129034724_V3130.php']

# CMD ['php','cake.php','migrations','migrate']

# CMD ['php','cake.php','migrations','seed','--source=../config/Snapshot/3.11.0/Seeds']

WORKDIR "/var/www/myapp"

