import RiskBadge from './RiskBadge'
import { deleteIdentity } from '../api/identities'

export default function IdentityCard({ identity, onDelete }) {
  const handleDelete = async () => {
    try {
      await deleteIdentity(identity.id)
      onDelete(identity.id)
    } catch (err) {
      alert('Failed to delete identity')
    }
  }

  return (
    <div style={{
      background: '#1e1e2e',
      border: '1px solid #313244',
      borderRadius: '10px',
      padding: '16px 20px',
      display: 'flex',
      flexDirection: 'column',
      gap: '8px'
    }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <span style={{ color: '#cdd6f4', fontWeight: '700' }}>{identity.username}</span>
        <RiskBadge level={identity.risk_status} />
      </div>
      <div style={{ color: '#89b4fa', fontSize: '0.85rem' }}>📧 {identity.email}</div>
      <div style={{ color: '#a6adc8', fontSize: '0.8rem' }}>🏷️ {identity.category}</div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '8px' }}>
        <span style={{ color: '#6c7086', fontSize: '0.75rem' }}>
          Created: {new Date(identity.created_at).toLocaleDateString()}
        </span>
        <button onClick={handleDelete} style={{
          background: 'transparent',
          border: '1px solid #f38ba8',
          color: '#f38ba8',
          borderRadius: '6px',
          padding: '4px 12px',
          cursor: 'pointer',
          fontSize: '0.8rem'
        }}>
          Delete
        </button>
      </div>
    </div>
  )
}