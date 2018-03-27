export const ServerAppState = Object.freeze(
  {
    'APP_INIT_START': 'APP_INIT_START',
    'APP_INIT_SUCCESS': 'APP_INIT_SUCCESS',
    'APP_INIT_FAILURE': 'APP_INIT_FAILURE',
  }
);

export const ActionType = Object.freeze(
  {
    'APP_INIT_START': 'APP_INIT_START',
    'APP_INIT_SUCCESS': 'APP_INIT_SUCCESS',
    'APP_INIT_FAILURE': 'APP_INIT_FAILURE',
    // For REST.
    'GET_SERVER_LIST_START': 'GET_SERVER_LIST_START',
    'GET_SERVER_LIST_SUCCESS': 'GET_SERVER_LIST_SUCCESS',
    'GET_SERVER_LIST_FAILURE': 'GET_SERVER_LIST_FAILURE',
    'GET_SERVERGROUP_LIST_START': 'GET_SERVERGROUP_LIST_START',
    'GET_SERVERGROUP_LIST_SUCCESS': 'GET_SERVERGROUP_LIST_SUCCESS',
    'GET_SERVERGROUP_LIST_FAILURE': 'GET_SERVERGROUP_LIST_FAILURE',
    'CREATE_SERVERGROUP_START': 'CREATE_SERVERGROUP_START',
    'CREATE_SERVERGROUP_SUCCESS': 'CREATE_SERVERGROUP_SUCCESS',
    'CREATE_SERVERGROUP_FAILURE': 'CREATE_SERVERGROUP_FAILURE',
    // For WS.
    'ON_SERVER_CREATE': 'ON_SERVER_CREATE',
    'ON_SERVER_UPDATE': 'ON_SERVER_UPDATE',
    'ON_SERVER_DELETE': 'ON_SERVER_DELETE',
    'ON_SERVERGROUP_CREATE': 'ON_SERVERGROUP_CREATE',
    'ON_SERVERGROUP_UPDATE': 'ON_SERVERGROUP_UPDATE',
    'ON_SERVERGROUP_DELETE': 'ON_SERVERGROUP_DELETE',
    'ON_SERVERGROUP_DELETE_COLLECTION': 'ON_SERVERGROUP_DELETE_COLLECTION',
    'ON_SERVER_SERVERGROUP_CREATE': 'ON_SERVER_SERVERGROUP_CREATE',
    'ON_SERVER_SERVERGROUP_UPDATE': 'ON_SERVER_SERVERGROUP_UPDATE',
    'ON_SERVER_SERVERGROUP_DELETE': 'ON_SERVER_SERVERGROUP_DELETE',
    // For user operation.
    'OPEN_CREATE_SERVERGROUP_DIALOG': 'OPEN_CREATE_SERVERGROUP_DIALOG',
    'OPEN_ADD_SERVER_DIALOG': 'OPEN_ADD_SERVER_DIALOG',
    'CLOSE_CREATE_SERVERGROUP_DIALOG': 'CLOSE_CREATE_SERVERGROUP_DIALOG',
    'CLOSE_ADD_SERVER_DIALOG': 'CLOSE_ADD_SERVER_DIALOG',
  }
);
