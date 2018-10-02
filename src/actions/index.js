import ActionNames from "./actionNameConstants";

export function saveUser(user) {
  return {
    type: ActionNames.SET_USER,
    user
  };
}
