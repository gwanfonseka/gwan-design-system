"use client";

import { useState } from "react";
import Button, { BUTTON_VARIANTS } from "@/components/button";
import Tag, { TAG_TYPE } from "@/components/tag";
import Avatar, { AVATAR_VARIANT } from "@/components/avatar";
import Input from "@/components/input";
import Snackbar, { SNACK_BAR_TYPE } from "@/components/snackBar";
import {
  BalloonsSVG,
  SirenSVG,
  CrabSVG,
  LobsterSVG,
  AstronautSVG,
  AlienFaceSVG,
  CoversSVG,
  DiceSVG,
  RocketSVG,
} from "@/components/icons";

const ShowcaseCard = ({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) => (
  <div className="flex-1 min-w-0 bg-surface border border-border rounded-xl p-5 flex flex-col gap-5 hover:border-primary-400 transition-colors duration-200">
    <span className="text-[9px] font-bold tracking-[0.18em] uppercase text-muted-fg">
      {label}
    </span>
    <div className="flex-1 flex flex-col justify-center">{children}</div>
  </div>
);

const ComponentIntelligence = () => {
  const [inputValue, setInputValue] = useState("");

  return (
    <section className="bg-surface-raised py-16 md:py-24 px-5 md:px-10 relative overflow-hidden">
      {/* Decorative angled background shape */}
      <div className="hidden lg:block absolute -right-16 top-0 bottom-0 w-[30%] bg-surface-overlay/60 dark:bg-surface-overlay/40 [clip-path:polygon(12%_0%,100%_0%,100%_100%,0%_100%)]" />

      <div className="max-w-6xl mx-auto relative flex flex-col gap-12 md:gap-16">
        {/* Header row */}
        <div className="flex flex-col sm:flex-col sm:items-start gap-5">
          <h2 className="text-[clamp(28px,3.5vw,44px)] font-black uppercase leading-tight tracking-tight text-foreground shrink-0">
            Component
            <br />
            Intelligence
          </h2>
          <p className="text-sm text-muted-fg leading-relaxed max-w-sm">
            Predictive primitives that adapt to your layout context, providing
            consistent UX across every breakpoint.
          </p>
        </div>

        {/* Cards row */}
        <div className="flex flex-col sm:flex-row items-stretch gap-4">
          {/* Card 1 — Icons / Buttons */}
          <ShowcaseCard label="Icons / Buttons">
            <div className="flex flex-col gap-4">
              {/* Icon strip */}
              <div className="flex items-center justify-between flex-wrap">
                <Button
                  variant={BUTTON_VARIANTS.PRIMARY}
                  onClick={() => {}}
                  leftIcon={<CrabSVG />}
                />
                <Button
                  variant={BUTTON_VARIANTS.SECONDARY}
                  onClick={() => {}}
                  leftIcon={<LobsterSVG />}
                />
                <Button
                  variant={BUTTON_VARIANTS.TERTIARY}
                  onClick={() => {}}
                  leftIcon={<AstronautSVG />}
                />
                <Button
                  variant={BUTTON_VARIANTS.PRIMARY}
                  onClick={() => {}}
                  leftIcon={<AlienFaceSVG />}
                  disabled
                />
              </div>
              {/* Labeled buttons */}
              <Button
                variant={BUTTON_VARIANTS.PRIMARY}
                label="Get Started"
                onClick={() => {}}
                leftIcon={<DiceSVG />}
              />
              <Button
                variant={BUTTON_VARIANTS.SECONDARY}
                label="View Docs"
                onClick={() => {}}
                leftIcon={<CoversSVG />}
              />
              <Button
                variant={BUTTON_VARIANTS.TERTIARY}
                label="Learn More"
                onClick={() => {}}
                leftIcon={<RocketSVG />}
              />
            </div>
          </ShowcaseCard>

          {/* Card 2 — Tags / Snacks */}
          <ShowcaseCard label="Tags / Snacks">
            <div className="flex flex-col gap-3">
              {/* 4 tags — same-length labels */}
              <div className="grid grid-cols-2 gap-2">
                <Tag
                  type={TAG_TYPE.SUCCESS}
                  label="Completed"
                  className="w-full text-center"
                />
                <Tag
                  type={TAG_TYPE.WARNING}
                  label="Suspended"
                  className="w-full text-center"
                />
                <Tag
                  type={TAG_TYPE.DANGER}
                  label="Cancelled"
                  className="w-full text-center"
                />
                <Tag
                  type={TAG_TYPE.INFO}
                  label="Forwarded"
                  className="w-full text-center"
                />
              </div>
              {/* 2 snack bars */}
              <div className="flex flex-col gap-2 mt-1">
                <Snackbar
                  type={SNACK_BAR_TYPE.SUCCESS}
                  message="Pew pew hoorah!"
                  icon={<BalloonsSVG />}
                />
                <Snackbar
                  type={SNACK_BAR_TYPE.DANGER}
                  message="Oh ohhh..."
                  icon={<SirenSVG />}
                />
              </div>
            </div>
          </ShowcaseCard>

          {/* Card 3 — Identity / Avatars */}
          <ShowcaseCard label="Identity / Avatars">
            <div className="flex flex-col gap-4">
              <Avatar
                name="Alex Chon"
                email="alex@gwan.dev"
                image="/images/profile_picture.png"
                variant={AVATAR_VARIANT.IMAGE_WITH_FULL}
                isLoading={false}
              />
              <Avatar
                name="Sam Rivera"
                email="sam@gwan.dev"
                variant={AVATAR_VARIANT.INITIALS_WITH_FULL}
                isLoading={false}
              />
              <Avatar
                name="Jordan Lee"
                email="jordan@gwan.dev"
                variant={AVATAR_VARIANT.INITIALS_WITH_FULL}
                isLoading={false}
              />
            </div>
          </ShowcaseCard>

          {/* Card 4 — Forms / Input */}
          <ShowcaseCard label="Forms / Input">
            <div className="flex flex-col gap-3">
              <Input
                label="Component name"
                value={inputValue}
                placeholder="e.g. Button"
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setInputValue(e.target.value)
                }
                onClear={inputValue ? () => setInputValue("") : undefined}
              />
              <Input
                label="Version"
                value="v0.1.17"
                placeholder="Version"
                disabled
              />
              <Button
                variant={BUTTON_VARIANTS.PRIMARY}
                label="Search"
                onClick={() => {}}
              />
            </div>
          </ShowcaseCard>
        </div>

        {/* CTA */}
        <div className="flex justify-center">
          <a
            href="/components-library"
            className="bg-foreground text-background text-[11px] font-bold tracking-[0.25em] uppercase px-10 py-4 rounded-sm hover:opacity-80 transition-opacity duration-200"
          >
            Explore All Components
          </a>
        </div>
      </div>
    </section>
  );
};

export default ComponentIntelligence;
