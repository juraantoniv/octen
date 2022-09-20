import {useEffect, useState} from "react";
import {userService,userPost} from "../../services/index";
import User from "../user/user";
import Post from "../posts/post";


const Users = () => {
    let div ='div'
    const [users, setUser] = useState([]);
    const [post, setPosts] = useState(null)

    let getUserPost =(id)=>{
        userPost.getAllPost(id).then(({data})=>{
            setPosts(data)


        })

    }

    useEffect(() => {
        userService.getAll().then(({data}) =>{ setUser(data)} )
    }, [])

    return (



        <div className={div}>

            {post && <Post key={post.id} item={post}/>}
            {users.map(user => <User key={user.id} user={user} getUserPost={getUserPost}/>)}

        </div>
    );
};

export {Users};