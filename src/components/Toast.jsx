export default function Toast({ message, isVisible, onClose }) {
  if (!isVisible) return null

  return (
    <div className="fixed top-20 right-4 bg-red-500 text-white px-6 py-3 shadow-lg z-50 animate-pulse">
      <div className="flex items-center gap-2">
        <span>{message}</span>
        <button onClick={onClose} className="ml-2 hover:text-red-200">
          ×
        </button>
      </div>
    </div>
  )
}
