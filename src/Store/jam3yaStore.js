import { makeAutoObservable } from "mobx";

import instance from "./instance";
import userAuthStore from "./userAuthStore";

class Jam3yaStore {
  jam3yat = [];
  isLoading = true;
  constructor() {
    makeAutoObservable(this);
  }

  fetchJam3ya = async () => {
    try {
      const res = await instance.get("/jam3ya");
      this.jam3yat = res.data;
      this.isLoading = false;
    } catch (error) {}
  };
  createJam3ya = async (newJam3ya) => {
    try {
      const res = await instance.post("/jam3ya", newJam3ya);
      console.log(newJam3ya);
      this.jam3yat.push(res.data);
    } catch (error) {}
  };
  joinJam3ya = async (id) => {
    try {
      const res = await instance.post(`/jam3ya/join/${id}`, userAuthStore.user);
      const joiners = this.jam3yat.find((joiner) => joiner.id === id);
      console.log(res.data);
      joiners.users.push(userAuthStore.user);
    } catch (error) {}
  };
}
const jam3yaStore = new Jam3yaStore();
jam3yaStore.fetchJam3ya();
export default jam3yaStore;
