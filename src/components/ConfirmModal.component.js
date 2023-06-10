import { Description } from "@mui/icons-material";

const ConfirmModal = ({ btnTitle, title, description, isConfirmDialog }) => {
  return (
    <>
      {/* The button to open modal */}
      <label htmlFor="my-modal-confirm-dialog" className="btn">
        {btnTitle}
      </label>

      {/* Put this part before </body> tag */}
      <input
        type="checkbox"
        id="my-modal-confirm-dialog"
        className="modal-toggle"
      />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h3 className="font-bold text-lg">{title}</h3>
          <p className="py-4">{description}</p>
          <div className="modal-action">
            <label
              htmlFor="my-modal-confirm-dialog"
              className="btn"
              onClick={() => isConfirmDialog(true)}
            >
              Confirm
            </label>
            <label
              htmlFor="my-modal-confirm-dialog"
              className="btn"
              onClick={() => isConfirmDialog(false)}
            >
              Cancel
            </label>
          </div>
        </div>
      </div>
    </>
  );
};
export default ConfirmModal;
