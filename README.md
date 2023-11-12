# Dashboard app

## Introduction

A a React application that fetches and renders the list of dashboards available to a DHIS2 user.
The app is hosted [here], with the source code in github. The repo can be found [here].

## Technology Stack

- React
- JavaScript
- CSS Module

## Key Features

- Collapsible Dashboard Cards: Users can expand and collapse dashboard cards to view their details.
- Initial Dashboard Expansion: The first dashboard card is expanded by default upon application load.
- Embedded Dashboard Items: Expanded dashboards display their corresponding items, providing a comprehensive overview.
- Item Type Recognition: Icons are displayed alongside dashboard items based on their type (visualization, map, text).
- Dashboard Starring: Users can star dashboards to keep them easily accessible across sessions.
- Type-Based Filtering: A filter allows users to view only dashboard items of a specific type.
- Persistent Filter Selection: The selected filter remains active when expanding or collapsing dashboard cards.
- Performance Optimization: The application is designed to optimize performance and avoid unnecessary re-renders.

## Local Installation

Should you want to install the application locally, follow these steps:

1. Install Node.js and npm if you haven't already. You can download them from the official website: [Node.js download page](https://nodejs.org/en/download/) and [npm download page](https://www.npmjs.com/get-npm)

2. Clone the repository using Git:
   git clone <repository URL>.

3. Navigate to the cloned repository directory:
   cd <cloned repository directory>.

4. Install the dependencies:

```sh
npm install ...
```

5. Start the development server:

```sh
npm start
```

This will start a local development server and open the application in your browser. You can now make changes to the code and see them reflected in the browser without having to restart the server.

## Notes

## Design Assumptions and Considerations

- The application relies on a stable DHIS2 API endpoint for fetching dashboards.
- Code quality takes precedence over implementing every feature.

## Potential Improvements

- **Advanced Search Functionality:** Implement a more sophisticated search feature to enable users to locate specific dashboards or items based on various criteria.
- **Customizable Dashboard Layouts:** Provide users with the ability to customize dashboard layouts, allowing them to arrange and organize dashboards according to their preferences.

## Challenges

While developing this application, I encountered some challenges that prevented me from fully implementing certain features:

- Dynamic Dashboard Switching: Successfully handling the dynamic expansion and collapse of dashboard cards proved to be a complex task. Despite my efforts, I was unable to fully implement this feature to ensure seamless focus on the chosen dashboard.

- Testing Coverage: Although I wrote unit tests for some components using Jest and React Testing Library, I was unable to complete testing for all components due to time constraints. Ensuring comprehensive testing for all components remains a priority for future development.
