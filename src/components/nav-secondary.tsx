"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { type LucideIcon } from "lucide-react"

import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -5 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.2 },
  },
};

export function NavSecondary({
  items,
  ...props
}: {
  items: {
    title: string
    url: string
    icon: LucideIcon
  }[]
} & React.ComponentPropsWithoutRef<typeof SidebarGroup>) {
  return (
    <motion.div 
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <SidebarGroup {...props}>
        <SidebarGroupContent>
          <SidebarMenu>
            {items.map((item) => (
              <motion.div 
                key={item.title} 
                variants={itemVariants}
                whileHover={{ x: 3 }}
              >
                <SidebarMenuItem>
                  <SidebarMenuButton 
                    asChild 
                    size="sm" 
                    className="text-gray-600 hover:bg-gray-50 hover:text-gray-900 transition-colors duration-200"
                  >
                    <a href={item.url}>
                      <item.icon className="text-gray-500 group-hover:text-gray-600" />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              </motion.div>
            ))}
          </SidebarMenu>
        </SidebarGroupContent>
      </SidebarGroup>
    </motion.div>
  )
}