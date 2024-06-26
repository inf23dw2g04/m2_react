### Overview of the Final Product

The final product is a task management system designed to demonstrate a full-stack application integrating OAuth 2.0 for secure authentication via GitHub. It features a robust backend API, containerized deployment using Docker, and a straightforward user interface for managing tasks, categories, and statuses.

* OAuth 2.0 Authentication:

Users authenticate through GitHub, ensuring secure access to the system. This integration simplifies the login process and enhances security by leveraging GitHub's authentication.

* Task Management:

Comprehensive APIs allow users to create, retrieve, update, and delete tasks. This functionality is essential for organizing and tracking work efficiently.

* Category and Status Management:

Users can categorize tasks and assign statuses, aiding in better organization and progress tracking. Categories and statuses can be managed through dedicated endpoints.

* Dockerized Deployment:

The entire application is containerized using Docker, facilitating easy deployment and environment consistency. This approach ensures that the application runs seamlessly across different environments.

*User Interface:

A minimalistic UI provides essential functionalities such as logging in via GitHub, viewing account details, and accessing documentation. The protected pages ensure that only authenticated users can interact with the system.

### Components:
* Backend: RESTful APIs built with Node.js, handling all CRUD operations for tasks, categories, statuses, and users.
* Database: Managed within a Docker container, providing a reliable and isolated data store.
* Frontend: Simple web pages for user interaction, including login and task management interfaces.

Overall, the final product is a well-rounded example of modern web application development, showcasing secure authentication, containerization, and efficient API design for task management.
