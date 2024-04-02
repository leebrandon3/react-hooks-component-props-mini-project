import React from "react";
import blogData from "../data/blog";

console.log(blogData);

function App() {
  return (
    <div className="App">
      You're on your own from here! Follow the deliverables; test things out in
      the browser as you write your code; and good luck!
      <Header name={blogData.name} />
      <About image={blogData.image} about={blogData.about} />
      <ArticleList posts={blogData.posts} />
    </div>
  );
}

function Header({name}) {
  return (
    <header>
      <h1>{name}</h1>
    </header>
  )
}

function About({image = "https://via.placeholder.com/215", about}) {
  return (
    <aside>
      <img src={image} alt="blog logo"></img>
      <p>{about}</p>
    </aside>
  )
}

function Article({title, date = "January 1, 1970", preview}){
  return (
    <div>
      <h3>{title}</h3>
      <small>{date}</small>
      <p>{preview}</p>
    </div>
  )
}

function arrayArticle(article){
  console.log(article)
  const articles = article.map(element => {
    return (<Article key={element.id} title={element.title} date={element.date} preview={element.preview}/>)
  })
  return articles
}

function ArticleList({posts}){
  console.log(posts)
  return (
    <main>
      {arrayArticle(posts)}
    </main>
  )
}

export default App;
