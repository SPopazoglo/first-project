import React from 'react'
import styles from './Post.module.css'

function Post(props) {
  return (
    <div className={styles.item}>
      <img src="https://i.7fon.org/450/g581772.jpg" />
      {props.message}
      <div>
        <span>Like</span> {props.likesCount}
      </div>
    </div>
  )
}

export default Post
