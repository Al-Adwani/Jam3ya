import { makeAutoObservable } from "mobx";
import decode from "jwt-decode";
import instance from "./instance";

class UserAuthStore {
  user = null;

  constructor() {
    makeAutoObservable(this);
  }
  signUp = async (userData, history) => {
    try {
      const res = await instance.post("/signup", userData);
      this.setUser(res.data.token);
      history.push("/");
    } catch (error) {}
  };

  signIn = async (userData, history) => {
    try {
      const res = await instance.post("/signin", userData);
      this.setUser(res.data.token);
      history.push("/");
    } catch (error) {}
  };
  setUser = (token) => {
    localStorage.setItem("myToken", token);
    instance.defaults.headers.common.Authorization = `bearer ${token}`;
    this.user = decode(token);
  };
  logout = () => {
    delete instance.defaults.headers.common.Authorization;
    localStorage.removeItem("myToken");
    this.user = null;
  };
  checkForToken = () => {
    const token = localStorage.getItem("myToken");
    if (token) {
      const currenTime = Date.now();
      let tempUser = decode(token);
      if (tempUser.exp >= currenTime) {
        this.setUser(token);
      } else {
        this.logout();
      }
    }
  };
}
const userAuthStore = new UserAuthStore();
userAuthStore.checkForToken();
export default userAuthStore;
