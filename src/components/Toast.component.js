import { CheckCircleOutline } from "@mui/icons-material";
import { Alert } from "@mui/material";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { resetToastStore } from "src/slices/toastSlice";

const Toast = () => {
  const [visible, setVisible] = useState(false);
  const toast = useSelector((state) => state.toast.toast);

  const dispatch = useDispatch();

  useEffect(() => {
    if (toast?.msg == "") return;
    setVisible(true);
    setTimeout(() => {
      setVisible(false);
      dispatch(resetToastStore());
    }, 5000);
  }, [toast]);

  return (
    <>
      {visible ? (
        <Alert
          icon={<CheckCircleOutline fontSize="inherit" />}
          severity="success"
        >
          {toast?.msg}"oooooooooooooooooooo"
        </Alert>
      ) : null}
    </>
  );
};
export default Toast;

// Steps:
//  create a global store
//  add a toast msg and status to that whenever needed
//  and add a useeffect to trigger whenever the toast msg is added in this File
//  then show the toast for 5 sec
