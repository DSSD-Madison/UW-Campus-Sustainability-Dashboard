"use client"

import * as React from "react"
import {
  BarChart2,
  FileText,
  HelpCircle,
  Send,
  BookOpen,
  Home,
} from "lucide-react"

import { NavMain } from "@/components/nav-main"
import { NavSecondary } from "@/components/nav-secondary"
import {
  Sidebar,
  SidebarContent,
} from "@/components/ui/sidebar"

const data = {
  navMain: [
    {
      title: "Dashboard",
      url: "#",
      icon: BarChart2,
      isActive: true,
      items: [
        {
          title: "Overview",
          url: "/",
        },
        {
          title: "Heatmap (Coming Soon)",
          url: "#",
        }
      ],
    },
    {
      title: "About",
      url: "/about",
      icon: HelpCircle,
    },
    {
      title: "Documentation",
      url: "#",
      icon: FileText,
    }
  ],
  navSecondary: [
    {
      title: "Support",
      url: "#",
      icon: HelpCircle,
    },
    {
      title: "Feedback",
      url: "#",
      icon: Send,
    },
  ],
}

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
  )
}