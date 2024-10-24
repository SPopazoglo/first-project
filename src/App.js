import { Routes, Route } from 'react-router-dom'
import Header from './components/header/Header'
import Navbar from './components/navbar/Navbar'
import Profile from './components/profile/Profile'
import Dialogs from './components/Dialogs/Dialogs'
import News from './components/News/News'
import Music from './components/Music/Music'
import Settings from './components/Settings/Settings'
import './App.css'

function App(props) {
  return (
    <div className="App app-wrapper">
      <Header />
      <Navbar />
      <div className="app-wrapper-content">
        <Routes>
          <Route
            path="profile"
            element={<Profile state={props.state.profilePage} />}
          />
          <Route
            path="dialogs"
            element={<Dialogs state={props.state.dialogsPage} />}
          />
          <Route path="news" element={<News />} />
          <Route path="music" element={<Music />} />
          <Route path="settings" element={<Settings />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
