import React  from 'react';
import styles from "../css/pageTitle.module.css";
const PageTitle = ({children}) => {
  return (
    <div className={styles.PageTitle}>
      <h1>{children}</h1>
    </div>
  )
}

export default PageTitle
