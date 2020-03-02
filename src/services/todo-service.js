import axios from 'axios';

export default class TodoService {
  data = [
    {
      id: 1,
      label: 'drink coffee',
      important: false,
      done: false,
    },
    {
      id: 2,
      label: 'make avesome react app',
      important: true,
      done: false,
    },
    {
      id: 3,
      label: 'to byu book "release it!"',
      important: false,
      done: true,
    },
  ];

  _apiBase = 'http://localhost:8888/';
  getList() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(this.data);
      }, 500);
    });
  }

  _getCookie(name) {
    let matches = document.cookie.match(
      new RegExp(
        '(?:^|; )' +
          name.replace(/([.$?*|{}()\\]\\\/\+^])/g, '\\$1') +
          '=([^;]*)'
      )
    );
    return matches ? decodeURIComponent(matches[1]) : undefined;
  }

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
      console.log('register error ' + error);
      return error;
    }
  };

  updateItem = async data => {
    try {
      return await axios.put(`${this._apiBase}`, data);
    } catch (error) {
      console.log('update error ' + error);
    }
  };

  deleteItem = async data => {
    try {
      return await axios.delete(`${this._apiBase}`, { params: data });
    } catch (error) {
      console.log('delete error ' + error);
    }
  };

  addItem = async data => {
    try {
      return await axios.post(`${this._apiBase}`, data);
    } catch (error) {
      console.log('add error ' + error);
    }
  };
  userLogout = async () => {
    try {
      return await axios.patch(`${this._apiBase}logout`);
    } catch (error) {
      console.log('logout ' + error);
    }
  };
}
