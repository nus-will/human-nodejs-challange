## Will Human NodeJs Challange

### Development
```
cd human-nodejs-challange
touch .env
cp .env.example .env
docker-compose -f docker-compose-local.yml up
```

### Production
```
cd human-nodejs-challange

docker build . -t nuswill/human-nodejs-challange --build-arg API_PORT=3000

touch .env
cp .env.prod.example .env
docker-compose -f docker-compose-production.yml up
```

## Stack
- Express/TypeScript with Nx
- Docker
- Database Mysql
