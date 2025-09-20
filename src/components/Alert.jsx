export default function Alert({ type = "info", message }) {
  const styles = {
    success: "bg-green-100 text-green-700 border border-green-400",
    error: "bg-red-100 text-red-700 border border-red-400",
    warning: "bg-yellow-100 text-yellow-700 border border-yellow-400",
    info: "bg-blue-100 text-blue-700 border border-blue-400",
  };

  return (
    <div className={`p-3 rounded-md mb-4 ${styles[type]}`}>{message}</div>
  );
}
