// api.js
import axios from 'axios';

const API_BASE_URL = 'https://api.example.com'; // Replace with your actual API base URL

export const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const handleApiError = (error) => {
  console.error('API error:', error);
  throw error;
};

const API = {
  getOne: async (resource, id) => {
    try {
      const response = await api.get(`/${resource}/${id}`);
      return response.data;
    } catch (error) {
      handleApiError(error);
    }
  },

  getAll: async (resource, queryParam, value) => {
    try {
      const response = await api.get(`/${resource}`, {
        params: { [queryParam]: value },
      });
      return response.data;
    } catch (error) {
      handleApiError(error);
    }
  },

  getOneResourceWithChild: async (resource, id, secondResource) => {
    try {
      const response = await api.get(`/${resource}/${id}`, {
        params: { includes: secondResource },
      });
      return response.data;
    } catch (error) {
      handleApiError(error);
    }
  },

  postData: async (resource, newObj) => {
    try {
      const response = await api.post(`/${resource}`, newObj);
      return response.data;
    } catch (error) {
      handleApiError(error);
    }
  },

  deleteUserData: async (resource, id) => {
    try {
      const response = await api.delete(`/${resource}/${id}`);
      return response.data;
    } catch (error) {
      handleApiError(error);
    }
  },

  update: async (resource, editedObject, id) => {
    try {
      const response = await api.put(`/${resource}/${id}`, editedObject);
      return response.data;
    } catch (error) {
      handleApiError(error);
    }
  },
};

export default API;
