export interface IBlogPost {
  description: string;
  title: string;
  url: string;
}

export interface INavLink {
  href: string;
  label: string;
}

export interface IProject {
  description: string;
  githubUrls: { label: string; url: string }[];
  highlights: string[];
  techStack: string[];
  title: string;
}

export interface ISocialLink {
  name: string;
  url: string;
}

export interface ITechItem {
  name: string;
}

export interface ITechItemWithIcon {
  color: string;
  icon: React.ReactNode;
  name: string;
}
