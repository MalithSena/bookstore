import React from 'react';
import ReactDom from 'react-dom';

//CSS
import './index.css';

function BookList(){
    return(
        <section className="booklist">
            <Book />
            <Book />
            <Book />
            <Book />
            <Book />
            <Book />
            <Book />
            <Book />
            <Book />
            <Book />
        </section>
    )
}

const Book = () => {
    return( 
    <article className="book">
       <Image />
       <Title />
       <Author />
    </article>
    )
};

const Image = () => <img src="https://m.media-amazon.com/images/I/81eB+7+CkUL._AC_UY218_.jpg" alt="" />
const Title = () => <h1>I love you back to the moon and more</h1>
const Author = () => <h2>Amelia Hepworth</h2>
ReactDom.render(<BookList />, document.getElementById('root'));