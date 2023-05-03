FROM node:16.14.0-slim as node-builder
WORKDIR /app
COPY . ./
RUN npm ci
CMD ["/app/entrypoint.sh"]