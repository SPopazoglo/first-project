import React from 'react'
import ProfileInfo from './ProfileInfo/ProfileInfo'
import MyPostsContainer from './myPosts/MyPostsContainer'

function Profile(props) {
  return (
    <div>
      <ProfileInfo
        profile={props.profile}
        status={props.status}
        updateStatus={props.updateStatus}
      />
      <MyPostsContainer />
    </div>
  )
}

export default Profile
