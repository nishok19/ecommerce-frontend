import { CheckCircleOutline } from "@mui/icons-material";

const Toast = ({ msg }) => {
  return (
    <Alert icon={<CheckCircleOutline fontSize="inherit" />} severity="success">
      {msg}
    </Alert>
  );
};
export default Toast;
