"use client";

const tickerItems = [
  {
    text: "One Vision. Many Enterprises. One Excellent Standard.",
    color: "text-[#0b3d6e]",
  },
  {
    text: "Baki Business Group Limited",
    color: "text-green-700",
  },
  {
    text: "Oil & Gas",
    color: "text-slate-600",
  },
  {
    text: "Pharmaceuticals",
    color: "text-emerald-700",
  },
  {
    text: "Technology",
    color: "text-blue-700",
  },
  {
    text: "Automotive",
    color: "text-slate-600",
  },
  {
    text: "Consumer Businesses",
    color: "text-green-700",
  },
  {
    text: "Building Businesses. Creating Possibilities.",
    color: "text-[#0b3d6e]",
  },
  {
    text: "Growing Across Multiple Sectors",
    color: "text-slate-600",
  },
  {
    text: "A Nigerian Business Group",
    color: "text-green-700",
  },
];

export default function MarketTicker() {
  return (
    <div className="fixed left-0 right-0 top-[65px] z-40 overflow-hidden border-b border-slate-200 bg-white">
      <div className="flex h-[40px] w-max animate-[ticker_35s_linear_infinite] items-center">
        {[...tickerItems, ...tickerItems].map((item, index) => (
          <div
            key={`${item.text}-${index}`}
            className="flex items-center"
          >
            <span
              className={`px-6 text-[10px] font-bold uppercase tracking-[0.1em] ${item.color}`}
            >
              {item.text}
            </span>

            <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-green-600" />
          </div>
        ))}
      </div>
    </div>
  );
}