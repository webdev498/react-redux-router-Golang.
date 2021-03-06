import * as ServerAction from '../actions/ServerAction';
import * as TaskAction from '../actions/TaskAction';

export function startup(hostname, username, password) {
  return dispatch => {
    dispatch(ServerAction.initServerService(hostname, username, password));
    dispatch(TaskAction.initTaskService(hostname, username, password));
  };
}
