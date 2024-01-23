import { SidebarLink } from "@/components/SidebarItems";
import { Cog, User2Icon, HomeIcon, PlusIcon, Grip } from "lucide-react";

type AdditionalLinks = {
  title: string;
  links: SidebarLink[];
};

export const defaultLinks: SidebarLink[] = [
  { href: "/", title: "Home", icon: HomeIcon },
  { href: "/account", title: "Account", icon: User2Icon },
  { href: "/settings", title: "Settings", icon: Cog },
];

export const additionalLinks: AdditionalLinks[] = [
  {
    title: "Apps",
    links: [
      { href: "/apps", title: "Manage", icon: Grip },
      { href: "/apps/new", title: "Add new", icon: PlusIcon },
    ],
  },
];
