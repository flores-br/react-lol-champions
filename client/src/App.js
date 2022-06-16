import Card from './components/Card';
import Header from './components/Header';
import axios from 'axios';
import { useState, useEffect } from 'react';

const App = () => {
  const PATCH_VERSION = '12.11.1';
  const [data, setData] = useState([]);

  // get all champion names
  const getNames = async () => {
    try {
      const response = await axios
        .get(
          `http://ddragon.leagueoflegends.com/cdn/${PATCH_VERSION}/data/en_US/champion.json`
        )
        .then(res => Object.keys(res.data.data));

      let champData = [];

      for (const n of response) {
        const res = await axios
          .get(
            `http://ddragon.leagueoflegends.com/cdn/${PATCH_VERSION}/data/en_US/champion/${n}.json`
          )
          .then(r => r['data']['data'][`${n}`]);
        res[
          'image'
        ] = `http://ddragon.leagueoflegends.com/cdn/img/champion/loading/${n}_0.jpg`;

        const obj = {
          champion: `${n}`,
          data: res,
        };

        champData.push(obj);
      }

      setData(champData);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getNames();
  }, []);

  return (
    <>
      <Header />
      <Card data={data} />
    </>
  );
};

export default App;
