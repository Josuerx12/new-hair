import Image from "next/image";

type PlaceholderMediaProps = {
  label: string;
  caption?: string;
  ratio?: "portrait" | "landscape" | "square" | "wide";
  className?: string;
  imageSrc?: string;
  imageAlt?: string;
  beforeImageSrc?: string;
  beforeImageAlt?: string;
  afterImageSrc?: string;
  afterImageAlt?: string;
};

type SplitSectionProps = {
  eyebrow?: string;
  title: string;
  description: string;
  media: React.ReactNode;
  reverse?: boolean;
  cta?: React.ReactNode;
};

type GalleryPlaceholderProps = {
  items: Array<{ title: string; caption: string }>;
};

const ratioMap = {
  portrait: "aspect-4/5",
  landscape: "aspect-4/3",
  square: "aspect-square",
  wide: "aspect-video",
};

const joinClasses = (...classes: Array<string | false | null | undefined>) =>
  classes.filter(Boolean).join(" ");

export function PlaceholderMedia({
  label,
  caption,
  ratio = "landscape",
  className,
  imageSrc,
  imageAlt,
  beforeImageSrc,
  beforeImageAlt,
  afterImageSrc,
  afterImageAlt,
}: PlaceholderMediaProps) {
  const comparisonImages =
    beforeImageSrc && afterImageSrc
      ? { beforeSrc: beforeImageSrc, afterSrc: afterImageSrc }
      : null;
  const singleImage = imageSrc ?? null;

  return (
    <div
      className={joinClasses(
        "relative h-full min-h-56 overflow-hidden bg-[linear-gradient(135deg,#efe6da_0%,#f7f3ed_45%,#ded3c2_100%)]",
        ratioMap[ratio],
        className,
      )}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.65),transparent_40%),linear-gradient(140deg,rgba(216,193,160,0.18),transparent_50%)]" />
      {comparisonImages ? (
        <div className="absolute inset-5 overflow-hidden rounded-3xl border border-white/70 bg-stone-100">
          <div className="grid h-full grid-cols-2">
            <div className="relative">
              <Image
                src={comparisonImages.beforeSrc}
                alt={beforeImageAlt ?? `${label} - antes`}
                fill
                className="object-cover"
              />
              <span className="absolute left-3 top-3 rounded-full bg-black/55 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-white">
                Antes
              </span>
            </div>
            <div className="relative border-l border-white/70">
              <Image
                src={comparisonImages.afterSrc}
                alt={afterImageAlt ?? `${label} - depois`}
                fill
                className="object-cover"
              />
              <span className="absolute left-3 top-3 rounded-full bg-black/55 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-white">
                Depois
              </span>
            </div>
          </div>
        </div>
      ) : singleImage ? (
        <div className="absolute inset-5 overflow-hidden rounded-3xl border border-white/70">
          <Image
            src={singleImage}
            alt={imageAlt ?? label}
            fill
            className="object-cover"
          />
        </div>
      ) : (
        <div className="absolute inset-5 rounded-3xl border border-white/70" />
      )}
      <div className="absolute w-fit bottom-2 left-2 right-2 rounded bg-white/80 p-2 backdrop-blur-sm">
        <h3 className="font-display text-lg text-stone-900">{label}</h3>
      </div>
    </div>
  );
}

export function SplitSection({
  eyebrow,
  title,
  description,
  media,
  reverse = false,
  cta,
}: SplitSectionProps) {
  return (
    <div
      className={joinClasses(
        "flex flex-wrap-reverse lg:grid gap-8 lg:grid-cols-2 lg:items-center",
        reverse && "lg:[&>*:first-child]:order-2 lg:[&>*:last-child]:order-1",
      )}
    >
      <div className="overflow-hidden flex-1 rounded-4xl border border-stone-200 bg-white shadow-[0_18px_50px_rgba(28,25,23,0.08)]">
        {media}
      </div>
      <div className="space-y-5">
        {eyebrow ? (
          <span className="inline-flex rounded-full border border-stone-300 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.24em] text-stone-600">
            {eyebrow}
          </span>
        ) : null}
        <h2 className="font-display text-3xl leading-tight text-stone-900 sm:text-4xl">
          {title}
        </h2>
        <p className="text-base leading-7 text-stone-600 sm:text-lg">
          {description}
        </p>
        {cta ? <div className="pt-2">{cta}</div> : null}
      </div>
    </div>
  );
}

export function GalleryPlaceholder({ items }: GalleryPlaceholderProps) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
      {items.map((item, index) => (
        <div
          key={item.title}
          className={joinClasses(
            "rounded-3xl border border-stone-200 bg-white p-4",
            index === 0 && "sm:col-span-2 xl:row-span-2",
          )}
        >
          <PlaceholderMedia
            label={item.title}
            caption={item.caption}
            ratio={index === 0 ? "wide" : "square"}
          />
        </div>
      ))}
    </div>
  );
}

export function FramedImage({
  src,
  alt,
  priority = false,
  className,
}: {
  src: string;
  alt: string;
  priority?: boolean;
  className?: string;
}) {
  return (
    <div
      className={joinClasses("relative min-h-80 overflow-hidden", className)}
    >
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover"
        priority={priority}
      />
    </div>
  );
}
