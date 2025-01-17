import { Routes, Route } from 'react-router-dom'
import Header from './components/header/Header'
import Navbar from './components/navbar/Navbar'
import ProfileContainer from './components/profile/ProfileContainer'
import DialogsContainer from './components/Dialogs/DialogsContainer'
import News from './components/News/News'
import Music from './components/Music/Music'
import Settings from './components/Settings/Settings'
import UsersContainer from './components/Users/UsersContainer'
import './App.css'

function App(props) {
  return (
    <div className="App app-wrapper">
      <Header />
      <Navbar />
      <div className="app-wrapper-content">
        <Routes>
          <Route path="profile" element={<ProfileContainer />} />
          <Route path="dialogs" element={<DialogsContainer />} />
          <Route path="news" element={<News />} />
          <Route path="music" element={<Music />} />
          <Route path="settings" element={<Settings />} />
          <Route path="users" element={<UsersContainer />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
