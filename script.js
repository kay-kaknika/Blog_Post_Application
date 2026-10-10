// Create a simple blog post application that allows user to:

// Add blog post
// Edit blog post (both title and content)
// Delete blog post

window.onload = () => {
    let blogList = [
        {
            title: "Welcome to my Blog",
            content: "This is my first blog post. I'm excited to share my thoughts and experiences with you all!"
        },
        {
            title: "Learning JavaScript",
            content: "JavaScript is a powerful programming language that enables interactive web development. Today I learned about event listenes and DOM manipulation."
        },
        {
            title: "Web Development Tips",
            content: "Always write clean and maintainable code. Use meaningful variable names and comment your code when necessary."
        }
    ]
    blogList.map((blog) => {
        createBlog(blog.title, blog.content)
    })

    let addBlogBtn = document.getElementById("add-blog-btn")
    addBlogBtn.addEventListener("click", addBlog)
}

const createBlog = (title, content) => {
    const blogList = document.getElementById("blog-list")

    const blog = document.createElement("div")
    blog.classList.add("blog-post")

    const blogTitle = document.createElement("h2")
    blogTitle.textContent = title

    const blogContent = document.createElement("p")
    blogContent.textContent = content

    const editTitleBtn = document.createElement("button")
    editTitleBtn.textContent = "Edit Title"
    editTitleBtn.addEventListener("click", (e) => {
        updateTitle(e.target.parentElement.querySelector("h2"))
    })

    const editContentBtn = document.createElement("button")
    editContentBtn.textContent = "Edit Content"
    editContentBtn.addEventListener("click", (e) => {
        updateContent(e.target.parentElement.querySelector("p"))
    })

    const deletePostBtn = document.createElement("button")
    deletePostBtn.textContent = "Delete Post"
    deletePostBtn.addEventListener("click", (e) => {
        deletePost(e.target.parentElement)
    })

    blog.appendChild(blogTitle)
    blog.appendChild(editTitleBtn)
    blog.appendChild(blogContent)
    blog.appendChild(editContentBtn)
    blog.appendChild(deletePostBtn)

    blogList.appendChild(blog)
}

const addBlog = () => {
    const title = prompt("Enter the title of the blog post:")
    const content = prompt("Enter the content of the blog post:")
    createBlog(title, content)
}

const updateTitle = (blogTitle) => {
    const newTitle = prompt("Enter the new title of the blog post:")
    blogTitle.textContent = newTitle
}

const updateContent = (blogContent) => {
    const newContent = prompt("Enter the new content of the blog post:")
    blogContent.textContent = newContent
}

const deletePost = (blog) => {
    const toDelte = confirm("Are you sure you want to delete this blog post?")
    if (toDelte) {
        blog.remove()
    }
}

