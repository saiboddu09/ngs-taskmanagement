// eslint-disable-next-line strict
app.controller('rootController', function ctrl($scope) {

  // BLOCK: method definitions
  let initController = () => {
    // set the min date to today for the task date as they cannot be in the past
    let minDate = new Date().toISOString().substring(0, 10);
    angular.element('input[name="task_date"]').attr('min', minDate);
    // initialize form scope model
    _initTaskModel();
  };

  let createTask = ($event) => {
    $event.preventDefault();
    let taskId = 1;
    if ($scope.taskList.length !== 0) {
      let recentTask = $scope.taskList[$scope.taskList.length - 1];
      taskId = ++recentTask.id;
    }
    let taskObj = angular.copy($scope.task);
    taskObj.id = taskId;
    taskObj.date = taskObj.date.toDateString();

    $scope.taskList.push(taskObj);
    $scope.taskLogs.push({
      event: 'ADD',
      time: _getTodayDate()
    });

    _saveTaskList($scope.taskList);
    _saveTaskLogs($scope.taskLogs);
    _initTaskModel();
  };

  let removeTask = (taskId) => {
    let toDelete = confirm('Are you sure you want to delete this task?');
    if (!toDelete) {
      return;
    }
    let index = $scope.taskList.findIndex(({id}) => id === taskId);
    if (index === -1) {
      return alert('Task is unknown and cannot be deleted');
    }

    $scope.taskList.splice(index, 1);
    $scope.taskLogs.push({
      event: 'DELETED',
      time: _getTodayDate()
    });

    _saveTaskList($scope.taskList);
    _saveTaskLogs($scope.taskLogs);
  };

  //BLOCK: private non-scope functions
  let _initTaskModel = () => {
    $scope.task = {
      name: null,
      date: null,
      description: null
    };
  };

  let _saveTaskList = (taskList) => {
    localStorage.setItem('taskList', JSON.stringify(taskList));
  };

  let _getTaskList = () => {
    let taskList = localStorage.getItem('taskList') || '[]';
    return JSON.parse(taskList);
  };

  let _saveTaskLogs = (taskLogs) => {
    localStorage.setItem('taskLogs', JSON.stringify(taskLogs));
  };

  let _getTaskLogs = () => {
    let taskLogs = localStorage.getItem('taskLogs') || '[]';
    return JSON.parse(taskLogs);
  };

  let _getTodayDate = () => {
    let date = new Date();
    let dd = date.getDate();
    let mm = date.getMonth() + 1;
    let yy = date.getFullYear().toString().substr(-2);
    if (dd < 10) {
      dd = '0' + dd;
    }
    if (mm < 10) {
      mm = '0' + mm;
    }
    return dd + '-' + mm + '-' + yy;
  };

  //BLOCK: initialize scope
  $scope.taskList = _getTaskList();
  $scope.taskLogs = _getTaskLogs();
  $scope.createTask = createTask;
  $scope.removeTask = removeTask;

  //BLOCK: initial function calls
  initController();
});
