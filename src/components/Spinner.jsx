export default function Spinner({ size = 32, className = "" }) {
  return (
    <div
      role="status"
      aria-label="Loading"
      className={`inline-block relative ${className}`}
      style={{ width: size, height: size }}
    >
      <div className="absolute inset-0 rounded-full border-2 border-gray-200 dark:border-gray-700" />
      <div className="absolute inset-0 rounded-full border-2 border-transparent border-t-brand border-r-brand animate-spin" />
    </div>
  );
}
