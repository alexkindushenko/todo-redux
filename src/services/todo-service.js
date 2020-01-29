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
      const data = await axios.get(this._apiBase);
      return data;
    } catch (error) {
      console.log('fetch ' + error);
    }
  };

  sendLoginForm = async data => {
    try {
      return await axios.post(`${this._apiBase}login`, data);
    } catch (error) {
      console.log('send login ' + error);
    }
  };

  sendRegisterForm = async data => {
    try {
      return axios
        .post(`${this._apiBase}register`, data, {
          headers: {
            'content-Type': 'application/json',
            'XSRF-TOKEN': `${this._getCookie('XSRF-TOKEN')}`,
          },
        })
        .then(res => console.log(res.headers));
    } catch (error) {
      console.log('send register ' + error);
    }
  };

  updateTodoItem = async data => {
    try {
      return await axios.put(`${this._apiBase}:id`, data);
    } catch (error) {
      console.log('update error ' + error);
    }
  };
}
