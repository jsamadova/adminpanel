let modalOverlay = document.getElementById('modalOverlay')
let blogName = document.getElementById('blogName')
let blogYear = document.getElementById('blogYear')
let blogImage = document.getElementById('blogImage')
let blogcat = document.getElementById('blogcat')
let blogContent = document.getElementById('blogContent')
let blogsContainer = document.getElementById('blogsContainer')


let modalOverlay2 = document.getElementById('modalOverlay2')
let blogName2 = document.getElementById('blogName2')
let blogYear2 = document.getElementById('blogYear2')
let blogImage2 = document.getElementById('blogImage2')
let blogcat2 = document.getElementById('blogcat2')
let blogContent2 = document.getElementById('blogContent2')
let blogID = document.getElementById('blogId')

let Base_Api = 'https://6a6d011deb8865c4bf48d145.mockapi.io/Blog'

function blogModalOpen() {
    modalOverlay.style.display === 'none' ? modalOverlay.style.display = 'flex' : modalOverlay.style.display = 'none'
}

//GET METODU
function getShowData() {
    fetch(Base_Api)
        .then(res => res.json())
        .then(data => data.map((items) => {
            blogsContainer.innerHTML += `
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
                                        <button type="button"
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


//POST METODU
function addBlog() {
    const newblog = {
        'name': blogName.value,
        'createdAt': blogYear.value,
        'image': blogImage.value,
        'category': blogcat.value,
        'content': blogContent.value

    }


    fetch(Base_Api, {
        method: "POST",
        body: JSON.stringify(newblog),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    })
        .then((res) => res.json())
        .then(() => {
            blogModalOpen()
            blogsContainer.innerHTML = ''
            getShowData()
        });
}

//PUT METODU
function modal2ac(id) {
    modalOverlay2.style.display = 'flex'

    fetch(`${Base_Api}/${id}`)
        .then(res => res.json())
        .then(data => {
            blogID.value = data.id
            blogName2.value = data.name
            blogYear2.value = data.createdAt
            blogImage2.value = data.image
            blogcat2.value = data.category
            blogContent2.value = data.content
        })
}
function closeModal() {
    modalOverlay2.style.display = 'none'
}


function updateData() {
    const id = blogID.value
    if (!id) return alert("mehsul secin")

    const data = {
        "id": blogID.value,
        "name": blogName2.value,
        "createdAt": blogYear2.value,
        "image": blogImage2.value,
        "category": blogcat2.value,
        "content": blogContent2.value,

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
                blogsContainer.innerHTML = ''
                getShowData()

            }
        })
}

