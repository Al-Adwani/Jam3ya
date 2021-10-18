import { get, makeAutoObservable } from "mobx";
import decode from "jwt-decode";
import instance from "./instance";
import Jam3yaDetail from "../Components/Jam3yaDetail";

class Jam3yaStore {
  jam3ya = [];
  constructor() {
    makeAutoObservable(this);
  }
  fetchJam3ya = async () => {
    try {
      const res = await instance.get("/jam3ya");
      this.jam3ya = res.data;
    } catch (error) {}
  };
}
const jam3yaStore = new Jam3yaStore();
jam3yaStore.fetchJam3ya();
export default Jam3yaStore;
