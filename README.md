# Dev Dependencies

* docker
* docker-composer

# Start working 

* `git clone git@github.com:moe-lk/moe.git && cd moe`
* `docker-compose build && docker-compose up`

# Install hrm-web dependencies
* `docker exec -it moe_hrm-web_1  npm install && docker exec -it moe_hrm-web_1   npm audit fix`

# Install employee-service dependencies
* `docker exec -it moe_employee-service_1 composer install && docker exec -it moe_employee-service_1 composer dump-autoload -o`

# Run migration
* `docker exec -it moe_employee-service_1  php ./vendor/bin/phinx migrate -e development`

# Run rollback
* `docker exec -it moe_employee-service_1  php ./vendor/bin/phinx rollback -e development`


# Run Seeder
* docker exec -it moe_employee-service_1 php ./vendor/bin/phinx seed:run -e development


# Loge in to the DB on 
bash in to the container
* `docker exec -it  e8af840a8593_e8af840a8593_e8af840a8593_e8af840a8593_moe_employee-db_1 /bin/sh`
* mysql -uroot -p
* pw:  my_secret_pw_shh
* use edu

# Create Migration
* docker exec -it moe_employee-service_1 php ./vendor/bin/phinx create #name

# Create Seeder
* docker exec -it moe_employee-service_1 php ./vendor/bin/phinx seed:create AddPrefixData 
