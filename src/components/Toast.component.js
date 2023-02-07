import { CheckCircleOutline } from "@mui/icons-material";

const Toast = ({ msg }) => {
  return (
    <Alert icon={<CheckCircleOutline fontSize="inherit" />} severity="success">
      {msg}
    </Alert>
  );
};
export default Toast;

// Steps:
//  create a global store
//  add a toast msg and status to that whenever needed
//  and add a useeffect to trigger whenever the toast msg is added in this File
//  then show the toast for 5 sec
