// firebase
import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";

import { db } from "../firebase/firebiseConfig";

export const useCollection = (collectionName) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const getData = async () => {
    const querySnapshot =  await getDocs(collection(db, collectionName))
    const data = [];
    querySnapshot.docs.forEach((doc) =>{
        data.push({id: doc.id, ...doc.data()});
    })

    setData(data);

    }
    getData();
  }, [collectionName]);

  return { data };
};
