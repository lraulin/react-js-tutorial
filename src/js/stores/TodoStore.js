import {EventEmitter} from 'events';
import dispatcher from '../dispatcher'

class TodoStore extends EventEmitter {
  constructor() {
    super()
    this.todos = [
      {
        "id": 1,
        "text": "seize out-of-the-box schemas",
        "complete": true,
      }, {
        "id": 2,
        "text": "synthesize global action-items",
        "complete": false,
      }, {
        "id": 3,
        "text": "seize e-business vortals",
        "complete": false,
      }, {
        "id": 4,
        "text": "aggregate back-end applications",
        "complete": false,
      }, {
        "id": 5,
        "text": "expedite real-time models",
        "complete": false,
      }, {
        "id": 6,
        "text": "extend integrated deliverables",
        "complete": true,
      }, {
        "id": 7,
        "text": "scale 24/365 infomediaries",
        "complete": true,
      }, {
        "id": 8,
        "text": "facilitate efficient models",
        "complete": false,
      }, {
        "id": 9,
        "text": "optimize turn-key platforms",
        "complete": true,
      }, {
        "id": 10,
        "text": "aggregate global infomediaries",
        "complete": false,
      }, {
        "id": 11,
        "text": "syndicate sticky markets",
        "complete": false,
      }, {
        "id": 12,
        "text": "morph next-generation web-readiness",
        "complete": false,
      }, {
        "id": 13,
        "text": "repurpose dot-com metrics",
        "complete": false,
      }, {
        "id": 14,
        "text": "expedite efficient ROI",
        "complete": true,
      }, {
        "id": 15,
        "text": "matrix enterprise eyeballs",
        "complete": false,
      }, {
        "id": 16,
        "text": "maximize efficient initiatives",
        "complete": false,
      }, {
        "id": 17,
        "text": "exploit integrated convergence",
        "complete": false,
      },
    ];
  }

  createTodo(text) {
    const id = Date.now();

    this.todos.push({id, text, complete: false});

    this.emit('change');
  }

  getAll() {
    return this.todos;
  }

  handleAction(action) {
    console.log('TodoStore received an action', action);
    switch (action.type) {
      case 'CREATE_TODO':
        this.createTodo(action.text);
        break;
      case 'RECEIVE_TODOS':
        this.todos = action.todos;
        this.emit('change');
        break;
    }
  }
}

const todoStoreObj = new TodoStore;
dispatcher.register(todoStoreObj.handleAction.bind(todoStoreObj));
window.dispatcher = dispatcher;
export default todoStoreObj;
