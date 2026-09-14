import Link from "next/link";

import {
  ArrowUpRight,
  BarChart3,
  ExternalLink,
  Globe2,
  Newspaper,
  RefreshCw,
  Search,
  TrendingUp,
  Zap,
} from "lucide-react";

export const revalidate = 300;

const marketDefinitions = [
  {
    symbol: "BZ=F",
    name: "Brent Crude",
    short: "BRENT",
    unit: "$ / barrel",
  },
  {
    symbol: "CL=F",
    name: "WTI Crude",
    short: "WTI",
    unit: "$ / barrel",
  },
  {
    symbol: "GC=F",
    name: "Gold",
    short: "GOLD",
    unit: "$ / oz",
  },
  {
    symbol: "NG=F",
    name: "Natural Gas",
    short: "NAT GAS",
    unit: "$ / MMBtu",
  },
];

const newsFeeds = [
  {
    category: "Oil & Gas",
    query: "oil gas energy crude oil",
  },
  {
    category: "Nigeria",
    query: "Nigeria business economy oil",
  },
  {
    category: "Business",
    query: "Nigeria business companies investment",
  },
  {
    category: "Markets",
    query: "global markets commodities stocks",
  },
  {
    category: "Technology",
    query: "technology business Africa Nigeria",
  },
];

function cleanText(value = "") {
  return value
    .replace(/<!\[CDATA\[|\]\]>/g, "")
    .replace(/<[^>]*>/g, "")
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&apos;/g, "'")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&#x27;/g, "'")
    .replace(/&#x2F;/g, "/")
    .trim();
}

function extractTag(block, tag) {
  const match = block.match(
    new RegExp(`<${tag}[^>]*>([\\s\\S]*?)<\\/${tag}>`, "i")
  );

  return match ? cleanText(match[1]) : "";
}

function extractLink(block) {
  const match = block.match(/<link[^>]*>([\s\S]*?)<\/link>/i);

  if (match) {
    return cleanText(match[1]);
  }

  const alternate = block.match(
    /<link[^>]+href=["']([^"']+)["'][^>]*\/?>/i
  );

  return alternate ? alternate[1] : "#";
}

async function getNewsFeed(feed) {
  try {
    const url = `https://news.google.com/rss/search?q=${encodeURIComponent(
      feed.query
    )}&hl=en-NG&gl=NG&ceid=NG:en`;

    const response = await fetch(url, {
      next: {
        revalidate: 300,
      },
      headers: {
        "User-Agent": "Mozilla/5.0 BBGL Corporate News",
      },
    });

    if (!response.ok) {
      return [];
    }

    const xml = await response.text();

    const items = xml.match(/<item>[\s\S]*?<\/item>/gi) || [];

    return items.slice(0, 8).map((item, index) => {
      const title = extractTag(item, "title");
      const link = extractLink(item);
      const pubDate = extractTag(item, "pubDate");
      const source = extractTag(item, "source");
      const description = extractTag(item, "description");

      return {
        id: `${feed.category}-${index}-${title}`,
        title,
        link,
        pubDate,
        source: source || "News source",
        description:
          description ||
          "Read the original report for the latest information and market developments.",
        category: feed.category,
      };
    });
  } catch {
    return [];
  }
}

async function getMarketData(symbol) {
  try {
    const url = `https://query1.finance.yahoo.com/v8/finance/chart/${encodeURIComponent(
      symbol
    )}?range=1d&interval=5m`;

    const response = await fetch(url, {
      next: {
        revalidate: 60,
      },
      headers: {
        "User-Agent": "Mozilla/5.0 BBGL Market Dashboard",
      },
    });

    if (!response.ok) {
      return null;
    }

    const data = await response.json();

    const result = data?.chart?.result?.[0];

    if (!result) {
      return null;
    }

    const meta = result.meta;

    const price =
      meta?.regularMarketPrice ??
      meta?.previousClose ??
      null;

    const previousClose =
      meta?.previousClose ??
      meta?.chartPreviousClose ??
      null;

    if (price === null) {
      return null;
    }

    const change =
      previousClose !== null
        ? price - previousClose
        : null;

    const percentage =
      previousClose && change !== null
        ? (change / previousClose) * 100
        : null;

    return {
      price,
      previousClose,
      change,
      percentage,
      currency: meta?.currency || "USD",
      exchange: meta?.exchangeName || "",
    };
  } catch {
    return null;
  }
}

