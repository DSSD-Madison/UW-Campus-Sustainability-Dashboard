"use client"

import { AppSidebar } from "@/components/app-sidebar"
import { SiteHeader } from "@/components/site-header"
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar"
import { motion } from "framer-motion"
import { ReactNode } from "react"

export default function Layout({ children }: { children: ReactNode }) {
  // Animation variants for staggered entrance
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.4,
        when: "beforeChildren",
      },
    },
  }

  const contentVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
      },
    },
  }

  return (
    <motion.div 
      className="[--header-height:calc(theme(spacing.14))] min-h-screen bg-[hsl(var(--wsbackground))]"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <SidebarProvider className="flex flex-col">
        <SiteHeader />
        <div className="flex flex-1">
          <AppSidebar />
          <SidebarInset>
            <motion.div 
              className="flex flex-1 flex-col gap-4 p-6 bg-[hsl(var(--wsbackground))]"
              variants={contentVariants}
            >
              {children}
            </motion.div>
          </SidebarInset>
        </div>
      </SidebarProvider>
    </motion.div>
  )
}