type IconName = "instagram" | "facebook" | "tiktok" | "email";

const paths: Record<IconName, JSX.Element> = {
  instagram: (
    <>
      <rect x="3" y="3" width="18" height="18" rx="5" ry="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1.2" fill="currentColor" stroke="none" />
    </>
  ),
  facebook: (
    <path d="M15 3h-2.5A3.5 3.5 0 0 0 9 6.5V9H7v3h2v9h3v-9h2.5l.5-3H12V6.75c0-.6.4-.75.9-.75H15V3z" />
  ),
  tiktok: (
    <path d="M16 4c.3 2 1.6 3.4 3.5 3.6v2.6c-1.2 0-2.4-.3-3.5-.9v5.6a5.4 5.4 0 1 1-5.4-5.4c.3 0 .6 0 .9.1v2.7a2.7 2.7 0 1 0 1.9 2.6V4H16z" />
  ),
  email: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M3 7l9 6 9-6" />
    </>
  ),
};

type SocialIconProps = {
  name: IconName;
  className?: string;
};

export default function SocialIcon({ name, className = "h-5 w-5" }: SocialIconProps) {
  const isFilled = name === "facebook" || name === "tiktok";
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill={isFilled ? "currentColor" : "none"}
      stroke={isFilled ? "none" : "currentColor"}
      strokeWidth={1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {paths[name]}
    </svg>
  );
}

export type { IconName };
