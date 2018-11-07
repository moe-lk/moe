# Dev Dependencies

* docker
* docker-composer

# Start working 

* git clone git@github.com:moe-lk/moe.git && cd moe
* docker-compose build && docker-compose up

# Run migration
* docker exec -it moe_employee-service_1  php ./vendor/bin/phinx migrate -e development

