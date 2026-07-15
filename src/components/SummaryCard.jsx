export default function SummaryCard() {
  return (
    <div className="flex justify-between items-center p-4 w-full rounded-xl bg-[var(--surface-2)] mt-2">
      <div>
        <p className="text-gray-400 text-xs mb-2">Income</p>
        <h2 className="text-[var(--color-brand)] font-semibold">↑ +₦76,600</h2>
      </div>
      <div className="w-px h-9 bg-[var(--color-brand)]/30" />
      <div>
        <p className="text-gray-400 text-xs mb-2">Expense</p>
        <h2 className="text-[var(--color-error)] font-semibold">↓ -₦40,600</h2>
      </div>
    </div>
  );
}
