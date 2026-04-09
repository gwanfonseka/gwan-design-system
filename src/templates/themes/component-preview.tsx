"use client";

const ComponentPreview = ({ vars }: { vars: Record<string, string> }) => {
  const v = (token: string) => `var(${token})`;

  const barHeights = [40, 65, 50, 80, 60, 90, 45, 70, 55, 85];

  return (
    <div
      className="rounded-xl border overflow-hidden text-[11px] leading-tight"
      style={{
        borderColor: v("--border"),
        background: v("--background"),
        color: v("--foreground"),
        ...vars as React.CSSProperties,
      }}
    >
      {/* Window chrome */}
      <div
        className="flex items-center justify-between px-4 py-2.5 border-b shrink-0"
        style={{ background: v("--surface-raised"), borderColor: v("--border") }}
      >
        <div className="flex items-center gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-rose-500/70" />
          <div className="w-2.5 h-2.5 rounded-full bg-amber-400/70" />
          <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/70" />
        </div>
        <span className="text-[9px] font-bold tracking-[0.2em] uppercase" style={{ color: v("--muted-fg") }}>
          Live Preview
        </span>
        <div className="w-14" />
      </div>

      {/* App shell */}
      <div className="flex" style={{ height: "680px" }}>

        {/* Sidebar */}
        <div
          className="hidden sm:flex w-32 lg:w-40 shrink-0 flex-col border-r"
          style={{ background: v("--surface"), borderColor: v("--border") }}
        >
          {/* Logo */}
          <div
            className="px-4 py-3.5 border-b font-black tracking-[0.2em] text-[10px] uppercase"
            style={{ borderColor: v("--border"), color: v("--foreground") }}
          >
            ACME
          </div>

          {/* Nav items */}
          <nav className="flex flex-col gap-0.5 p-2 flex-1 overflow-y-auto">
            {[
              { label: "Dashboard", active: true },
              { label: "Orders", active: false },
              { label: "Products", active: false },
              { label: "Customers", active: false },
              { label: "Analytics", active: false },
              { label: "Settings", active: false },
            ].map(({ label, active }) => (
              <div
                key={label}
                className="px-3 py-2 rounded-md font-medium truncate"
                style={{
                  background: active ? v("--primary-default") : "transparent",
                  color: active ? v("--primary-default-fg") : v("--muted-fg"),
                }}
              >
                {label}
              </div>
            ))}
          </nav>

          {/* Sidebar mini card */}
          <div
            className="mx-2 mb-3 rounded-lg p-3 border"
            style={{ background: v("--surface-raised"), borderColor: v("--border") }}
          >
            <p className="text-[9px] font-bold uppercase tracking-widest mb-1" style={{ color: v("--muted-fg") }}>Storage</p>
            <div className="w-full h-1.5 rounded-full mb-1" style={{ background: v("--surface-overlay") }}>
              <div className="h-full rounded-full w-3/5" style={{ background: v("--primary-default") }} />
            </div>
            <p className="text-[9px]" style={{ color: v("--muted-fg") }}>6.2 / 10 GB</p>
          </div>

          {/* User row */}
          <div
            className="px-3 py-3 border-t flex items-center gap-2"
            style={{ borderColor: v("--border") }}
          >
            <div
              className="w-7 h-7 rounded-full flex items-center justify-center text-[9px] font-bold shrink-0"
              style={{ background: v("--primary-muted"), color: v("--primary-default") }}
            >
              JD
            </div>
            <div className="min-w-0 hidden lg:block">
              <div className="font-semibold truncate text-[10px]" style={{ color: v("--foreground") }}>John Doe</div>
              <div className="text-[9px] truncate" style={{ color: v("--muted-fg") }}>Admin</div>
            </div>
          </div>
        </div>

        {/* Main content */}
        <div className="flex-1 flex flex-col overflow-hidden min-w-0">

          {/* Top bar */}
          <div
            className="flex items-center justify-between px-4 py-2.5 border-b shrink-0 gap-2"
            style={{ background: v("--surface"), borderColor: v("--border") }}
          >
            <div className="flex items-center gap-3 min-w-0">
              <span className="font-bold tracking-wide truncate" style={{ color: v("--foreground") }}>Dashboard</span>
              <span
                className="hidden sm:block text-[9px] font-semibold px-2 py-0.5 rounded-full"
                style={{ background: v("--success-bg"), color: v("--success-fg") }}
              >
                Live
              </span>
            </div>
            <div className="flex items-center gap-2 shrink-0">
              <div
                className="hidden xs:flex items-center gap-1.5 px-3 py-1.5 rounded text-[10px] font-semibold"
                style={{ background: v("--surface-raised"), color: v("--foreground"), border: `1px solid ${v("--border")}` }}
              >
                <svg viewBox="0 0 12 12" fill="none" className="w-3 h-3" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6 1v10M1 6h10" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
                </svg>
                Export
              </div>
              <div
                className="px-3 py-1.5 rounded text-[10px] font-semibold"
                style={{ background: v("--primary-default"), color: v("--primary-default-fg") }}
              >
                + New Order
              </div>
            </div>
          </div>

          {/* Body */}
          <div className="flex-1 overflow-y-auto p-3 sm:p-4 flex flex-col gap-4">

            {/* Stats row */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3">
              {[
                { label: "Revenue", value: "$48.2k", change: "+12%", bg: v("--success-bg"), fg: v("--success-fg") },
                { label: "Orders", value: "1,284", change: "+5%", bg: v("--success-bg"), fg: v("--success-fg") },
                { label: "Pending", value: "24", change: "On hold", bg: v("--warning-bg"), fg: v("--warning-fg") },
                { label: "Refunds", value: "37", change: "2 urgent", bg: v("--danger-bg"), fg: v("--danger-fg") },
              ].map(({ label, value, change, bg, fg }) => (
                <div
                  key={label}
                  className="rounded-lg p-3 flex flex-col gap-1 border"
                  style={{ background: v("--surface"), borderColor: v("--border") }}
                >
                  <span className="text-[9px] font-semibold uppercase tracking-widest" style={{ color: v("--muted-fg") }}>{label}</span>
                  <span className="font-black text-sm sm:text-base" style={{ color: v("--foreground") }}>{value}</span>
                  <span className="text-[9px] font-semibold px-1.5 py-0.5 rounded w-fit" style={{ background: bg, color: fg }}>{change}</span>
                </div>
              ))}
            </div>

            {/* Chart + Breakdown row */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">

              {/* Bar chart */}
              <div
                className="sm:col-span-2 rounded-lg border p-4 flex flex-col gap-3"
                style={{ background: v("--surface"), borderColor: v("--border") }}
              >
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-bold uppercase tracking-widest" style={{ color: v("--foreground") }}>Revenue</span>
                  <span className="text-[9px]" style={{ color: v("--muted-fg") }}>Last 10 weeks</span>
                </div>
                <div className="flex items-end gap-1.5 h-20">
                  {barHeights.map((h, i) => (
                    <div key={i} className="flex-1 rounded-sm transition-all" style={{
                      height: `${h}%`,
                      background: i === 7 ? v("--primary-default") : v("--primary-muted"),
                      opacity: i === 7 ? 1 : 0.6,
                    }} />
                  ))}
                </div>
                <div className="flex justify-between">
                  {["W1","W2","W3","W4","W5","W6","W7","W8","W9","W10"].map((w, i) => (
                    <span key={w} className="text-[8px] flex-1 text-center" style={{ color: i === 7 ? v("--primary-default") : v("--muted-fg"), fontWeight: i === 7 ? 700 : 400 }}>{w}</span>
                  ))}
                </div>
              </div>

              {/* Top products */}
              <div
                className="rounded-lg border p-4 flex flex-col gap-3"
                style={{ background: v("--surface"), borderColor: v("--border") }}
              >
                <span className="text-[10px] font-bold uppercase tracking-widest" style={{ color: v("--foreground") }}>Top Products</span>
                <div className="flex flex-col gap-2.5">
                  {[
                    { name: "Pro Plan", pct: 72 },
                    { name: "Starter", pct: 48 },
                    { name: "Enterprise", pct: 31 },
                    { name: "Add-ons", pct: 19 },
                  ].map(({ name, pct }) => (
                    <div key={name} className="flex flex-col gap-1">
                      <div className="flex justify-between">
                        <span className="text-[9px]" style={{ color: v("--foreground") }}>{name}</span>
                        <span className="text-[9px] font-semibold" style={{ color: v("--muted-fg") }}>{pct}%</span>
                      </div>
                      <div className="w-full h-1.5 rounded-full" style={{ background: v("--surface-overlay") }}>
                        <div className="h-full rounded-full" style={{ width: `${pct}%`, background: v("--primary-default") }} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Table */}
            <div className="rounded-lg border overflow-hidden" style={{ borderColor: v("--border") }}>
              <div
                className="flex items-center justify-between px-4 py-2.5 border-b"
                style={{ background: v("--surface-raised"), borderColor: v("--border") }}
              >
                <span className="text-[10px] font-bold uppercase tracking-widest" style={{ color: v("--foreground") }}>Recent Orders</span>
                <span className="text-[9px] font-semibold" style={{ color: v("--primary-default") }}>View all →</span>
              </div>

              {/* Header */}
              <div
                className="grid grid-cols-3 sm:grid-cols-4 px-4 py-2 border-b"
                style={{ background: v("--surface-overlay"), borderColor: v("--border") }}
              >
                {["Order", "Customer", "Amount", "Status"].map((h, i) => (
                  <span key={h} className={`text-[9px] font-bold uppercase tracking-widest ${i === 2 ? "hidden sm:block" : ""}`} style={{ color: v("--muted-fg") }}>{h}</span>
                ))}
              </div>

              {[
                { id: "#4021", customer: "Alex Chon", amount: "$129.00", status: "Completed", bg: v("--success-bg"), fg: v("--success-fg") },
                { id: "#4020", customer: "Sam Rivera", amount: "$89.50", status: "Pending", bg: v("--warning-bg"), fg: v("--warning-fg") },
                { id: "#4019", customer: "Jordan Lee", amount: "$245.00", status: "Refunded", bg: v("--danger-bg"), fg: v("--danger-fg") },
                { id: "#4018", customer: "Morgan K.", amount: "$62.00", status: "Completed", bg: v("--success-bg"), fg: v("--success-fg") },
                { id: "#4017", customer: "Casey Wu", amount: "$310.00", status: "Processing", bg: v("--warning-bg"), fg: v("--warning-fg") },
              ].map((row, i) => (
                <div
                  key={row.id}
                  className="grid grid-cols-3 sm:grid-cols-4 px-4 py-2.5 border-b last:border-0 items-center"
                  style={{ borderColor: v("--border"), background: i % 2 === 0 ? v("--surface") : "transparent" }}
                >
                  <span className="font-mono font-semibold text-[10px]" style={{ color: v("--foreground") }}>{row.id}</span>
                  <span className="truncate text-[10px]" style={{ color: v("--foreground") }}>{row.customer}</span>
                  <span className="font-semibold text-[10px] hidden sm:block" style={{ color: v("--foreground") }}>{row.amount}</span>
                  <span className="text-[9px] font-bold px-2 py-0.5 rounded w-fit" style={{ background: row.bg, color: row.fg }}>{row.status}</span>
                </div>
              ))}
            </div>

            {/* Bottom row: Alert + Team */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">

              {/* Alert banner */}
              <div
                className="rounded-lg border-l-4 px-4 py-3 flex items-start gap-2"
                style={{ borderColor: v("--primary-default"), background: v("--surface-raised") }}
              >
                <svg viewBox="0 0 16 16" fill="none" className="w-3.5 h-3.5 shrink-0 mt-0.5" xmlns="http://www.w3.org/2000/svg" style={{ color: v("--primary-default") }}>
                  <circle cx="8" cy="8" r="6.5" stroke="currentColor" strokeWidth="1.4" />
                  <path d="M8 7v4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
                  <circle cx="8" cy="5" r="0.75" fill="currentColor" />
                </svg>
                <div>
                  <p className="font-bold text-[10px] uppercase tracking-widest" style={{ color: v("--foreground") }}>System Update</p>
                  <p className="text-[10px] mt-0.5" style={{ color: v("--muted-fg") }}>Maintenance on Sunday 2–4 AM UTC.</p>
                </div>
              </div>

              {/* Team avatars */}
              <div
                className="rounded-lg border px-4 py-3 flex flex-col gap-2"
                style={{ background: v("--surface-raised"), borderColor: v("--border") }}
              >
                <span className="text-[9px] font-bold uppercase tracking-widest" style={{ color: v("--muted-fg") }}>Team Online</span>
                <div className="flex items-center gap-2 flex-wrap">
                  {[
                    { initials: "AC", color: v("--success") },
                    { initials: "SR", color: v("--warning") },
                    { initials: "JL", color: v("--danger") },
                    { initials: "MK", color: v("--primary-default") },
                  ].map(({ initials, color }) => (
                    <div key={initials} className="flex items-center gap-1.5">
                      <div
                        className="w-6 h-6 rounded-full flex items-center justify-center text-[9px] font-bold"
                        style={{ background: v("--surface-overlay"), color: v("--foreground") }}
                      >
                        {initials}
                      </div>
                      <div className="w-1.5 h-1.5 rounded-full" style={{ background: color }} />
                    </div>
                  ))}
                  <span className="text-[9px]" style={{ color: v("--muted-fg") }}>4 active</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default ComponentPreview;