function formatPrice(value, digits = 2) {
  if (value === null || value === undefined) {
    return "—";
  }

  return Number(value).toLocaleString("en-US", {
    minimumFractionDigits: digits,
    maximumFractionDigits: digits,
  });
}

function formatPercent(value) {
  if (value === null || value === undefined) {
    return "—";
  }

  const sign = value >= 0 ? "+" : "";

  return `${sign}${Number(value).toFixed(2)}%`;
}

function getArticleSummary(article) {
  const text = cleanText(article.description);

  if (!text) {
    return "Read the original report for the latest developments.";
  }

  if (text.length <= 155) {
    return text;
  }

  return `${text.slice(0, 155).trim()}...`;
}

function MarketCard({ market, data }) {
  const positive =
    data?.percentage !== null &&
    data?.percentage !== undefined &&
    data?.percentage >= 0;

  return (
    <div className="min-w-[245px] border-r border-white/10 px-6 py-5 last:border-r-0">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-slate-500">
            {market.short}
          </p>

          <h3 className="mt-2 text-sm font-semibold text-white">
            {market.name}
          </h3>
        </div>

        <TrendingUp
          size={17}
          className={
            positive
              ? "text-emerald-400"
              : "text-slate-500"
          }
        />
      </div>

      <div className="mt-5 flex items-end justify-between gap-4">
        <div>
          <p className="text-2xl font-semibold tracking-tight text-white">
            {data ? formatPrice(data.price) : "—"}
          </p>

          <p className="mt-1 text-[10px] uppercase tracking-[0.16em] text-slate-500">
            {market.unit}
          </p>
        </div>

        <div
          className={`text-sm font-semibold ${
            positive
              ? "text-emerald-400"
              : "text-red-400"
          }`}
        >
          {data ? formatPercent(data.percentage) : "—"}
        </div>
      </div>
    </div>
  );
}

