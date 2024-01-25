import Image from "next/image"
import Link from "next/link"
import styles from './postCard.module.css'

const PostCard = () => {
    return <div className={styles.container}>
        <div className={styles.top}>
            <div className={styles.imgContainer}>
                <Image
                    src='https://images.pexels.com/photos/10850828/pexels-photo-10850828.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                    alt=""
                    fill
                    className={styles.img}
                />
            </div>
            <span className={styles.date}>04.01.2024</span>
        </div>
        <div className={styles.bottom}>
            <h1 className={styles.title}>Title</h1>
            <p className={styles.desc}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam semper luctus quam ut feugiat. Curabitur pharetra dui non felis commodo sagittis. Pellentesque at sapien hendrerit, eleifend turpis et, laoreet dui.</p>
            <Link  className={styles.link} href='/blog/post'>READ MORE</Link>
        </div>
    </div>
}

export default PostCard