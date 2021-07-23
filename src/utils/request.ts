import axios from "axios";
import store from "@/store";
import router from "@/router";
export const baseURL = "http://pcapi-xiaotuxian-front-devtest.itheima.net/";
// 备用地址:
// export const baseURL = 'https://apipc-xiaotuxian-front.itheima.net/'
const instance = axios.create({
  // axios 的一些配置，baseURL  timeout
  baseURL,
  timeout: 5000,
});
