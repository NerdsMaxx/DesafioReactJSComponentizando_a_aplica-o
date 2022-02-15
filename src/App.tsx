import { SideBar} from './components/SideBar';
import { Content } from './components/Content';
import { useState } from 'react';
import './styles/sidebar.scss';
import './styles/content.scss';
import './styles/global.scss';

export function App() {

  const [selectedGenreId, setSelectedGenreId] = useState(1);

  function handleClickButton(id: number): void {
    setSelectedGenreId(id);
  }

  function getSelectedGenreId() {
    return selectedGenreId;
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <SideBar handleClickButton={handleClickButton} getSelectedGenreId={getSelectedGenreId}/>
      <Content selectedGenreId={selectedGenreId}/>
    </div>
  )
}