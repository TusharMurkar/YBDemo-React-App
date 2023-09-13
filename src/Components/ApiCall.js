
import axios from 'axios';
import React, { useEffect, useState } from 'react';

function MyComponent() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Define the API endpoint URL
    // const apiUrl = 'https://samples.mycontentdemo.com/content/published/api/v1.1/items/CONTC385D5CD595B42EE82585B82D89BB92D?expand=fields.renditions&channelToken=ba0efff9c021422cb134c2fd5daf6015';

    // const apiUrl = 'https://yblwebstage-yesbankcloud2.cec.ocp.oraclecloud.com/content/management/api/v1.1/items?q=(type eq "ybl-dynamic-comp-assets")';
    
    const apiUrl = 'https://ybdemo-sandeshpawaskar42.cec.ocp.oraclecloud.com/content/published/api/v1.1/items?q=(type eq "card-structure")';

    const headers = {
        Authorization: "session",
        channelToken: "0a64a66aa81740368ac48630bed9bfd5",
        Accept: "application/json"
      };


    // Make the API call
    axios.get(apiUrl,{
        headers: headers
    })
      .then(response => {
        console.log(response);
        // setData(response.data);
        // setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        setLoading(false);
      });
  }, []); // Empty dependency array to run the effect only once

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {data.map(item => (
            <li key={item.population}>{item.population}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default MyComponent;
