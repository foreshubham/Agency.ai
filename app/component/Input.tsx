export default function Input({
  label,
  type = "text",
  value,
  onChange,
}: any) {
  return (
    <div className="flex flex-col gap-1 mb-4">
      <label className="font-medium">{label}</label>
      <input
        type={type}
        value={value}
        onChange={onChange}
        className="border border-gray-300 dark:border-gray-700 rounded px-3 py-2 bg-white dark:bg-[#161823]"
      />
    </div>
  );
}
