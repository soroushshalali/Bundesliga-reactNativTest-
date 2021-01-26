import React, { useState, useEffect } from 'react';
import { Text, View, ScrollView } from 'react-native';
import { Bundesliga } from './Bundesliga';
import data from './data.json'


//  var myObj = JSON.parse('{"p": 5}');
//  console.log(myObj);



const Records = () => {



    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);
    // console.log(data[0]);
    // var parseString = require('xml2js').parseString;
    // var xml = data;
    // parseString(xml, function (err, result) {
    //     console.dir(result);
    //     // console.log(result);
    // });

    // useEffect(() => {
    //     fetch('http://www.openligadb.de/api/getmatchdata/bl1/2020/1')
    //         .then((response) => response.json())
    //         .then((json) => setData(json))
    //         .catch((error) => console.error(error))
    //         .finally(() => setLoading(false));

    // }, []);

    return (
        <View style={{ flex: 1, padding: 24 }}>
            {isLoading ? <Text>Loading...</Text> :
                (<View>
                    {/* <Text>{data.Goals}</Text> */}
                    <Text>Articles:</Text>
                </View>
                )}
        </View>
    );
}

export { Records };