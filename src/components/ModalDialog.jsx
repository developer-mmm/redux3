import { useSelector } from "react-redux";
import { useFirestore } from "../hooks/useFirestore";
import { useRef } from "react";

function ModalDialog() {
    const {SelectedTodo} = useSelector((state) => state.todos)
    const {changeTitle, isPending} = useFirestore()
    const inputRef = useRef()
    const handleSubmit = (e) => {
        e.preventDefault();
        changeTitle(SelectedTodo.id, inputRef.current.value);
    }
  return (
     <dialog id="my_modal_1" className="modal">
     <div className="modal-box">
       <h3 className="font-bold text-lg">Hello!</h3>
       <p className="py-4">
         Press ESC key or click the button below to close
       </p>
       <div className="modal-action">
         <form onSubmit={handleSubmit} method="dialog">
            <input className="input input-primary" ref={inputRef} type="text" defaultValue={SelectedTodo?.title} />
           {/* if there is a button in form, it will close the modal */}
           {!isPending && <button type="submit" className="btn btn-primary">Submit</button>}
           {isPending && <button disabled className="btn btn-primary">Loading...</button>}

           <button className="btn">Close</button>
         </form>
       </div>
     </div>
   </dialog>
  );
}

export default ModalDialog;
