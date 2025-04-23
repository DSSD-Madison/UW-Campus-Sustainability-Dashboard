"use client"

import { SidebarIcon, Leaf } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { useSidebar } from "@/components/ui/sidebar"

export function SiteHeader() {
  const { toggleSidebar } = useSidebar()

  return (
    <header 
      className="sticky top-0 z-50 w-full border-b bg-[hsl(var(--wbackground))] shadow-sm header-animation"
    >
      <div className="flex h-[--header-height] w-full items-center justify-between px-4">
        <div className="flex items-center gap-2">
          <Button
            className="h-8 w-8 hover:bg-gray-100 transition-colors duration-200"
            variant="ghost"
            size="icon"
            onClick={toggleSidebar}
          >
            <SidebarIcon className="text-gray-600" />
          </Button>
          <Separator orientation="vertical" className="mr-2 h-4" />
          <div className="flex items-center gap-2">
            <div className="rounded-md bg-green-100 p-1 logo-animation">
              <Leaf className="h-5 w-5 text-green-600" />
            </div>
            <h1 className="text-lg font-semibold text-gray-900">UW Campus Sustainability Dashboard</h1>
          </div>
        </div>
      </div>

      <style>{`
        /* Header fade-in and slide down animation */
        .header-animation {
          opacity: 0;
          transform: translateY(-10px);
          animation: slideDown 0.3s ease forwards;
        }

        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* Logo hover and tap animations */
        .logo-animation {
          transition: transform 0.2s ease;
        }
        
        .logo-animation:hover {
          transform: scale(1.05);
        }
        
        .logo-animation:active {
          transform: scale(0.95);
        }
      `}</style>
    </header>
  )
}