import "./ConfirmDialog.css";
// eslint-disable-next-line react/prop-types
export default function ConfirmDialog({ onConfirm, onCancel, message }) {
  return (
    <div className="confirm-dialog">
      <p>{message}</p>
      <button onClick={onConfirm} className="confirm-button">
        Yes
      </button>
      <button onClick={onCancel} className="cancel-button">
        No
      </button>
    </div>
  );
}
