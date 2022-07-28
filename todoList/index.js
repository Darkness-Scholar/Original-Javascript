var tasks = [] // Lưu trữ các task vào biến toàn cục

function add() {
    let id = Math.round(Math.random() * 12312345) // Tạo id ngẫu nhiên
    let txt = { id:id, value: document.querySelector(".txt").value }
    tasks.push(txt) // Thêm task vào mảng tasks

    // Show Tasks 
    document.querySelector(".content").innerHTML = "" // Reset lai the .content
    let contentValue = document.querySelector(".content").innerHTML
    tasks.map((item, index) => {
        contentValue += `<p>
            ${item.value}
            <button onclick="edit(${index})">Edit</button>
            <button onclick="remove(${item.id})">Remove</button>
        </p>`
    })
    document.querySelector(".content").innerHTML = contentValue
}

// DONE

function remove(id) {
    tasks = tasks.filter(item => item.id != id)

    document.querySelector(".content").innerHTML = "" // Reset lai the .content
    let contentValue = document.querySelector(".content").innerHTML
    tasks.map((item, index) => {
        contentValue += `<p>
            ${item.value}
            <button onclick="edit(${index})">Edit</button>
            <button onclick="remove(${item.id})">Remove</button>
        </p>`
    })
    document.querySelector(".content").innerHTML = contentValue
}

function edit(index) {
    tasks[index].value = prompt("Nhập nội dung mới")

    document.querySelector(".content").innerHTML = "" // Reset lai the .content
    let contentValue = document.querySelector(".content").innerHTML
    tasks.map((item, index) => {
        contentValue += `<p>
            ${item.value}
            <button onclick="edit(${index})">Edit</button>
            <button onclick="remove(${item.id})">Remove</button>
        </p>`
    })
    document.querySelector(".content").innerHTML = contentValue
}