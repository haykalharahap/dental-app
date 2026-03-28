import { useApp } from '../context/AppContext';

export default function Toast() {
  const { toast } = useApp();

  return (
    <div className={`toast ${toast ? 'show' : ''} ${toast?.type === 'error' ? 'toast--error' : ''}`} id="toast">
      {toast?.message || ''}
    </div>
  );
}
