const blog = require("../models/blog")
const lodash = require('lodash')

const dummy = (blogs) => {
  return 1
}

const totalLikes = (bloglist) => {
  const reducer = (sum, blog) => {
    return sum + blog.likes
  }
  if (!bloglist || bloglist.length === 0) {
    return 0
  } else {
    return bloglist.reduce(reducer, 0)
  }
}

const favoriteBlog = (blogs) => {
  if (!blogs || blogs.length === 0) {
    return null
  }
  // Get blog with most likes
  const max = blogs.reduce((prev, current) =>
    prev.likes > current.likes ? prev : current,
  )

  // Return most liked blog, with only title, author and likes as properties
  const favBlog = {
    title: max.title,
    author: max.author,
    likes: max.likes,
  }

  return favBlog
}

const mostBlogs = (blogs) => {
  if (!blogs || blogs.length === 0) {
    return null
  }
  
  // Get all authors
  const authors = blogs.map((blog) => blog.author)

  // Count all blogs of an author
  const allBlogsOfAuthor = authors.reduce((total, currentblog) => {
    total[currentblog] ? total[currentblog]++ : total[currentblog] = 1
  })
  const mostBlogger = {
    author: 1,
    blogs: 1
  }
} 

module.exports = {
  dummy,
  totalLikes,
  favoriteBlog,
  mostBlogs
}