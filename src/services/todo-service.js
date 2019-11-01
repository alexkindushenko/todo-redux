export default class TodoService {
  data = [
    {
      id: 1,
      title: 'drink coffee',
      done: false,
      important: false,
    },
    {
      id: 2,
      title: 'make avesome react app',
      important: true,
      done: false,
    },
    {
      id: 2,
      title: 'to byu book "release it!"',
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
