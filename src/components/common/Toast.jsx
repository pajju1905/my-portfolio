import './Toast.css'

export default function Toast({ message }) {
  if (!message) return null

  return (
    <div className="toast-notification" role="status">
      {message}
    </div>
  )
}
