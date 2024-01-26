import Image from "next/image";
import styles from "./singlePost.module.css";

const SinglePostPage = () => {
  return <div className={styles.container}>
    <div className={styles.imgContainer}>
      <Image
        src='https://images.pexels.com/photos/10850828/pexels-photo-10850828.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
        alt=""
        fill
        className={styles.img}
      />
    </div>
    <div className={styles.textContainer}>
      <h1 className={styles.title}>Title</h1>
      <div className={styles.detail}>
        <Image
          src='/noavatar.png'
          alt=""
          width={50}
          height={50}
          className={styles.avatar}
        />
        <div className={styles.detailText}>
          <span className={styles.detailTitle}>Author</span>
          <span className={styles.detailValue}>Terry Jefferson</span>
        </div>
        <div className={styles.detailText}>
          <span className={styles.detailTitle}>Published</span>
          <span className={styles.detailValue}>04.01.2024</span>
        </div>
      </div>
      <div className={styles.content}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum turpis elit, suscipit a velit sed, elementum tristique quam. Proin eu felis ante. In feugiat enim faucibus odio fringilla, at tristique nisi volutpat. Vestibulum fringilla ex mattis, pellentesque felis in, ultricies arcu. Aenean eget blandit magna, in consectetur augue. Nullam eros arcu, porta at porttitor quis, placerat ac ligula. Nunc egestas est nibh, id tempor turpis luctus sed. Curabitur imperdiet nunc et urna sagittis egestas. Mauris fermentum elit a tortor fermentum auctor. Pellentesque eu dolor elit. Nulla ornare cursus est, non mollis lacus fringilla at.

        Etiam ultrices lectus ante. Curabitur eu molestie risus. Vivamus a condimentum velit, vitae vestibulum ex. Maecenas a rhoncus arcu. Etiam ullamcorper elit id cursus faucibus. Nulla pretium lacus et est fringilla, sit amet porta urna scelerisque. In nec velit sed metus pellentesque lobortis. Praesent eu purus eros. Donec at lacus et orci ornare elementum. Maecenas cursus, sapien et suscipit posuere, arcu magna vehicula mauris, vel elementum nisl arcu id diam. Suspendisse potenti. Nam nec mi sed lacus convallis porta. Integer convallis semper nibh, eu ultricies risus bibendum consectetur.

        Proin blandit porttitor gravida. Donec et aliquet justo. Integer ornare vitae tortor sit amet rutrum. Phasellus dapibus imperdiet molestie. Nulla vehicula porttitor erat, eu eleifend urna euismod vel. Aenean dapibus ultrices magna, vitae aliquet augue vestibulum dictum. Mauris vel dignissim nisl. Sed odio massa, lobortis sed orci vel, accumsan hendrerit felis. Aenean porttitor vitae velit ut auctor. Sed feugiat a neque aliquam venenatis. Cras convallis consectetur metus, quis lacinia eros aliquam vel. In rutrum augue non justo venenatis, vitae placerat erat ullamcorper. Sed iaculis laoreet tempor. Phasellus posuere pulvinar metus cursus rutrum. Nunc sit amet turpis vel nibh bibendum imperdiet eu et orci. Morbi lacinia arcu sit amet sagittis posuere.
      </div>
    </div>
  </div>
}

export default SinglePostPage