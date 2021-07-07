import React from 'react';
import ReactDom from 'react-dom';

//CSS
import './index.css';

//Creating object
const books = [
{
    img : "https://m.media-amazon.com/images/I/81eB+7+CkUL._AC_UY218_.jpg",
    title: 'I love you to the moon and back',
    author: 'Amelia Hepworth'
},
{
    img : "https://m.media-amazon.com/images/I/71aLultW5EL._AC_UY218_.jpg",
    title: 'Our Class is a Family',
    author: 'Shannon Oslen'
}
]

function BookList(){
    return(
        <section className="booklist">
           {books}
        </section>
    )
}

// const Book = (props) => {  
    // const {img, title, author} = props
//const Book = ({img,title, author, children}) => {  
const Book = (props)=>{
     const {img, title, author} = props;
    return( 
    <article className="book">
       <img src={img} alt=""/>
       <h1>{title}</h1>
       <h4>{author}</h4>
       
    </article>
    )
};


ReactDom.render(<BookList />, document.getElementById('root'));