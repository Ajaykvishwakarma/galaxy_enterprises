import style from './Blog.module.css';
import { Navbar } from '../Navbar/Navbar';

export const Blog = () => {

    return (
        <>
        <Navbar />

        <div className={style.blog_controller}>
            <div className={style.post_header}>
               <p>All Posts</p> 
            </div>
            <div className={style.post_div}>
                <h3>Posts are coming soon</h3>
                <p>Stay tuned....</p>
            </div>
            <div></div>

        </div>
        </>
    )
}