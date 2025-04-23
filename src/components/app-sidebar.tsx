"use client";

import * as React from "react";
import { BarChart2, FileText, HelpCircle, Send } from "lucide-react";
import { NavMain } from "@/components/nav-main";
import { NavSecondary } from "@/components/nav-secondary";
import { Sidebar, SidebarContent } from "@/components/ui/sidebar";

const data = {
  navMain: [
    {
      title: "Dashboard",
      url: "/",
      icon: BarChart2,
      isActive: true,
      items: [
        { title: "Overview", url: "/" },
        { title: "Heatmap (Coming Soon)", url: "/" },
      ],
      external: false,
    },
    {
      title: "About",
      url: "/about",
      icon: HelpCircle,
      isActive: false,
      external: false,
    },
    {
      title: "Documentation",
      url: "https://github.com/DSSD-Madison/UW-Campus-Sustainability-Dashboard",
      icon: FileText,
      isActive: false,
      external: true,
    },
  ],
  navSecondary: [
    {
      title: "Support",
      url: "https://madison.dssdglobal.org/",
      icon: HelpCircle,
      isActive: false,
      external: true,
    },
    {
      title: "Report a Bug",
      url: "https://github.com/DSSD-Madison/UW-Campus-Sustainability-Dashboard/issues",
      icon: Send,
      isActive: false,
      external: true,
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar
      className="top-[--header-height] !h-[calc(100svh-var(--header-height))] bg-white shadow-sm border-r border-gray-200"
      {...props}
    >
      <SidebarContent className="p-2 flex flex-col h-full">
        <div className="flex-grow">
          <NavMain items={data.navMain} />
        </div>
        <div className="mt-auto pt-6 border-t border-gray-100">
          <NavSecondary items={data.navSecondary} />
        </div>
      </SidebarContent>
    </Sidebar>
  );
}
