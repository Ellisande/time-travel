export default function(currentState, action){
  if(action.type === 'ADD_NOTIFICATION'){
    return Object.assign({}, currentState, {notifications: currentState.notifications + 1});
  }
  if(action.type === 'CHANGE_NAME'){
    return Object.assign({}, currentState, {name: action.name});
  }
  return currentState;
};
