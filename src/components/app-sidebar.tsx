import * as React from "react"
import {
  BarChart2,
  Leaf,
  FileText,
  HelpCircle,
  Send,
  LogIn
} from "lucide-react"

import { NavMain } from "@/components/nav-main"
import { NavSecondary } from "@/components/nav-secondary"
import { NavUser } from "@/components/nav-user"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from "@/components/ui/sidebar"

import { useContext } from "react"
import { AppContext } from "@/context/AppContext"
import { defaultUser } from "@/types/user/user"

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
      url: "/about",
      icon: HelpCircle,
    },
    {
      title: "Documentation",
      url: "/LINK_TO_DOCUMENTATION",
      icon: FileText,
    }
  ],
  navSecondary: [
    {
      title: "Support",
      url: "/LINK_TO_SUPPORT",
      icon: HelpCircle,
    },
    {
      title: "Feedback",
      url: "/LINK_TO_FEEDBACK",
      icon: Send,
    },
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const { user, setUser } = useContext(AppContext)

  const handleLogout = () => {
    setUser(defaultUser)
  }

  const handleLogin = () => {
    setUser({
      name: "John Doe",
      email: "j@wisc.edu",
      avatar: undefined,
    })
  }

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
        {user.name ? (
          <NavUser user={user} onLogout={handleLogout} />
        ) : (
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton
                size="lg"
                onClick={handleLogin}
              >
                <LogIn className="h-4 w-4" />
                <div className="grid flex-1 text-left text-sm">
                  <span className="font-semibold">Sign In</span>
                </div>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        )}
      </SidebarFooter>
    </Sidebar>
  )
}
