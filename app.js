// Basic arrays to store data
const dishes = [];
const menus = [];
let selectedMenuIndex = null;

// Tabs handling
const tabs = document.querySelectorAll('#tabs button');
tabs.forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelectorAll('.tab-content').forEach(el => el.classList.add('hidden'));
        tabs.forEach(b => b.classList.remove('bg-blue-600','text-white','bg-gray-300','text-gray-700'));
        btn.classList.add('bg-blue-600','text-white');
        document.getElementById(btn.dataset.tab).classList.remove('hidden');
    });
});

// Dish form submit
const dishForm = document.getElementById('dishForm');
dishForm.addEventListener('submit', e => {
    e.preventDefault();
    const formData = new FormData(dishForm);
    const dish = {
        name: formData.get('dishName'),
        cuisine: formData.get('cuisine'),
        category: formData.get('category'),
        price: formData.get('price'),
        vegetarian: formData.get('vegetarian') ? 'Yes' : 'No'
    };
    dishes.push(dish);
    renderDishes();
    dishForm.reset();
});

function renderDishes() {
    const tbody = document.querySelector('#dishTable tbody');
    tbody.innerHTML = '';
    dishes.forEach((dish, idx) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td class="border px-4 py-2">${dish.name}</td>
            <td class="border px-4 py-2">${dish.cuisine}</td>
            <td class="border px-4 py-2">${dish.category}</td>
            <td class="border px-4 py-2">${dish.price}</td>
            <td class="border px-4 py-2">${dish.vegetarian}</td>
        `;
        row.draggable = true;
        row.addEventListener('dragstart', () => {
            row.classList.add('bg-gray-200');
            row.dataset.index = idx;
        });
        row.addEventListener('dragend', () => row.classList.remove('bg-gray-200'));
        tbody.appendChild(row);
    });
    renderAssignDishList();
}

// Menu form submit
const menuForm = document.getElementById('menuForm');
menuForm.addEventListener('submit', e => {
    e.preventDefault();
    const formData = new FormData(menuForm);
    const menu = {
        name: formData.get('menuName'),
        type: formData.get('menuType'),
        default: formData.get('defaultMenu') ? true : false,
        dishes: []
    };
    menus.push(menu);
    renderMenus();
    menuForm.reset();
});

function renderMenus() {
    const list = document.getElementById('menuList');
    list.innerHTML = '';
    menus.forEach((menu, idx) => {
        const div = document.createElement('div');
        div.className = 'p-2 border flex justify-between items-center';
        div.innerHTML = `<div><strong>${menu.name}</strong> <span class="text-sm text-gray-500">(${menu.type})</span></div><button class="text-blue-600" data-idx="${idx}">Select</button>`;
        div.querySelector('button').addEventListener('click', (e) => {
            selectedMenuIndex = parseInt(e.target.dataset.idx);
            renderMenuDishes();
        });
        list.appendChild(div);
    });
}

function renderAssignDishList() {
    const list = document.getElementById('assignDishList');
    list.innerHTML = '';
    dishes.forEach((dish, idx) => {
        const li = document.createElement('li');
        li.className = 'p-2 border-b cursor-move';
        li.textContent = dish.name;
        li.draggable = true;
        li.dataset.index = idx;
        li.addEventListener('dragstart', (e) => {
            e.dataTransfer.setData('text/plain', idx.toString());
        });
        list.appendChild(li);
    });
}

function renderMenuDishes() {
    const list = document.getElementById('menuDishList');
    list.innerHTML = '';
    if (selectedMenuIndex === null) return;
    menus[selectedMenuIndex].dishes.forEach((dishIdx, pos) => {
        const dish = dishes[dishIdx];
        const li = document.createElement('li');
        li.className = 'p-2 border-b cursor-move';
        li.textContent = dish.name;
        li.draggable = true;
        li.dataset.pos = pos;
        li.addEventListener('dragstart', (e) => {
            e.dataTransfer.setData('text/plain', pos.toString());
        });
        list.appendChild(li);
    });
}

// Drag target for menu dishes
const menuDishList = document.getElementById('menuDishList');
menuDishList.addEventListener('dragover', (e) => e.preventDefault());
menuDishList.addEventListener('drop', (e) => {
    e.preventDefault();
    if (selectedMenuIndex === null) return;
    const data = e.dataTransfer.getData('text/plain');
    // If data is index from assign list
    if (e.target.id === 'menuDishList' || e.target.parentElement.id === 'menuDishList') {
        const dishIdx = parseInt(data);
        menus[selectedMenuIndex].dishes.push(dishIdx);
    } else {
        const pos = parseInt(data);
        const dishIdx = menus[selectedMenuIndex].dishes.splice(pos, 1)[0];
        menus[selectedMenuIndex].dishes.push(dishIdx);
    }
    renderMenuDishes();
});

renderDishes();
renderMenus();

