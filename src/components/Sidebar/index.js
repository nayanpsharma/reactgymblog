import React, {useState, useEffect} from 'react';
import './style.css';
import Card from '../UI/Card';
import blogPost from '../../data/blog.json';
import { NavLink } from 'react-router-dom';
    

const Sidebar = (props) => {

    const [posts, setPosts]= useState([]);

    useEffect(()=>{
        const posts = blogPost.data;
        setPosts(posts);

        
    },posts);



    return (
        <div className="sidebarContainer">
        <Card style={{marginBottom:'20px' ,padding:'20px', boxSizing:'border-box'}}>
            <div className="cardHeader">
                <span>About Us</span>
                

            </div>
            <div className="profileImageContainer">
                <img src="https://i.pinimg.com/originals/cd/a2/08/cda2081dfd2b1af5c0444a032294965c.png" alt=""/>
            </div>

            <div className="cardBody">
                <p className="personalBio">At Synq.fit, we make holistic health easy for you with fun group classes, healthy meals and accessible primary care all on a single app.</p>
            </div>
        </Card>

       

        <Card style={{marginBottom:'20px' ,padding:'20px', boxSizing:'border-box'}}>
        <div className="cardHeader">
                <span>More Posts of Synq.Fit</span>
                

        </div>
        <div className="recentPosts">
 
            {
               posts.map(post=>{
                   return(

                    <NavLink to={'/${post.id}'}>
                        <div className="recentPost">
                            <h3>{post.blogTitle}</h3>
                            <span></span>
                        </div>
                    </NavLink>
                   
                   );
               })
            }
             

            

          
        </div>
        </Card>
        </div>
       
         
    )
}

export default Sidebar;
