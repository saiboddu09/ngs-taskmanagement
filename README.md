# Task Management

Task list is a task management system that a person can type his todo task and save locally in his browser.

### Technology Used

Task management uses simple open souce libraries/projects to run:

* [AngularJS](https://angularjs.org/) - HTML based frontend framework
* [node.js](https://nodejs.org/en/) - Javascript based framework for providing the server
* [Express](http://expressjs.com/) - fast node.js network app framework
* [ESLint](https://eslint.org/) - Javascript based framework to maintain the code readability.
* [jQuery](https://jquery.com/) - Javascript based library for quick DOM manipulation

### Installation

Task management requires [Node.js](https://nodejs.org/) v12 to run. So, make sure you have node installed in your machine.

Install the dependencies and devDependencies and start the server.

```sh
$ cd task-management
$ npm install
$ npm start
```
This will start the application on `localhost:3001`. Navigate to that URL and start adding your tasks.

### Considerations
- The task fields are required and the task date cannot be less than the current date because the task is a todo task and it should be obviously in future.
- The task list is only shown when there is at least one task in the storage.
- The task logs/history is only shown when there is at least one task logs/history in the storage.
- When there is long task name then it is wrapped with eclipses.
- When there is long task description then it has a vertical scroll bar.
- The task date is shown as a date string(eg: Sun Jul 19 2020) for more better user experience.
- The task logs/history has the `Time` value in the format `DD-MM-YY`.
