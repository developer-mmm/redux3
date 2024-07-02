// firebase
import {
  collection,
  query,
  where,
  getDocs,
  doc,
  onSnapshot,
} from "firebase/firestore";
import { useEffect, useState } from "react";

import { db } from "../firebase/firebiseConfig";

export const useCollection = (collectionName, whereOptions) => {
  const [data, setData] = useState(null);
  const q = query(collection(db, collectionName), where(...whereOptions));
  useEffect(() => {
    onSnapshot(q, (querySnapshot) => {
      const todos = [];
      querySnapshot.forEach((doc) => {
        todos.push({ id: doc.id, ...doc.data() });
      });
      setData(todos);
    });
  }, [collectionName]);

  return { data };
};
