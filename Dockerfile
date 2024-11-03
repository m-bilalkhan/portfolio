FROM node:10 AS ui-build
WORKDIR /usr/src/app
COPY source_code/ ./source_code/
RUN cd source_code && npm install && npm run build

# Stage 2: Serve the app with Nginx
FROM nginx:alpine AS server-build

# Copy the built files from the ui-build stage to the Nginx HTML directory
COPY --from=ui-build /usr/src/app/source_code/dist /usr/share/nginx/html

# Expose port 80 for the web server
EXPOSE 80

# Start Nginx in the foreground
CMD ["nginx", "-g", "daemon off;"]