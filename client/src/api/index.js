import axios from "axios";
const prodURL = "/api";
const devURL = "http://localhost:5000/api";

const api = axios.create({
    baseURL: process.env.NODE_ENV === "production" ? prodURL : devURL,
});

export const getSheetData = () => api.get("/sheet");

const apis = {
    getSheetData
}

export default apis;