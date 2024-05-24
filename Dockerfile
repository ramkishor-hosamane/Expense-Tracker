# Use the Elasticsearch base image for version 7.0.0
FROM docker.elastic.co/elasticsearch/elasticsearch:7.0.0

# Set environment variables
ENV discovery.type=single-node
ENV bootstrap.memory_lock=true
ENV ES_JAVA_OPTS="-Xms512m -Xmx512m"
ENV MAX_MAP_COUNT=262144

# Expose Elasticsearch ports
EXPOSE 9200 9300



#docker build -t my_elasticsearch_image .
#docker run --name elasticsearch -d -p 9200:9200 -p 9300:9300 my_elasticsearch_image
