import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";
import alertAction from '../../Store/Alert/actions'

const {responseAlert}= alertAction

export default function Alert() {
  console.log('alerta');
  const Toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener("mouseenter", Swal.stopTimer);
      toast.addEventListener("mouseleave", Swal.resumeTimer);
    },
  });

  const dispatch = useDispatch();
  const visible = useSelector((store) => store.alert.visible);
  const icon = useSelector((store) => store.alert.icon);
  const title = useSelector((store) => store.alert.title);
  const type = useSelector((store) => store.alert.type);

  if (visible) {
    if(type==="basic"){
      Toast.fire({
      icon: icon,
      title: title,
    });
    }else if(type==="edit"){
      Swal.fire({
        title: title,
        icon: icon,
        showDenyButton: true,
        confirmButtonText: "Save",
        denyButtonText: `Don't save`
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire("Saved!", "", "success");
          dispatch(responseAlert({response: "edited"}))
        } else if (result.isDenied) {
          Swal.fire("Changes are not saved", "", "error");
          dispatch(responseAlert({response: "denied"}))
        }
        else if (result.isDismissed) {
          Swal.fire("Changes are not saved", "", "error");
          dispatch(responseAlert({response: "denied"}))
        }
      });
    }else if(type==="deleted"){
      Swal.fire({
        title: title,
        icon: icon,
        showDenyButton: true,
        confirmButtonText: "Delete",
        denyButtonText: `Don't delete`
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire("Deleted!", "", "success");
          dispatch(responseAlert({response: "deleted"}))
        } else if (result.isDenied) {
          Swal.fire("It was not deleted", "", "error");
          dispatch(responseAlert({response: "denied"}))
        }
        else if (result.isDismissed) {
          dispatch(responseAlert({response: "denied"}))
        }
      });
    }
    
    
  }

  return <></>;
}
