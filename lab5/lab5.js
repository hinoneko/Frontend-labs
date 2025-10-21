const validationRules = {
    pib: {
        regex: /^[А-ЯІЄЇҐ][а-яієїґ]+(?:-[А-ЯІЄЇҐ][а-яієїґ]+)? [А-ЯІЄЇҐ]\.[А-ЯІЄЇҐ]\.$/,
        error: 'Невірний формат ПІБ.'
    },
    variant: {
        regex: /^\d+$/,
        error: 'Невірний формат варіанта.'
    },
    phone: {
        regex: /^\(\d{3}\)-\d{3}-\d{2}-\d{2}$/,
        error: 'Невірний формат телефону.'
    },
    faculty: {
        regex: /^[А-ЯІЄЇҐ]+$/,
        error: 'Невірний формат факультету.'
    },
    address: {
        regex: /^м\. [А-ЯІЄЇҐ][а-яієїґ]+$/,
        error: 'Невірний формат адреси.'
    }
};


function validateForm(form) {
    let isValid = true;
    const formData = {};

    document.querySelectorAll('.form-group input').forEach(input => {
        input.classList.remove('error');
    });
    document.querySelectorAll('.error-message').forEach(span => {
        span.textContent = '';
    });

    for (const fieldName in validationRules) {
        const input = form.elements[fieldName];
        const rule = validationRules[fieldName];
        const errorMessageSpan = document.getElementById(`error-${fieldName}`);

        if (!input || !errorMessageSpan) continue;

        const value = input.value.trim();
        formData[fieldName] = value;

        if (!rule.regex.test(value)) {
            input.classList.add('error');
            errorMessageSpan.textContent = rule.error;
            isValid = false;
        }
    }

    if (isValid) {
        showResultWindow(formData, form);
    }

    return false;
}


function showResultWindow(formData, form) {
    let content = '<h2>Дані успішно валідовані!</h2>';

    for (const key in formData) {
        const labelText = form.elements[key].labels[0].textContent.split(':')[0].trim();
        content += `<p><strong>${labelText}:</strong> ${formData[key]}</p>`;
    }

    const win = window.open('', 'ResultWindow', 'width=500,height=400');
    win.document.write(`
        <!DOCTYPE html>
        <html lang="uk">
        <head>
            <meta charset="UTF-8">
            <title>Результати</title>
            <link rel="stylesheet" href="lab5.css">
        </head>
        <body>${content}</body>
        </html>
    `);
    win.document.close();
}


const VAR_NUM = 7;
const TABLE_SIZE = 6;
const TARGET_CELL_NUM = VAR_NUM;
const TARGET_INDEX = TARGET_CELL_NUM - 1;
const TARGET_ROW = Math.floor(TARGET_INDEX / TABLE_SIZE);
const TARGET_COL = TARGET_INDEX % TABLE_SIZE;

const colorPicker = document.getElementById('colorPicker');


function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}


function createTable() {
    let html = '<table id="validationTable">';
    let cellNum = 1;

    for (let i = 0; i < TABLE_SIZE; i++) {
        html += '<tr>';
        for (let j = 0; j < TABLE_SIZE; j++) {
            const isTarget = (i === TARGET_ROW && j === TARGET_COL);
            const className = isTarget ? 'target-cell' : '';

            html += `<td data-row="${i}" data-col="${j}" class="${className}">${cellNum}</td>`;
            cellNum++;
        }
        html += '</tr>';
    }
    html += '</table>';
    document.getElementById('tableContainer').innerHTML = html;

    const targetCell = document.querySelector(`td[data-row="${TARGET_ROW}"][data-col="${TARGET_COL}"]`);
    if (targetCell) {
        targetCell.addEventListener('mouseover', handleMouseOver);
        targetCell.addEventListener('mouseout', handleMouseOut);
        targetCell.addEventListener('click', handleClick);
        targetCell.addEventListener('dblclick', handleDblClick);
    }
}


let originalColor = '';
let isClicked = false;


function handleMouseOver() {
    if (!isClicked) {
        originalColor = this.style.backgroundColor || '';
        this.style.backgroundColor = getRandomColor();
    }
}


function handleMouseOut() {
    if (!isClicked) {
        this.style.backgroundColor = originalColor;
    }
}


function handleClick() {
    isClicked = true;
    this.style.backgroundColor = colorPicker.value;
}


function handleDblClick() {
    const table = document.getElementById('validationTable');
    if (!table) return;

    const currentRow = parseInt(this.dataset.row);
    const selectedColor = colorPicker.value;

    for (let i = currentRow; i < TABLE_SIZE; i += 2) {
        const row = table.rows[i];
        if (row) {
            Array.from(row.cells).forEach(cell => {
                cell.style.backgroundColor = selectedColor;
                cell.classList.add('clicked');
            });
        }
    }
    isClicked = true;
}

document.addEventListener('DOMContentLoaded', createTable);