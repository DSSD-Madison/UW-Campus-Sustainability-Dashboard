"use client"

import { ChevronRight, type LucideIcon } from "lucide-react"
import { motion } from "framer-motion"

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuAction,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from "@/components/ui/sidebar"

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
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

export function NavMain({
  items,
  className,
  ...props
}: {
  items: {
    title: string
    url: string
    icon: LucideIcon
    isActive?: boolean
    items?: {
      title: string
      url: string
    }[]
  }[]
  className?: string
}) {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className={className}
      {...props}
    >
      <SidebarGroup>
        <SidebarGroupLabel className="text-xs font-medium text-gray-500 uppercase tracking-wider">
          Features
        </SidebarGroupLabel>
        <SidebarMenu>
          {items.map((item) => (
            <motion.div 
              key={item.title} 
              variants={itemVariants}
              whileHover={{ x: 3 }}
            >
              <Collapsible asChild defaultOpen={item.isActive}>
                <SidebarMenuItem className="transition-all duration-200">
                  <SidebarMenuButton 
                    asChild 
                    tooltip={item.title}
                    className={`${item.isActive ? "bg-gray-100 text-gray-900" : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"}`}
                  >
                    <a href={item.url}>
                      <item.icon className={`${item.isActive ? "text-green-600" : "text-gray-500 group-hover:text-gray-600"}`} />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                  {item.items?.length ? (
                    <>
                      <CollapsibleTrigger asChild>
                        <SidebarMenuAction className="data-[state=open]:rotate-90 transition-transform duration-200">
                          <ChevronRight />
                          <span className="sr-only">Toggle</span>
                        </SidebarMenuAction>
                      </CollapsibleTrigger>
                      <CollapsibleContent>
                        <SidebarMenuSub>
                          {item.items?.map((subItem, index) => (
                            <motion.div
                              key={subItem.title}
                              initial={{ opacity: 0, x: -5 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: 0.1 + (index * 0.05) }}
                              whileHover={{ x: 2 }}
                            >
                              <SidebarMenuSubItem>
                                <SidebarMenuSubButton 
                                  asChild
                                  className="hover:bg-gray-50 transition-colors duration-200"
                                >
                                  <a href={subItem.url}>
                                    <span>{subItem.title}</span>
                                  </a>
                                </SidebarMenuSubButton>
                              </SidebarMenuSubItem>
                            </motion.div>
                          ))}
                        </SidebarMenuSub>
                      </CollapsibleContent>
                    </>
                  ) : null}
                </SidebarMenuItem>
              </Collapsible>
            </motion.div>
          ))}
        </SidebarMenu>
      </SidebarGroup>
    </motion.div>
  )
}