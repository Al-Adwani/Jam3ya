import { makeAutoObservable } from "mobx";

import instance from "./instance";

class Jam3yaStore {
  jam3yat = [];
  constructor() {
    makeAutoObservable(this);
  }

  fetchJam3ya = async () => {
    try {
      const res = await instance.get("/jam3ya");
      this.jam3yat = res.data;
    } catch (error) {}
  };
  createJam3ya = async (newJam3ya, user) => {
    try {
      const res = await instance.post("/jam3ya", user, newJam3ya);
      this.jam3yat.push(res.data);
    } catch (error) {}
  };
}
const jam3yaStore = new Jam3yaStore();
jam3yaStore.fetchJam3ya();
export default jam3yaStore;
