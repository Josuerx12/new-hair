type SectionProps = {
  id?: string;
  eyebrow?: string;
  title?: string;
  description?: string;
  children: React.ReactNode;
  className?: string;
  contentClassName?: string;
};

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
};

type ButtonLinkProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
};

type TagPillProps = {
  label: string;
  active?: boolean;
};

const joinClasses = (...classes: Array<string | false | null | undefined>) =>
  classes.filter(Boolean).join(" ");

export function Section({
  id,
  eyebrow,
  title,
  description,
  children,
  className,
  contentClassName,
}: SectionProps) {
  return (
    <section
      id={id}
      className={joinClasses("px-4 py-14 sm:px-6 lg:px-8 lg:py-20", className)}
    >
      <div className="mx-auto w-full max-w-7xl">
        {title ? (
          <SectionHeading
            eyebrow={eyebrow}
            title={title}
            description={description}
            className="mb-10"
          />
        ) : null}
        <div className={contentClassName}>{children}</div>
      </div>
    </section>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={joinClasses(
        "max-w-3xl space-y-3",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow ? (
        <span className="inline-flex rounded-full border border-stone-300 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.24em] text-stone-600">
          {eyebrow}
        </span>
      ) : null}
      <h2 className="font-display text-3xl leading-tight text-stone-900 sm:text-[40px]">
        {title}
      </h2>
      {description ? (
        <p className="text-base leading-7 text-stone-600 sm:text-lg">
          {description}
        </p>
      ) : null}
    </div>
  );
}

export function ButtonLink({
  href,
  children,
  variant = "primary",
  className,
}: ButtonLinkProps) {
  const variants = {
    primary:
      "bg-linear-to-r from-[#D2AE6D] to-[#E9D8B9] text-black! hover:from-[#E9D8B9] border border-[#D0C2AE]",
    secondary: "bg-white text-stone-900 hover:bg-[#ccb08a]",
    ghost:
      "border border-stone-300 bg-white text-stone-900 hover:border-stone-400 hover:bg-stone-50",
  };

  return (
    <a
      href={href}
      className={joinClasses(
        "inline-flex items-center text-center justify-center rounded px-5 py-3 font-bold tracking-[0.18em] uppercase transition-colors duration-200",
        variants[variant],
        className,
      )}
    >
      {children}
    </a>
  );
}

export function TagPill({ label }: TagPillProps) {
  return (
    <div
      className={joinClasses(
        "rounded-full w-full lg:w-fit text-center ease-in-out cursor-default duration-150 border px-6 py-2 boder border-[#E5DDD2] hover:bg-[#D2AE6D] hover:text-white bg-white text-[#D2AE6D] text-2xl",
      )}
    >
      {label}
    </div>
  );
}
