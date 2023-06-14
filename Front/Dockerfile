# syntax=docker/dockerfile:1

FROM node:alpine

ARG APP_DIR="/Front"
ARG USER_ID=1000
ARG USER_HOME_DIR="/tmp"

ENV NPM_CONFIG_LOGLEVEL=warn NG_CLI_ANALYTICS=false TZ=UTC
ENV HOME "$USER_HOME_DIR"

WORKDIR $APP_DIR
COPY . .
EXPOSE 4200

ARG NG_CLI_VERSION=16.0.1
ARG NODE_VERSION=9.6.7 
LABEL angular-cli=$NG_CLI_VERSION node=$NODE_VERSION

RUN set -xe \
    && mkdir -p $USER_HOME_DIR \
    && chown $USER_ID $USER_HOME_DIR \
    && chmod a+rw $USER_HOME_DIR \
    && mkdir -p $APP_DIR \
    && chown $USER_ID $APP_DIR \
    && chown -R node /usr/local/lib /usr/local/include /usr/local/share /usr/local/bin \
    && (cd "$USER_HOME_DIR"; su node -c "npm install -g @angular/cli@$NG_CLI_VERSION; npm install -g pnpm; npm cache clean --force")

USER $USER_ID

RUN ng serve

CMD ["npm", "start"]
