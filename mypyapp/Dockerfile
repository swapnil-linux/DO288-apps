FROM ubi7/ubi
RUN mkdir /opt/src
COPY index.html /opt/src
WORKDIR /opt/src
EXPOSE 8080
CMD python -m SimpleHTTPServer 8080
