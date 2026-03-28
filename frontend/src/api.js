import axios from "axios";

const API_URL = "http://127.0.0.1:8000";

export const generateRFQ = (product, quantity) =>
  axios.post(`${API_URL}/generate-rfq`, { product, quantity });

export const checkFollowups = () =>
  axios.get(`${API_URL}/check-followups`);

export const markReplied = (product) =>
  axios.post(`${API_URL}/mark-replied`, { product });