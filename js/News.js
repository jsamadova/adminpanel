let modalOverlay = document.getElementById('modalOverlay')
let newsName = document.getElementById('newsName')
let newsYear = document.getElementById('newsYear')
let newsImage = document.getElementById('newsImage')
let newscat = document.getElementById('newscat')
let newsContent = document.getElementById('newsContent')
let newsContainer = document.getElementById('newsContainer')


let modalOverlay2 = document.getElementById('modalOverlay2')
let newsName2 = document.getElementById('newsName2')
let newsYear2 = document.getElementById('newsYear2')
let newsImage2 = document.getElementById('newsImage2')
let newscat2 = document.getElementById('newscat2')
let newsContent2 = document.getElementById('newsContent2')
let newsID = document.getElementById('newsId')

let Base_Api = 'https://6a6d011deb8865c4bf48d145.mockapi.io/News'

function newsModalOpen() {
    modalOverlay.style.display === 'none' ? modalOverlay.style.display = 'flex' : modalOverlay.style.display = 'none'
}


function getShowData() {
    fetch(Base_Api)
        .then(res => res.json())
        .then(data => data.map((items) => {
            newsContainer.innerHTML += `
         <tr>
                                    <td>${items.id}</td>
                                    <td class="pl-0 px-3 py-4 font-medium text-slate-900 whitespace-nowrap">
                                        ${items.name}
                                    </td>
                                    <td class="px-3 py-4 text-slate-500">
                                     ${items.createdAt}
                                    </td>
                                    <td class="px-3 py-4 text-slate-500">
                                        ${items.image}
                                    </td>
                                    <td class="px-3 py-4 text-slate-500">
                                       ${items.category}
                                    </td>
                                    <td class="px-3 py-4 text-slate-500">
                                       ${items.content}
                                    </td>
                                    <td class="pr-0 px-3 py-4 flex gap-3">
                                        <button type="button" onclick="modal2ac('${items.id}')"
                                            class="text-sm text-blue-700 cursor-pointer hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded"
                                            aria-label="Edit John Doe">
                                            Edit
                                        </button>
                                        <button type="button" onclick="deleteNews('${items.id}')"
                                            class="text-sm text-red-700 cursor-pointer hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 rounded"
                                            aria-label="Delete John Doe">
                                            Delete
                                        </button>
                                    </td>
                                </tr>

      `
        }))

}
getShowData()



function addNews() {
    const newNews = {
        'name': newsName.value,
        'createdAt': newsYear.value,
        'image': newsImage.value,
        'category': newscat.value,
        'content': newsContent.value

    }


    fetch(Base_Api, {
        method: "POST",
        body: JSON.stringify(newNews),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    })
        .then((res) => res.json())
        .then(() => {
            newsModalOpen()
            newsContainer.innerHTML = ''
            getShowData()
        });
}



function modal2ac(id) {
    modalOverlay2.style.display = 'flex'

    fetch(`${Base_Api}/${id}`)
        .then(res => res.json())
        .then(data => {
            newsID.value = data.id
            newsName2.value = data.name
            newsYear2.value = data.createdAt
            newsImage2.value = data.image
            newscat2.value = data.category
            newsContent2.value = data.content
        })
}
function closeModal() {
    modalOverlay2.style.display = 'none'
}


function updateData() {
    const id = newsID.value
    if (!id) return alert("mehsul secin")

    const data = {
        "id": newsID.value,
        "name": newsName2.value,
        "createdAt": newsYear2.value,
        "image": newsImage2.value,
        "category": newscat2.value,
        "content": newsContent2.value,

    }

    fetch(`${Base_Api}/${id}`, {
        method: "PUT",
        headers: { 'Content-type': 'application/json' },
        body: JSON.stringify(data)
    })
        .then(res => {
            if (res.ok) {
                alert("successfully edited")
                closeModal()
                newsContainer.innerHTML = ''
                getShowData()

            }
        })
}

function deleteNews(id) {
    fetch(`${Base_Api}/${id}`, {
        method: "DELETE"
    })
        .then(res => res.json())
        .then(res => {
            alert("Sucessfully deleted")
            newsContainer.innerHTML = ''
            getShowData()
        })
}
