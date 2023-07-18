const storage = {
    fetch() {
        const arr = [];
        if (localStorage.length > 0) {
            for (let i = 0; i < localStorage.length; i++) {
                if (localStorage.key(i) !== 'loglevel:webpack-dev-server') {
                    arr.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
                }
            }
        }
        return arr;
    },
}

const state = {
    headerText: `TODO it!`,
    todoItems: storage.fetch(),
    number: 10
};
const getters = {
    storedTodoItems(state) {
        return state.todoItems;
    },
    storedHeaderText(state) {
        return state.headerText;
    }
};
const mutations = {
    addOneItem(state, todoItem) {
        console.log(`received`);
        let obj = {completed: false, item: todoItem};
        localStorage.setItem(todoItem, JSON.stringify(obj));
        state.todoItems.push(obj);
    },
    removeOneItem(state, payload) {
        console.log(`received`);
        localStorage.removeItem(payload.todoItem.item)
        state.todoItems.splice(payload.index, 1);
    },
    updateOneItem(state, payload) {
        console.log(`received`);
        state.todoItems[payload.index].completed = !state.todoItems[payload.index].completed;
        // localstorage 데이터 갱신
        localStorage.removeItem(payload.todoItem.item);
        localStorage.setItem(payload.todoItem.item, JSON.stringify(payload.todoItem));
    },
    clearAllItems(state) {
        console.log(`received`);
        localStorage.clear();
        state.todoItems = [];
    }
};

export default {
    namespace: true,
    state,
    getters,
    mutations
}