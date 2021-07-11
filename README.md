# RS School REST service

## Prerequisites

- Git - [Download & Install Git](https://git-scm.com/downloads).
- Node.js - [Download & Install Node.js](https://nodejs.org/en/download/) and the npm package manager.

## Downloading

```
git clone {repository URL}
```

## Installing NPM modules

```
npm install
```

## Running application

```
npm start
```

After starting the app on port (8080 as default) you can open
in your browser OpenAPI documentation by typing http://localhost:8080/doc/.
For more information about OpenAPI/Swagger please visit https://swagger.io/.

## Testing

After application running open new terminal and enter:

To run all tests without authorization

```
npm test
```

To run only one of all test suites (users, boards or tasks)

```
npm test <suite name>
```

To run all test with authorization

```
npm run test:auth
```

To run only specific test suite with authorization (users, boards or tasks)

```
npm run test:auth <suite name>
```

## Development

If you're using VSCode, you can get a better developer experience from integration with [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) and [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) extensions.

## Auto-fix and format

```
npm run lint
```

### Debugging in VSCode

Press <kbd>F5</kbd> to debug.

For more information, visit: https://code.visualstudio.com/docs/editor/debugging


## All incoming requests data are logged to the file logging.log
## All unhandled errors are logged to the file errors.log


### Start the application from the directory NodeJS2021Kurs using the commands  npm start or npm start2 or npm start3

### To start the application from the directory NodeJS2021Kurs using Docker:

  To start both express application container and PostgreSQL database container use the command "docker-compose up"

  To start just the express application container use the commands "docker build . -t express-app-image" and
  "docker run -p 8080:8080 express-app-image"
