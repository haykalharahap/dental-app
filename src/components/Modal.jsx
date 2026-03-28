import { useApp } from '../context/AppContext';

export default function Modal() {
  const { modalContent, hideModal } = useApp();

  if (!modalContent) return null;

  return (
    <div className="modal-overlay active" id="modalOverlay" onClick={(e) => { if (e.target === e.currentTarget) hideModal(); }}>
      <div className="modal" id="modal">
        {modalContent}
      </div>
    </div>
  );
}
