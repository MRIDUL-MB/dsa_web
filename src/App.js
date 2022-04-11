import Navbar from './components/Navbar';
import QAcards from './components/QAcards';
import Sidebar from './components/Sidebar';
import { Data } from './data/Data';
import { useEffect, useState } from 'react';

function App() {
  const [filters, setFilter] = useState('all');
  const [showData, setShowData] = useState(Data);
  console.log(filters);

  useEffect(() => {
    setShowData(() => {
      if (filters === 'all') return Data;
      return Data.filter((val) => val.topic.includes(filters));
    });
  }, [filters]);

  return (
    <div className='container'>
      <Navbar setFilter={setFilter} />
      <Sidebar setFilter={setFilter} />
      <QAcards data={showData} />
    </div>
  );
}

export default App;
