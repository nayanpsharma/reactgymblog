import React ,{useState, useEffect} from 'react';
import './style.css';
import Card from '../UI/Card';
import blogPost from '../../data/blog.json';

const BlogPost = (props) =>{

    const [post, setPost]= useState({});
    const [postId, setPostId] = useState('');

    useEffect(()=>{
        const postId=props.match.params.postId;
        const post = blogPost.data.find(post => post.id == postId);
        setPost(post);
        setPostId(postId)

        
    },[post, props.match.params.postId]);

    return (
        <div className="blogPostContainer">
            <Card>
                <div className="blogHeader">
                <span className="blogCategory">
                    Feauture
                    <h1 className="postTitle">{post.blogTitle }</h1>
                    <span className="postedBy">posted on July21, tips</span>
                </span>
                </div>

                <div className="postImageContainer">
                    <img className="imgwidth" src={require('../../blogPostImages/workout1.jpg')} alt="Post Image" />
                </div>
                
                <div className="postContent">
                    <h3>Post Title</h3>
                    <p> Fitness is life</p>
                </div>
            </Card>

        </div>
    )
}


export default BlogPost;