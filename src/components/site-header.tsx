"use client"

import { motion } from "framer-motion"
import { SidebarIcon, Leaf } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { useSidebar } from "@/components/ui/sidebar"


export function SiteHeader() {
  const { toggleSidebar } = useSidebar()

  return (
    <motion.header 
      className="sticky top-0 z-50 w-full border-b bg-[hsl(var(--wbackground))] shadow-sm"
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
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
            <motion.div 
              className="rounded-md bg-green-100 p-1"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Leaf className="h-5 w-5 text-green-600" />
            </motion.div>
            <h1 className="text-lg font-semibold text-gray-900">UW Campus Sustainability Dashboard</h1>
          </div>
        </div>

      </div>
    </motion.header>
  )
}