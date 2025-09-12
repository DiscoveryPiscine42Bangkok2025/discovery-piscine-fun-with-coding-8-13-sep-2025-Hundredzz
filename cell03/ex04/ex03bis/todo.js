let TodoList = [];

function createTodo(text) {
    const $element = $('<div class="todo"></div>');
    $element.append($('<p></p>').text(text));
    const $delBtn = $('<button>Delete</button>');
    $delBtn.on('click', function() {
        remove(text);
    });
    $element.append($delBtn);
    return $element;
}

function render() {
    const $list = $('#ft_list');
    $list.empty();
    for (let i = 0; i < TodoList.length; i++) {
        $list.append(createTodo(TodoList[i]));
    }
    document.cookie = JSON.stringify(TodoList);
}

function newTodo() {
    let name = prompt("Name the todo.");
    if (name && name.length > 0) {
        TodoList.unshift(name);
        render();
    }
}

function remove(text) {
    let yes = confirm('Are you sure to remove.');
    if (yes) {
        const index = TodoList.indexOf(text);
        if (index !== -1) {
            TodoList.splice(index, 1);
        }
        render();
    }
}

$(document).ready(function() {
    let save = document.cookie;
    if (save.length > 0) {
        try {
            TodoList = JSON.parse(save);
        } catch (e) {
            TodoList = [];
        }
        render();
    }
});