import axios from "axios";
//const URL = import.meta.env.VITE_API

const handleResponse = (response) => {
  const { success, data } = response.data;

  if (success && data && data.payload) {
    return data.payload;
  } else {
    console.error("Unexpected response format:", response.data);
    throw new Error("Unexpected response format");
  }
};


const handleError = (error) => {
  console.error(error);
  throw error;
};

const getAllItems = () => {
  return axios.get(`${URL}/events`).then(handleResponse).catch(handleError);
};

const getItem = (id) => {
  return axios
    .get(`${URL}/${id}`)
    .then((response) => {
      if (response.data.id) {
        return response.data;
      } else {
        console.error("Unexpected response format:", response.data);
        throw new Error("Unexpected response format");
      }
    })
    .catch(handleError);
};

const addItem = (data) => {
  return axios
    .post(URL, data, {
      headers: {
        "Content-Type": "application/json",
      },
    })
    .then(handleResponse)
    .catch(handleError);
};

const updateItem = (id, data) => {
  return axios
    .put(`${URL}/${id}`, data, {
      headers: {
        "Content-Type": "application/json",
      },
    })
    .then(handleResponse)
    .catch(handleError);
};

const deleteItem = (id) => {
  return axios
    .delete(`${URL}/${id}`)
    .then((response) => {
      if (response.data.success) {
        return true;
      } else {
        console.error("Unexpected response format:", response.data);
        throw new Error("Unexpected response format");
      }
    })
    .catch(handleError);
};

export { getAllItems, getItem, deleteItem, updateItem, addItem };
