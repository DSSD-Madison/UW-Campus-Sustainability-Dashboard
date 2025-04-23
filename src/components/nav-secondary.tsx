"use client"

import * as React from "react"
import { ExternalLink, type LucideIcon } from "lucide-react"

import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"

export function NavSecondary({
  items,
  ...props
}: {
  items: {
    title: string
    url: string
    icon: LucideIcon
    isActive?: boolean
    external?: boolean
  }[]
} & React.ComponentPropsWithoutRef<typeof SidebarGroup>) {
  return (
    <div className="fade-in-container">
      <SidebarGroup {...props}>
        <SidebarGroupContent>
          <SidebarMenu>
            {items.map((item, index) => (
              <div 
                key={item.title} 
                className="fade-in-item"
                style={{ animationDelay: `${100 + index * 50}ms` }}
              >
                <SidebarMenuItem>
                  <SidebarMenuButton 
                    asChild 
                    size="sm" 
                    className="text-gray-600 hover:bg-gray-50 hover:text-gray-900 transition-colors duration-200 menu-item-hover"
                  >
                    {item.external ? (
                      <a 
                        href={item.url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center gap-2"
                      >
                        <item.icon className="text-gray-500 group-hover:text-gray-600" />
                        <span>{item.title}</span>
                        <ExternalLink className="w-3.5 h-3.5 text-gray-400" />
                      </a>
                    ) : (
                      <a href={item.url} className="flex items-center gap-2">
                        <item.icon className="text-gray-500 group-hover:text-gray-600" />
                        <span>{item.title}</span>
                      </a>
                    )}
                  </SidebarMenuButton>
                </SidebarMenuItem>
              </div>
            ))}
          </SidebarMenu>
        </SidebarGroupContent>
      </SidebarGroup>

      <style>{`
        /* Container fade-in animation */
        .fade-in-container {
          opacity: 0;
          animation: fadeIn 0.3s ease forwards;
        }

        /* Item fade-in with slight movement */
        .fade-in-item {
          opacity: 0;
          transform: translateX(-5px);
          animation: fadeInSlide 0.2s ease forwards;
        }

        /* Hover effect for menu items */
        .menu-item-hover {
          transition: transform 0.2s ease;
        }
        .menu-item-hover:hover {
          transform: translateX(3px);
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes fadeInSlide {
          from { 
            opacity: 0;
            transform: translateX(-5px);
          }
          to { 
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </div>
  );
}