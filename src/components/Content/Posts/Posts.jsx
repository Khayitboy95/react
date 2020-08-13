import React from 'react';
import Post from './Post/Post';

const Posts = (props) => {
    
    let postsElem = props.posts.map((elem) => <Post likesCount={elem.likesCount} message={elem.message} />)
    
    let newPost = React.createRef();

    let addPost2 = () => {
        let text = newPost.current.value;
        props.addPost(text);
    };
    
    return (
        <div className="posts">
            <div className="posts__form">
                <form action="">
                    <textarea id="post__form" ref={newPost}></textarea>
                    <button onClick={ addPost2 }>Create Post</button>
                </form>
            </div>
            <h2>My posts</h2>
            <div className="posts__container">
                {postsElem}
            </div>
        </div>
    );
}

export default Posts;