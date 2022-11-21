import axios from "axios";

export default function getVoteTickerData() {
  return axios.get("/get-voting-info");
}
