export default function StepIndicators({ total, current }) {
  return (
    <div
      className="flex justify-center gap-2 my-2"
      role="img"
      aria-label={`Step ${current + 1} of ${total}`}
    >
      {Array.from({ length: total }).map((_, index) => (
        <div
          key={index}
          className={`h-1.5 TS-transition w-1.5 rounded-full transition-all duration-300 ${
            index === current ? "bg-[var(--color-brand)] w-6" : "bg-gray-300"
          }`}
        />
      ))}
    </div>
  );
}
