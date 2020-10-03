# phase one
FROM node:alpine as builder
WORKDIR '/app'
COPY package.json .
RUN npm install
COPY . .
RUN npm run build


# /app/build <- all the stuff
# phase two
FROM nginx
# expose port in elastic beanstalk
EXPOSE 80
COPY --from=builder /app/build /usr/share/nginx/html
