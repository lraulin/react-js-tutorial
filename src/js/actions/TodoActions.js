import dispatcher from "../dispatcher";

export function createTodo(text) {
  dispatcher.dispatch({type: "CREATE_TODO", text});
}

export function deleteTodo(text) {
  dispatcher.dispatch({type: "CREATE_TODO", id});
}

export function reloadTodos() {
  // axios("http://someurl.com/somedataendpoint").then((data) => {
  // console.log("got the data", data); });
  dispatcher.dispatch({type: "FETCH_TODOS"});
  setTimeout(() => {
    dispatcher.dispatch({type: "RECEIVE_TODOS", todos: [
        {
          "id": 18,
          "text": "expedite virtual models",
          "complete": false
        }, {
          "id": 19,
          "text": "synergize turn-key technologies",
          "complete": true
        }, {
          "id": 20,
          "text": "embrace compelling initiatives",
          "complete": false
        },
      ]});
  }, 1000);
}
