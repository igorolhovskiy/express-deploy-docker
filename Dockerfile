FROM node:dubnium

WORKDIR /opt

RUN mkdir -p /root/.ssh/ && \
    apt-get update && \
    apt-get install -y rsync \
                    git && \
    apt-get clean && \
    rm -rf /var/lib/apt/lists/*

COPY ./app/package*.json /opt/
COPY ./docker-entrypoint.sh /docker-entrypoint.sh
 
RUN chmod +x /docker-entrypoint.sh && \
    npm install --quiet

VOLUME /opt

EXPOSE 3000

ENTRYPOINT ["/docker-entrypoint.sh"]