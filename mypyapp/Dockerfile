FROM registry.access.redhat.com/ubi7/ubi:latest
RUN mkdir /opt/src
COPY index.html /opt/src
WORKDIR /opt/src
EXPOSE 8080
VOLUME /data
LABEL author Swapnil Jain <swapnil@linux.com>
LABEL description this is a sample docker file
CMD python -m SimpleHTTPServer 8080
