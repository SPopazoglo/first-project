import { Routes, Route } from 'react-router-dom'
import Navbar from './components/navbar/Navbar'
import ProfileContainer from './components/profile/ProfileContainer'
import DialogsContainer from './components/Dialogs/DialogsContainer'
import News from './components/News/News'
import Music from './components/Music/Music'
import Settings from './components/Settings/Settings'
import UsersContainer from './components/Users/UsersContainer'
import './App.css'
import HeaderContainer from './components/header/HeaderContainer'
import Login from './components/login/Login'

function App(props) {
  return (
    <div className="App app-wrapper">
      <HeaderContainer />
      <Navbar />
      <div className="app-wrapper-content">
        <Routes>
          <Route path="profile/:userId?" element={<ProfileContainer />} />
          <Route path="dialogs" element={<DialogsContainer />} />
          <Route path="news" element={<News />} />
          <Route path="music" element={<Music />} />
          <Route path="settings" element={<Settings />} />
          <Route path="users" element={<UsersContainer />} />
          <Route path="login" element={<Login />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
