import { addDoc, collection, serverTimestamp, deleteDoc, doc, updateDoc } from "firebase/firestore";
import { db } from "../firebase/firebiseConfig";
import toast from "react-hot-toast";
export const useFirestore = () => {
  // Delete func;
  const deleteDocument = async (id) => {
    await deleteDoc(doc(db, "todos", id))
    toast.success("deleted")
    };


  // Add func;
  const addNewDoc = async (doc) => {
    await addDoc(collection(db, "todos"), {
      ...doc,
      createdAt: serverTimestamp(),
    });
    toast.success("New Doc Added");
  };


  //change status
  const changeStatus = async (id, status) => {
    const selectedDoc = doc(db, 'todos', id)
    await updateDoc(selectedDoc,{
      completed: !status,
    })
    toast.success("Status Changed")
  }

  return { deleteDocument, addNewDoc, changeStatus };
};
