import Card from './components/Card';
import Header from './components/Header';
import axios from 'axios';
import { useState, useEffect } from 'react';

const App = () => {
  const [data, setData] = useState([]);
  const [query, setQuery] = useState('');

  useEffect(() => {
    const fetchQuery = async () => {
      const res = await axios.get(`http://localhost:5000/?q=${query}`);
      setData(res.data);
    };

    if (query.length === 0 || query.length > 1) fetchQuery();
  }, [query]);

  return (
    <>
      <Header setQuery={setQuery} />
      <Card data={data} />
    </>
  );
};

export default App;
