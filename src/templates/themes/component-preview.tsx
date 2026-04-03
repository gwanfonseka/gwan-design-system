"use client";

import { useState } from "react";
import Button, { BUTTON_VARIANTS } from "@/components/button";
import Tag, { TAG_TYPE } from "@/components/tag";
import Input from "@/components/input";
import Snackbar, { SNACK_BAR_TYPE } from "@/components/snackBar";
import Avatar, { AVATAR_VARIANT } from "@/components/avatar";
import Chip from "@/components/chip";
import { CheckSVG, CrossSVG } from "@/components/icons";

const ComponentPreview = ({ vars }: { vars: Record<string, string> }) => {
  const [inputVal, setInputVal] = useState("");
  const [chip1, setChip1] = useState(true);
  const [chip2, setChip2] = useState(true);

  return (
    <div
      className="rounded-xl border border-border overflow-hidden"
      style={vars as React.CSSProperties}
    >
      {/* Preview header */}
      <div
        className="flex items-center justify-between px-4 py-3 border-b border-border"
        style={{ background: "var(--surface-raised)" }}
      >
        <span className="text-[10px] font-bold tracking-[0.2em] uppercase" style={{ color: "var(--muted-fg)" }}>
          Live Preview
        </span>
        <div className="flex items-center gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-rose-500/70" />
          <div className="w-2.5 h-2.5 rounded-full bg-amber-400/70" />
          <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/70" />
        </div>
      </div>

      {/* Preview content */}
      <div className="p-6 flex flex-col gap-7" style={{ background: "var(--background)" }}>

        {/* Buttons */}
        <div className="flex flex-col gap-2">
          <span className="text-[9px] font-bold tracking-[0.2em] uppercase" style={{ color: "var(--muted-fg)" }}>Buttons</span>
          <div className="flex flex-wrap gap-2">
            <Button variant={BUTTON_VARIANTS.PRIMARY} label="Primary" onClick={() => {}} />
            <Button variant={BUTTON_VARIANTS.SECONDARY} label="Secondary" onClick={() => {}} />
            <Button variant={BUTTON_VARIANTS.TERTIARY} label="Tertiary" onClick={() => {}} />
            <Button variant={BUTTON_VARIANTS.PRIMARY} label="Disabled" onClick={() => {}} disabled />
          </div>
        </div>

        {/* Tags */}
        <div className="flex flex-col gap-2">
          <span className="text-[9px] font-bold tracking-[0.2em] uppercase" style={{ color: "var(--muted-fg)" }}>Tags</span>
          <div className="flex flex-wrap gap-2">
            <Tag type={TAG_TYPE.SUCCESS} label="Success" />
            <Tag type={TAG_TYPE.DANGER} label="Danger" />
            <Tag type={TAG_TYPE.WARNING} label="Warning" />
            <Tag type={TAG_TYPE.INFO} label="Info" />
            <Tag type={TAG_TYPE.DEFAULT} label="Default" />
          </div>
        </div>

        {/* Chips */}
        <div className="flex flex-col gap-2">
          <span className="text-[9px] font-bold tracking-[0.2em] uppercase" style={{ color: "var(--muted-fg)" }}>Chips</span>
          <div className="flex flex-wrap gap-2">
            {chip1 && <Chip label="Design System" onClear={() => setChip1(false)} />}
            {chip2 && <Chip label="Open Source" onClear={() => setChip2(false)} />}
            {!chip1 && !chip2 && (
              <button
                className="text-[10px] text-muted-fg hover:text-foreground transition-colors"
                onClick={() => { setChip1(true); setChip2(true); }}
              >
                Reset chips
              </button>
            )}
          </div>
        </div>

        {/* Input */}
        <div className="flex flex-col gap-2">
          <span className="text-[9px] font-bold tracking-[0.2em] uppercase" style={{ color: "var(--muted-fg)" }}>Input</span>
          <Input
            label="Component name"
            value={inputVal}
            placeholder="e.g. Button"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setInputVal(e.target.value)}
            onClear={inputVal ? () => setInputVal("") : undefined}
          />
        </div>

        {/* Snackbars */}
        <div className="flex flex-col gap-2">
          <span className="text-[9px] font-bold tracking-[0.2em] uppercase" style={{ color: "var(--muted-fg)" }}>Snackbars</span>
          <div className="flex flex-col gap-2">
            <Snackbar type={SNACK_BAR_TYPE.SUCCESS} message="Changes saved successfully." icon={<CheckSVG />} />
            <Snackbar type={SNACK_BAR_TYPE.DANGER} message="Something went wrong." icon={<CrossSVG />} />
          </div>
        </div>

        {/* Avatar */}
        <div className="flex flex-col gap-2">
          <span className="text-[9px] font-bold tracking-[0.2em] uppercase" style={{ color: "var(--muted-fg)" }}>Avatar</span>
          <div className="flex flex-col gap-2">
            <Avatar name="Alex Chon" email="alex@gwan.dev" variant={AVATAR_VARIANT.INITIALS_WITH_FULL} isLoading={false} />
            <Avatar name="Sam Rivera" email="sam@gwan.dev" variant={AVATAR_VARIANT.INITIALS_WITH_FULL} isLoading={false} />
          </div>
        </div>

      </div>
    </div>
  );
};

export default ComponentPreview;
