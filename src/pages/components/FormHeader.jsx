export default function FormHeader({ title }) {
  return (
    <div className="flex flex-col items-center mb-6 min-h-[100px]">
      <h1 className="text-2xl font-bold mb-2 text-center">{title}</h1>
      <p className="text-gray-600 dark:text-gray-400 text-sm">
        Fill in your information to get started
      </p>
    </div>
  );
}
