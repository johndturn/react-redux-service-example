import UserResource from "../resources/User";

import store from "../config/store";
import { saveUser } from "../actions";

export default class UserService {
  static addAuthorization = () => {
    const { token } = store.getState();
    if (UserResource.defaults.headers.common.Authorization == null && token) {
      UserResource.defaults.headers.common.Authorization = `Token ${token}`;
    }
  };

  static fetchUserById = async id => {
    UserService.addAuthorization();
    const result = await UserResource.get(`/${id}/`);
    await store.dispatch(saveUser(result.data));
    return result.data;
  };
}
