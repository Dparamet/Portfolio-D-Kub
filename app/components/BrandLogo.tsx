type BrandLogoName = "email" | "github" | "linkedin" | "external";

type BrandLogoProps = {
  name: BrandLogoName;
  className?: string;
};

export default function BrandLogo({ name, className = "h-5 w-5" }: BrandLogoProps) {
  if (name === "email") {
    return (
      <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
        <path
          d="M3.75 7.5a2.25 2.25 0 0 1 2.25-2.25h12a2.25 2.25 0 0 1 2.25 2.25v9a2.25 2.25 0 0 1-2.25 2.25H6a2.25 2.25 0 0 1-2.25-2.25v-9Z"
          stroke="currentColor"
          strokeWidth="1.6"
        />
        <path
          d="m4.5 8.25 6.67 4.44a1.5 1.5 0 0 0 1.66 0L19.5 8.25"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  if (name === "github") {
    return (
      <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
        <path d="M12 .5A11.5 11.5 0 0 0 .5 12a11.5 11.5 0 0 0 7.86 10.92c.58.1.79-.25.79-.56v-2.05c-3.2.7-3.88-1.54-3.88-1.54-.52-1.32-1.27-1.67-1.27-1.67-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.02 1.75 2.68 1.24 3.33.95.1-.74.4-1.24.73-1.52-2.56-.29-5.26-1.28-5.26-5.72 0-1.26.45-2.28 1.18-3.08-.12-.29-.51-1.46.11-3.05 0 0 .97-.31 3.17 1.18a10.9 10.9 0 0 1 5.78 0c2.2-1.5 3.17-1.18 3.17-1.18.62 1.59.23 2.76.12 3.05.73.8 1.18 1.82 1.18 3.08 0 4.45-2.71 5.42-5.29 5.71.41.35.78 1.04.78 2.1v3.11c0 .31.21.67.8.56A11.5 11.5 0 0 0 23.5 12 11.5 11.5 0 0 0 12 .5Z" />
      </svg>
    );
  }

  if (name === "linkedin") {
    return (
      <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
        <path d="M6.94 8.1A2.07 2.07 0 1 1 6.93 4a2.07 2.07 0 0 1 0 4.14ZM4.9 9.67h4.08V20H4.9V9.67Zm6.5 0h3.9v1.41h.06c.54-1.03 1.88-2.11 3.87-2.11 4.14 0 4.9 2.73 4.9 6.27V20h-4.08v-4.2c0-1-.02-2.28-1.39-2.28-1.4 0-1.61 1.09-1.61 2.2V20H11.4V9.67Z" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M13.5 5.25h4.5v4.5"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="m10.5 13.5 7.5-7.5"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M19.5 13.5v4.125A1.875 1.875 0 0 1 17.625 19.5H6.375A1.875 1.875 0 0 1 4.5 17.625V6.375A1.875 1.875 0 0 1 6.375 4.5H10.5"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
