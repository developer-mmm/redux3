// firebase
import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";

import { db } from "../firebase/firebiseConfig";

export const useCollection = (collectionName) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const getData = async () => {
    const querySnapshot =  await getDocs(collection(db, collectionName))
    }
    getData();
  }, [collectionName]);

  return { data };
};
