import styles from "./footer.module.css";

const Footer = () => {
    return (
      <div className={styles.container}>
        <div className={styles.logo}>P-H Devhouse</div>
        <div className={styles.text}>
          Pearson-Huijsse Development House © All rights reserved.
        </div>
      </div>
    );
  };

export default Footer