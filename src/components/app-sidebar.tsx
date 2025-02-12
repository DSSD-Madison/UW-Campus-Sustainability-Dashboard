import * as React from "react"
import {
  BarChart2,
  Leaf,
  FileText,
  Globe,
  HelpCircle,
  Send,
  Building2,
  Cloud,
} from "lucide-react"

import { NavMain } from "@/components/nav-main"
import { NavSecondary } from "@/components/nav-secondary"
import { NavUser } from "@/components/nav-user"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
} from "@/components/ui/sidebar"

const data = {
  user: {
    name: "Admin",
    email: "admin@university.edu",
    avatar: "/api/placeholder/32/32",
  },
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
          title: "Heatmap",
          url: "/heatmap",
        }
      ],
    },
    {
      title: "Participating Live Locations",
      url: "/locations",
      icon: Leaf,
    },
    {
      title: "About",
      url: "#",
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
  facilities: [
    {
      name: "Main Campus",
      url: "#",
      icon: Building2,
    },
    {
      name: "Research Center",
      url: "#",
      icon: Globe,
    },
    {
      name: "Data Center",
      url: "#",
      icon: Cloud,
    },
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar
      className="top-[--header-height] !h-[calc(100svh-var(--header-height))]"
      {...props}
    >
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavSecondary items={data.navSecondary} className="mt-auto" />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
    </Sidebar>
  )
}