import axios from 'axios';

export default class TodoService {
  _apiBase = 'http://localhost:8888/';

  getTodoList = async () => {
    try {
      return await axios.patch(this._apiBase);
    } catch (error) {
      return error;
    }
  };

  sendLoginForm = async data => {
    try {
      return await axios.post(`${this._apiBase}login`, data);
    } catch (error) {
      console.log(error);
      return error;
    }
  };

  sendRegisterForm = async data => {
    try {
      return await axios.post(`${this._apiBase}register`, data);
    } catch (error) {
      return error;
    }
  };

  updateItem = async data => {
    try {
      return await axios.put(`${this._apiBase}`, data);
    } catch (error) {
      return error;
    }
  };

  deleteItem = async data => {
    try {
      return await axios.delete(`${this._apiBase}`, { params: data });
    } catch (error) {
      return error;
    }
  };

  addItem = async data => {
    try {
      return await axios.post(`${this._apiBase}`, data);
    } catch (error) {
      return error;
    }
  };
  userLogout = async () => {
    try {
      return await axios.patch(`${this._apiBase}logout`);
    } catch (error) {
      return error;
    }
  };
}
