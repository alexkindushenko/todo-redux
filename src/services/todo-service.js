export default class TodoService {
  data = [
    {
      id: 1,
      label: 'drink coffee',
      done: false,
      important: false,
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
      done: false,
    },
  ];

  getList() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(this.data);
      }, 500);
    });
  }
}
