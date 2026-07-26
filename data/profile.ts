// =============================================================================
// PROFILE CONTENT
// Used by: Hero, About, and Contact sections in app/page.tsx
// Image path: /public/profile.jpg -> "/profile.jpg"
// Full guide: data/README.md
// =============================================================================

export interface ProfileInfoItem {
  label: string;
  value: string;
}

export interface ProfileLinks {
  phone: string;
  email: string;
  github: string;
  facebook: string;
  instagram: string;
}

export interface Profile {
  name: string;
  nameTH: string;
  role: string;
  tagline: string;
  avatar: string;
  avatarImage?: string;
  info: ProfileInfoItem[];
  links: ProfileLinks;
}

// -----------------------------------------------------------------------------
// EDIT PROFILE HERE
// -----------------------------------------------------------------------------
export const profile: Profile = {
  name: "Paramet Dennis Hoke Arrington IV",
  nameTH: "นายปรเมศว์ เดนนิส โฮค อาร์ริงตัน 4",
  role: "Software Intern",
  tagline:
    "Fourth-year Computer Engineering student with hands-on experience leading freelance software projects across full-stack web development, POS systems, WordPress, and embedded IoT.",
  avatar: "P",
  avatarImage: "/profile.jpg",

  // About section cards
  info: [
    { label: "Role", value: "Software Intern" },
    {
      label: "Education",
      value: "B.Eng. Computer Engineering, 4th Year",
    },
    { label: "GPA", value: "3.17" },
    { label: "Location", value: "Khon Kaen, Thailand" },
    { label: "Email", value: "paramet.arrington4@gmail.com" },
    {
      label: "Languages",
      value: "Thai (Native), English (CEFR B1)",
    },
  ],

  // Hero social buttons and Contact section
  links: {
    phone: "0911293125",
    email: "paramet.arrington4@gmail.com",
    github: "https://github.com/Dparamet",
    facebook: "https://www.facebook.com/d.paramet.2024/",
    instagram: "https://www.instagram.com/d_paramet/",
  },
};
