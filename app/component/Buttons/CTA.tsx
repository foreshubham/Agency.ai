export default function Button({
  label,
  onClick,
}: {
  label: string;
  onClick?: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className="bg-brand-cta text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition"
    >
      {label}
    </button>
  );
}
