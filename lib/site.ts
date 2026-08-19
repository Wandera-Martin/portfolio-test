export const site = {
  // Identity is intentionally unresolved. Replace only with verified owner information.
  ownerLabel: "Portfolio owner",
  location: "Kampala, Uganda",
  territory: "African digital transformation",
  description:
    "A personal authority portfolio focused on African digital transformation at the intersection of technology, strategy, data, institutions, and communication.",
} as const;

export const navigation = [
  { href: "/", label: "Index" },
  { href: "/work", label: "Work" },
  { href: "/profile", label: "Profile" },
  { href: "/contact", label: "Contact" },
] as const;
