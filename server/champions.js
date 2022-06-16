import axios from 'axios';

let champData = [];

// get all champion data
const getData = async () => {
  const PATCH_VERSION = '12.11.1';
  try {
    const response = await axios
      .get(
        `http://ddragon.leagueoflegends.com/cdn/${PATCH_VERSION}/data/en_US/champion.json`
      )
      .then(res => Object.keys(res.data.data));

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
  } catch (err) {
    console.log(err);
  }
};

getData();

export default champData;
