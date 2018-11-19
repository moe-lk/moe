# Dev Dependencies

* docker
* docker-composer

# Start working 

* git clone git@github.com:moe-lk/moe.git && cd moe
* docker-compose build && docker-compose up

# Install hrm-web dependencies
* docker exec -it moe_hrm-web_1  npm install && docker exec -it moe_hrm-web_1   npm audit fix

# Install employee-service dependencies
* docker exec -it moe_employee-service_1 composer install && docker exec -it moe_employee-service_1 composer dump-autoload -o

# Run migration
* docker exec -it moe_employee-service_1  php ./vendor/bin/phinx migrate -e development

# Run Seeder
* docker exec -it moe_employee-service_1 php ./vendor/bin/phinx seed:run -e development

