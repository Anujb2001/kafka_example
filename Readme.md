# Kafka Example Project

This project demonstrates how to set up and run a Kafka instance using Docker containers.

## Prerequisites

- Docker installed on your machine
- Basic knowledge of Kafka and Zookeeper

## Getting Started

### Start Zookeeper Container

To start the Zookeeper container and expose port 2181, run the following command:

```sh
docker run -p 2181:2181 zookeeper
```

### Start Kafka Container

To start the Kafka container, expose port 9092, and set up the necessary environment variables, run the following command:

```sh
docker run -p 9092:9092 \
-e KAFKA_ZOOKEEPER_CONNECT=<PRIVATE_IP>:2181 \
-e KAFKA_ADVERTISED_LISTENERS=PLAINTEXT://<PRIVATE_IP>:9092 \
-e KAFKA_OFFSETS_TOPIC_REPLICATION_FACTOR=1 \
confluentinc/cp-kafka
```

Replace `<PRIVATE_IP>` with your machine's private IP address.

## Additional Information

- For more details on Kafka configuration, visit the [official Kafka documentation](https://kafka.apache.org/documentation/).
- For more details on Zookeeper configuration, visit the [official Zookeeper documentation](https://zookeeper.apache.org/doc/current/).


## Project Structure

The project has the following structure:

```
Kafka app/
├── docker-compose.yml
├── src/
│   ├── producer.py
│   └── consumer.py
└── README.md
```

### Files and Directories

- `docker-compose.yml`: This file contains the Docker Compose configuration to set up both Kafka and Zookeeper containers. It simplifies the process of starting and managing multiple Docker containers.

- `src/`: This directory contains the source code for the Kafka producer and consumer.

    - `producer.py`: This script contains the code to produce messages to a Kafka topic. It connects to the Kafka broker and sends messages to a specified topic.

    - `consumer.py`: This script contains the code to consume messages from a Kafka topic. It connects to the Kafka broker and listens for messages on a specified topic.

- `README.md`: This file provides an overview of the project, including prerequisites, setup instructions, and additional information.

## Running the Project

To run the project, follow these steps:

1. Navigate to the project directory:

     ```sh
     cd /D:/Anuj/Study/project/Kafka example/Kafka app/
     ```

2. Start the Kafka and Zookeeper containers using Docker Compose:

     ```sh
     docker-compose up
     ```

3. Run the producer script to send messages to the Kafka topic:

     ```sh
     python src/producer.py
     ```

4. Run the consumer script to read messages from the Kafka topic:

     ```sh
     python src/consumer.py
     ```

Make sure to have Python installed on your machine and the necessary dependencies listed in the `requirements.txt` file (if any).