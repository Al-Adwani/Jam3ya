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
      const res = await instance.post(`/jam3ya/join/${id}`);
      const joiners = this.jam3yat.find((joiner) => joiner._id === id);
      console.log(res.data);
      joiners.users.push(userAuthStore.user);
    } catch (error) {}
  };
  leaveJam3ya = async (id) => {
    try {
      const res = await instance.post(`/jam3ya/leave/${id}`);
      console.log(res.data);
      const joiners = this.jam3yat.find((joiner) => joiner._id === id);
      joiners.users = joiners.users.filter(
        (leaver) => leaver._id !== userAuthStore.user._id
      );
    } catch (error) {}
  };
  deleteJam3ya = async (id, history) => {
    try {
      const res = await instance.delete(`/jam3ya/${id}`);
      console.log(res.data);
      history.push("/");
      this.jam3yat = this.jam3yat.filter((leaver) => leaver._id !== id);
    } catch (error) {}
  };
  updateJam3ya = async (updated, jam3yaId) => {
    try {
      const res = await instance.put(`/jam3ya/${jam3yaId}`, updated);
      this.jam3yat = this.jam3yat.map((jam3ya) =>
        jam3ya._id === jam3yaId ? res.data : jam3ya
      );
    } catch (error) {}
  };
}
const jam3yaStore = new Jam3yaStore();
jam3yaStore.fetchJam3ya();
export default jam3yaStore;
