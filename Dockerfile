FROM node:14-alpine

# Create the directory
ENV APP_ROOT /landing
RUN mkdir ${APP_ROOT}
WORKDIR ${APP_ROOT}

# NPM Build Files
COPY package.json ${APP_ROOT}
COPY yarn.lock ${APP_ROOT}
COPY nuxt.config.js ${APP_ROOT}
RUN yarn --frozen-lockfile

# Source Files
ADD ./src ${APP_ROOT}/src
RUN yarn build

# Environment Variables
ENV HOST 0.0.0.0
ENV PORT 3000

# Entrypoint
ENTRYPOINT [ "yarn", "start" ]
