FROM registry.access.redhat.com/ubi7/ubi:latest
RUN mkdir /opt/src
COPY index.html /opt/src
WORKDIR /opt/src
EXPOSE 8080
CMD python -m SimpleHTTPServer 8080