export default async function NewsPage() {
  const [marketResults, newsResults] = await Promise.all([
    Promise.all(
      marketDefinitions.map(async (market) => ({
        ...market,
        data: await getMarketData(market.symbol),
      }))
    ),

    Promise.all(newsFeeds.map(getNewsFeed)),
  ]);

  const allNews = newsResults
    .flat()
    .filter((article) => article.title)
    .sort((a, b) => {
      const first = new Date(a.pubDate).getTime();
      const second = new Date(b.pubDate).getTime();

      return second - first;
    });

  const uniqueNews = Array.from(
    new Map(
      allNews.map((article) => [
        article.title.toLowerCase(),
        article,
      ])
    ).values()
  );

  const featured =
    uniqueNews.find(
      (article) => article.category === "Oil & Gas"
    ) || uniqueNews[0];

  const oilNews = uniqueNews
    .filter((article) => article.category === "Oil & Gas")
    .slice(0, 6);

  const nigeriaNews = uniqueNews
    .filter((article) => article.category === "Nigeria")
    .slice(0, 6);

  const latestNews = uniqueNews.slice(0, 12);

  return (
    <main className="min-h-screen bg-[#f6f8fa] text-slate-900">

      {/* =====================================================
          NEWS HERO
      ====================================================== */}

      <section className="relative min-h-[620px] overflow-hidden bg-[#12304a] sm:min-h-[680px] lg:min-h-[760px]">
        <img
          src="/news.jpg"
          alt="BBGL Business and Energy Intelligence"
          className="absolute inset-0 w-full object-cover object-center"
        />

        <div className="absolute inset-0 bg-black/20" />

        <div className="absolute inset-0 bg-gradient-to-t from-[#071a2d]/95 via-[#071a2d]/45 to-transparent" />

        <div className="absolute -bottom-40 -right-40 h-[500px] w-[500px] rounded-full bg-[#c79a45]/10 blur-3xl" />

        <div className="bbgl-container relative z-10 flex min-h-[620px] items-end pb-14 sm:min-h-[680px] sm:pb-16 lg:min-h-[760px] lg:pb-20">
          <div className="max-w-4xl">
            <div className="mb-5 flex items-center gap-3">
              <span className="text-xs font-bold uppercase tracking-[0.28em] text-[#d9b56a]">
                BBGL Intelligence
              </span>
            </div>

            <h1 className="max-w-4xl text-4xl font-semibold leading-[1.04] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
              Business, energy
              <span className="text-[#d9b56a]">
                {" "}
                & markets.
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-7 text-slate-200 sm:text-lg sm:leading-8">
              Stay informed with the latest business developments,
              energy news and market movements relevant to the
              industries and markets BBGL operates in.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-4 border-t border-white/20 pt-6">
              <div>
                <p className="text-2xl font-semibold text-white">
                  Market
                </p>

                <p className="mt-1 text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">
                  Intelligence
                </p>
              </div>

              <div className="h-8 w-px bg-white/20" />

              <div>
                <p className="text-2xl font-semibold text-white">
                  Energy
                </p>

                <p className="mt-1 text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">
                  Coverage
                </p>
              </div>

              <div className="hidden h-8 w-px bg-white/20 sm:block" />

              <div className="hidden sm:block">
                <p className="text-sm font-medium text-white">
                  Business news & market insight
                </p>

                <p className="mt-1 text-xs text-slate-400">
                  BBGL Intelligence Center
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 h-[2px] w-full bg-gradient-to-r from-transparent via-[#c79a45] to-transparent" />
      </section>

      {/* =====================================================
          MARKET TICKER
      ====================================================== */}

      <section className="overflow-hidden bg-[#071a2d]">
        <div className="bbgl-container">
          <div className="flex items-center gap-4 border-b border-white/10 py-3">
            <div className="flex shrink-0 items-center gap-2">
              <BarChart3
                size={16}
                className="text-[#d9b56a]"
              />

              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white">
                Markets
              </span>
            </div>

            <span className="h-4 w-px bg-white/10" />

            <span className="text-[10px] text-slate-500">
              Market snapshot
            </span>
          </div>

          <div className="overflow-x-auto">
            <div className="flex min-w-max">
              {marketResults.map((market) => (
                <MarketCard
                  key={market.symbol}
                  market={market}
                  data={market.data}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          CATEGORY NAV
      ====================================================== */}

      <section className="border-b border-slate-200 bg-white">
        <div className="bbgl-container">
          <div className="flex overflow-x-auto">
            {[
              "All",
              "Oil & Gas",
              "Nigeria",
              "Business",
              "Markets",
              "Technology",
            ].map((category, index) => (
              <a
                key={category}
                href={
                  index === 0
                    ? "#latest"
                    : `#${category
                        .toLowerCase()
                        .replace(/\s+/g, "-")
                        .replace("&", "and")}`
                }
                className={`whitespace-nowrap border-b-2 px-5 py-5 text-xs font-bold uppercase tracking-[0.12em] transition ${
                  index === 0
                    ? "border-[#c79a45] text-[#071a2d]"
                    : "border-transparent text-slate-400 hover:border-[#c79a45] hover:text-[#071a2d]"
                }`}
              >
                {category}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          FEATURED NEWS
      ====================================================== */}

      {featured && (
        <section className="bbgl-container py-16 sm:py-20 lg:py-24">
          <div className="mb-8 flex items-end justify-between gap-6">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#b78938]">
                Featured
              </p>

              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[#071a2d] sm:text-4xl">
                Market intelligence
              </h2>
            </div>

            <div className="hidden items-center gap-2 text-xs text-slate-400 sm:flex">
              <Globe2 size={15} />
              Global coverage
            </div>
          </div>

          <article className="group overflow-hidden bg-[#12304a] shadow-xl">
            <div className="grid lg:grid-cols-[1.2fr_0.8fr]">
              <div className="relative min-h-[360px] overflow-hidden bg-gradient-to-br from-[#164563] to-[#071a2d] p-8 sm:p-12 lg:min-h-[470px] lg:p-14">
                <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[#c79a45]/10 blur-3xl" />

                <div className="relative z-10 flex h-full flex-col justify-between">
                  <div>
                    <span className="inline-flex items-center gap-2 border border-[#d9b56a]/30 bg-[#c79a45]/10 px-3 py-2 text-[10px] font-bold uppercase tracking-[0.2em] text-[#d9b56a]">
                      <Zap size={13} />
                      {featured.category}
                    </span>

                    <h2 className="mt-7 max-w-3xl text-3xl font-semibold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
                      {featured.title}
                    </h2>

                    <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300">
                      {getArticleSummary(featured)}
                    </p>
                  </div>

                  <div className="mt-10 flex flex-wrap items-center gap-5">
                    <a
                      href={featured.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-[#c79a45] px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-[#b68936]"
                    >
                      Read full story
                      <ExternalLink size={16} />
                    </a>

                    <span className="text-xs text-slate-500">
                      Source: {featured.source}
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col justify-between border-t border-white/10 bg-[#071a2d] p-8 sm:p-10 lg:border-l lg:border-t-0 lg:p-12">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-500">
                    Market Context
                  </p>

                  <p className="mt-5 text-lg leading-8 text-slate-300">
                    Energy markets are being closely watched as
                    geopolitical developments and supply disruptions
                    influence crude prices and broader market sentiment.
                  </p>
                </div>

                <div className="mt-10 border-t border-white/10 pt-7">
                  <div className="flex items-center justify-between">
                    <span className="text-xs uppercase tracking-[0.15em] text-slate-500">
                      Source
                    </span>

                    <span className="max-w-[170px] truncate text-sm text-slate-300">
                      {featured.source}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </article>
        </section>
      )}

      {/* =====================================================
          MARKET OVERVIEW
      ====================================================== */}

      <section className="border-y border-slate-200 bg-white py-16 sm:py-20">
        <div className="bbgl-container">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#b78938]">
                Market Watch
              </p>

              <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-tight text-[#071a2d] sm:text-4xl">
                Key markets at a glance.
              </h2>

              <p className="mt-5 max-w-md text-sm leading-7 text-slate-500">
                A quick view of selected global commodities relevant
                to energy, business and investment markets.
              </p>

              <div className="mt-7 flex items-center gap-2 text-xs text-slate-400">
                <RefreshCw size={14} />
                Data refreshed periodically
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {marketResults.map((market) => {
                const positive =
                  market.data?.percentage >= 0;

                return (
                  <div
                    key={market.symbol}
                    className="group border border-slate-200 bg-[#f8fafc] p-6 transition duration-300 hover:-translate-y-1 hover:border-[#c79a45]/40 hover:bg-white hover:shadow-lg"
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">
                          {market.short}
                        </p>

                        <h3 className="mt-2 font-semibold text-[#071a2d]">
                          {market.name}
                        </h3>
                      </div>

                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#071a2d] text-[#d9b56a]">
                        <BarChart3 size={18} />
                      </div>
                    </div>

                    <div className="mt-7 flex items-end justify-between">
                      <div>
                        <p className="text-3xl font-semibold tracking-tight text-[#071a2d]">
                          {market.data
                            ? formatPrice(market.data.price)
                            : "—"}
                        </p>

                        <p className="mt-1 text-[10px] uppercase tracking-[0.15em] text-slate-400">
                          {market.unit}
                        </p>
                      </div>

                      <span
                        className={`text-sm font-bold ${
                          positive
                            ? "text-emerald-500"
                            : "text-red-500"
                        }`}
                      >
                        {market.data
                          ? formatPercent(
                              market.data.percentage
                            )
                          : "—"}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          LATEST NEWS
      ====================================================== */}

      <section
        id="latest"
        className="bbgl-container py-16 sm:py-20 lg:py-24"
      >
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#b78938]">
              Newsroom
            </p>

            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-[#071a2d] sm:text-4xl">
              Latest developments.
            </h2>
          </div>

          <div className="relative w-full md:max-w-xs">
            <Search
              size={17}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
            />

            <input
              type="text"
              placeholder="Search news..."
              className="h-12 w-full border border-slate-200 bg-white pl-11 pr-4 text-sm outline-none transition focus:border-[#c79a45] focus:ring-2 focus:ring-[#c79a45]/10"
            />
          </div>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {latestNews.map((article, index) => (
            <article
              key={article.id}
              className="group flex h-full flex-col overflow-hidden border border-slate-200 bg-white transition duration-500 hover:-translate-y-1 hover:border-[#c79a45]/40 hover:shadow-xl"
            >
              <div className="relative h-2 bg-gradient-to-r from-[#071a2d] via-[#c79a45] to-[#071a2d]" />

              <div className="flex flex-1 flex-col p-7">
                <div className="flex items-center justify-between gap-4">
                  <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#b78938]">
                    {article.category}
                  </span>

                  <span className="text-[10px] text-slate-400">
                    #{String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                <h3 className="mt-5 text-xl font-semibold leading-7 tracking-tight text-[#071a2d] transition group-hover:text-[#b78938]">
                  {article.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-slate-500">
                  {getArticleSummary(article)}
                </p>

                <div className="mt-auto pt-7">
                  <div className="mb-5 border-t border-slate-100 pt-5">
                    <span className="truncate text-xs font-medium text-slate-400">
                      {article.source}
                    </span>
                  </div>

                  <a
                    href={article.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.14em] text-[#071a2d] transition group-hover:text-[#b78938]"
                  >
                    Read story
                    <ArrowUpRight size={15} />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        {latestNews.length === 0 && (
          <div className="border border-dashed border-slate-300 bg-white p-12 text-center">
            <Newspaper
              size={32}
              className="mx-auto text-slate-300"
            />

            <h3 className="mt-5 font-semibold text-[#071a2d]">
              News is temporarily unavailable
            </h3>

            <p className="mt-2 text-sm text-slate-500">
              Please refresh the page to try loading the latest reports.
            </p>
          </div>
        )}
      </section>

      {/* =====================================================
          OIL & GAS
      ====================================================== */}

      <section
        id="oil-and-gas"
        className="bg-[#071a2d] py-16 sm:py-20 lg:py-24"
      >
        <div className="bbgl-container">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#d9b56a]">
                Energy Desk
              </p>

              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                Oil & Gas
              </h2>

              <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-400">
                Follow developments across crude oil, energy markets,
                production, supply and the wider oil and gas industry.
              </p>
            </div>

            <div className="flex items-center gap-2 text-xs text-emerald-400">
              <span className="h-2 w-2 rounded-full bg-emerald-400" />
              Market monitored
            </div>
          </div>

          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {oilNews.slice(0, 6).map((article) => (
              <a
                key={article.id}
                href={article.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group border border-white/10 bg-white/[0.03] p-6 transition duration-300 hover:border-[#c79a45]/40 hover:bg-white/[0.06]"
              >
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#d9b56a]">
                    Energy
                  </span>

                  <ArrowUpRight
                    size={16}
                    className="text-slate-600 transition group-hover:text-[#d9b56a]"
                  />
                </div>

                <h3 className="mt-5 text-lg font-semibold leading-7 text-white">
                  {article.title}
                </h3>

                <p className="mt-4 text-sm leading-6 text-slate-400">
                  {getArticleSummary(article)}
                </p>

                <div className="mt-6 border-t border-white/10 pt-4">
                  <span className="text-xs text-slate-500">
                    {article.source}
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          NIGERIA BUSINESS
      ====================================================== */}

      <section
        id="nigeria"
        className="bg-white py-16 sm:py-20 lg:py-24"
      >
        <div className="bbgl-container">
          <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr]">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#b78938]">
                Nigeria Desk
              </p>

              <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-tight text-[#071a2d] sm:text-4xl">
                Business across Nigeria.
              </h2>

              <p className="mt-5 text-sm leading-7 text-slate-500">
                Follow developments across Nigerian business,
                investment, energy and the wider economy.
              </p>

              <div className="mt-7 flex items-center gap-3 border-l-2 border-[#c79a45] pl-5">
                <Globe2
                  size={20}
                  className="text-[#b78938]"
                />

                <span className="text-sm font-medium text-slate-700">
                  Nigeria & African markets
                </span>
              </div>
            </div>

            <div className="divide-y divide-slate-200 border-y border-slate-200">
              {nigeriaNews.map((article, index) => (
                <a
                  key={article.id}
                  href={article.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group grid gap-4 py-6 sm:grid-cols-[55px_1fr_auto] sm:items-start"
                >
                  <span className="text-sm font-bold text-[#c79a45]">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <div>
                    <h3 className="font-semibold leading-6 text-[#071a2d] transition group-hover:text-[#b78938]">
                      {article.title}
                    </h3>

                    <p className="mt-2 text-xs text-slate-400">
                      {article.source}
                    </p>
                  </div>

                  <ArrowUpRight
                    size={17}
                    className="text-slate-300 transition group-hover:text-[#b78938]"
                  />
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          MARKET INSIGHT
      ====================================================== */}

      <section className="bg-[#f6f8fa] py-16 sm:py-20">
        <div className="bbgl-container">
          <div className="overflow-hidden border border-slate-200 bg-white">
            <div className="grid lg:grid-cols-[0.8fr_1.2fr]">
              <div className="bg-[#12304a] p-8 sm:p-10 lg:p-12">
                <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#d9b56a]">
                  BBGL Market Insight
                </p>

                <h2 className="mt-5 text-3xl font-semibold leading-tight text-white">
                  Why energy markets matter.
                </h2>

                <p className="mt-5 text-sm leading-7 text-slate-300">
                  Changes in crude prices can influence transportation,
                  manufacturing, consumer prices, investment decisions
                  and the broader business environment.
                </p>
              </div>

              <div className="p-8 sm:p-10 lg:p-12">
                <div className="grid gap-8 sm:grid-cols-3">
                  <div>
                    <div className="flex h-10 w-10 items-center justify-center bg-[#f6f8fa] text-[#b78938]">
                      <TrendingUp size={19} />
                    </div>

                    <h3 className="mt-5 font-semibold text-[#071a2d]">
                      Prices
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-slate-500">
                      Energy prices influence costs throughout the economy.
                    </p>
                  </div>

                  <div>
                    <div className="flex h-10 w-10 items-center justify-center bg-[#f6f8fa] text-[#b78938]">
                      <Globe2 size={19} />
                    </div>

                    <h3 className="mt-5 font-semibold text-[#071a2d]">
                      Global Risk
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-slate-500">
                      Geopolitical developments can rapidly affect supply.
                    </p>
                  </div>

                  <div>
                    <div className="flex h-10 w-10 items-center justify-center bg-[#f6f8fa] text-[#b78938]">
                      <BarChart3 size={19} />
                    </div>

                    <h3 className="mt-5 font-semibold text-[#071a2d]">
                      Business
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-slate-500">
                      Markets can shape commercial and investment decisions.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          DISCLAIMER
      ====================================================== */}

      <section className="bg-white py-10">
        <div className="bbgl-container">
          <div className="flex flex-col gap-4 border-t border-slate-200 pt-7 sm:flex-row sm:items-start sm:justify-between">
            <div className="max-w-3xl">
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">
                Market Data Notice
              </p>

              <p className="mt-2 text-xs leading-6 text-slate-400">
                Market information displayed on this page is provided
                for general informational purposes and may be delayed
                or unavailable. It should not be treated as investment,
                financial or trading advice. News content belongs to its
                respective publishers and readers should follow the
                original source for the complete report.
              </p>
            </div>

            <div className="shrink-0 text-xs text-slate-400">
              BBGL Intelligence
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          CTA
      ====================================================== */}

      <section className="relative overflow-hidden bg-[#12304a] py-16 sm:py-20">
        <div className="absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full bg-[#c79a45]/10 blur-3xl" />

        <div className="bbgl-container relative z-10">
          <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
            <div className="max-w-3xl">
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#d9b56a]">
                Baki Business Group Limited
              </p>

              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                Business insight for a changing market.
              </h2>

              <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-300">
                Explore the businesses, leadership and sectors that make
                up the BBGL group.
              </p>
            </div>

            <Link
              href="/businesses"
              className="inline-flex w-fit items-center gap-2 bg-[#c79a45] px-7 py-4 text-sm font-semibold text-white transition hover:bg-[#b68936]"
            >
              Explore our businesses
              <ArrowUpRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}