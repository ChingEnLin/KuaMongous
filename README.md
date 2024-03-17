# KuaMongous 
KuaMongous, the Azure CosmosDB Visualizer, is a web application that allows users to interact with Azure CosmosDB graphically, presenting the data as a diagram rather than just a list of JSON documents. The application provides an intuitive and user-friendly interface for visualizing and managing data stored in Azure CosmosDB.

## Features

- **Graphical Representation**: Display Azure CosmosDB data in a graphical format, enabling users to visualize relationships between entities.
- **Interactive Diagram**: Users can interact with the diagram by zooming, panning, and clicking on nodes to view details.
- **CRUD Operations**: Perform CRUD operations (Create, Read, Update, Delete) on the data through the graphical interface.
- **Search Functionality**: Quickly find specific entities within the database using the search feature.
- **Data Filtering**: Filter displayed data based on various criteria.
- **Real-time Updates**: Receive real-time updates to the diagram when changes occur in the database.

## Technologies Used

- **Backend**: Golang
- **Frontend**: React, TypeScript
- **Database**: Azure CosmosDB
- **Containerization**: Docker

## Getting Started

### Prerequisites

- Install Docker on your machine.

### Running the Application

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/azure-cosmosdb-visualizer.git
   ```

2. Navigate to the project directory:

   ```bash
   cd azure-cosmosdb-visualizer
   ```

3. Run the following command to start the application:

   ```bash
   docker-compose up
   ```

4. Access the application by opening your web browser and navigating to `http://localhost:3000`.

## Contributing

Contributions are welcome! Please follow the steps below to contribute to this project:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/your-feature-name`).
3. Make your changes.
4. Commit your changes (`git commit -am 'Add new feature'`).
5. Push to the branch (`git push origin feature/your-feature-name`).
6. Create a new Pull Request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgements

- This project was inspired by the need for a user-friendly interface to interact with Azure CosmosDB.
- We would like to thank the open-source community for their valuable contributions.

## Contact

For questions or feedback, please contact [your-email-address].
```

Replace `[your-username]`, `[your-email-address]`, and any other placeholders with appropriate values specific to your project. Additionally, ensure that you have a `LICENSE` file in your repository containing the license information for your project.