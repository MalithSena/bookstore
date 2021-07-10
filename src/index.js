import React from 'react';
import ReactDom from 'react-dom';

//CSS
import './index.css';

import {books} from './books'
import Book from './Book'
import {greeting} from './testing/testing'


 

function BookList(){  
    
    return(
        
        <section className="booklist">
            
          {books.map((book) =>{
            //   return <div>
            //       <h3>{title}</h3>
            //       <h6>{author}</h6>
            //       <img src="{img}" alt="" />
            //   </div>;
            console.log(greeting);
            return <Book key={book.id} {...book}></Book>;
          })}
        </section>
    )
}

// const Book = (props) => {  
    // const {img, title, author} = props
//const Book = ({img,title, author, children}) => {  



ReactDom.render(<BookList />, document.getElementById('root'));