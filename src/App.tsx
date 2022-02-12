import { SideBar, genre_id } from './components/SideBar';
import { Content } from './components/Content';
import { useEffect, useState } from 'react';
import './styles/sidebar.scss';
import './styles/content.scss';
import './styles/global.scss';

export function App() {

  const [changedContent, setChangedContent] = useState<JSX.Element>();

  useEffect(() => {
    setChangedContent((<Content stateId={genre_id}/>));
    console.log('mudou!');
  }, [genre_id])

  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <SideBar />
      {changedContent}
    </div>
  )
}