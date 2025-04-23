"use client"

import { NavLink, useLocation } from "react-router-dom"
import { ChevronRight, ExternalLink, type LucideIcon } from "lucide-react"

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

interface NavItem {
  title: string
  url: string
  icon: LucideIcon
  isActive?: boolean
  external?: boolean
  items?: { 
    title: string
    url: string
    external?: boolean
  }[]
}

export function NavMain({
  items,
  className,
  ...props
}: {
  items: NavItem[]
  className?: string
}) {
  const { pathname } = useLocation()

  // Create a link component based on whether it's external or internal
  const LinkComponent = ({ 
    to, 
    external, 
    className, 
    children 
  }: { 
    to: string
    external?: boolean 
    className: string | ((props: { isActive?: boolean }) => string)
    children: React.ReactNode
  }) => {
    // For external links
    if (external) {
      // If className is a function, call it with isActive=false
      const resolvedClassName = typeof className === 'function' ? className({ isActive: false }) : className;
      
      return (
        <a 
          href={to} 
          target="_blank" 
          rel="noopener noreferrer" 
          className={resolvedClassName}
        >
          {children}
          <ExternalLink className="ml-1.5 w-3.5 h-3.5 text-gray-400" />
        </a>
      );
    }
    
    // For internal links
    return (
      <NavLink
        to={to}
        end
        className={className}
      >
        {children}
      </NavLink>
    );
  };

  return (
    <div
      className={`fade-in-container ${className}`}
      {...props}
    >
      <SidebarGroup>
        <SidebarGroupLabel className="text-xs font-medium text-gray-500 uppercase tracking-wider">
          Features
        </SidebarGroupLabel>

        <SidebarMenu>
          {items.map((item, index) => {
            const isActive = !item.external && item.url === pathname
            const isOpen =
              isActive ||
              item.items?.some((child) => !child.external && child.url === pathname)

            return (
              <div
                key={item.title}
                className="fade-in-item"
                style={{
                  animationDelay: `${index * 50}ms`
                }}
              >
                {/*
                  Use defaultOpen, not open, so clicks actually toggle.
                */}
                <Collapsible defaultOpen={isOpen}>
                  <SidebarMenuItem className="transition-all duration-200">
                    <SidebarMenuButton asChild tooltip={item.title}>
                      <LinkComponent
                        to={item.url}
                        external={item.external}
                        className={({ isActive: linkActive }) =>
                          `flex items-center gap-2 p-2 rounded menu-item-hover ${
                            linkActive
                              ? "bg-gray-100 text-gray-900"
                              : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                          }`
                        }
                      >
                        <item.icon
                          className={`${
                            isActive ? "text-green-600" : "text-gray-500"
                          } w-5 h-5`}
                        />
                        <span>{item.title}</span>
                      </LinkComponent>
                    </SidebarMenuButton>

                    {item.items && (
                      <>
                        <CollapsibleTrigger asChild>
                          <SidebarMenuAction className="data-[state=open]:rotate-90 transition-transform duration-200">
                            <ChevronRight />
                            <span className="sr-only">Toggle</span>
                          </SidebarMenuAction>
                        </CollapsibleTrigger>

                        <CollapsibleContent>
                          <SidebarMenuSub>
                            {item.items.map((subItem, idx) => (
                              <div
                                key={subItem.title}
                                className="fade-in-subitem"
                                style={{
                                  animationDelay: `${100 + idx * 50}ms`
                                }}
                              >
                                <SidebarMenuSubItem>
                                  <SidebarMenuSubButton asChild>
                                    <LinkComponent
                                      to={subItem.url}
                                      external={subItem.external}
                                      className={({ isActive: linkActive }) =>
                                        `block w-full px-2 py-1 rounded submenu-item-hover ${
                                          linkActive
                                            ? "bg-gray-100 text-gray-900"
                                            : "text-gray-600 hover:bg-gray-50"
                                        }`
                                      }
                                    >
                                      {subItem.title}
                                    </LinkComponent>
                                  </SidebarMenuSubButton>
                                </SidebarMenuSubItem>
                              </div>
                            ))}
                          </SidebarMenuSub>
                        </CollapsibleContent>
                      </>
                    )}
                  </SidebarMenuItem>
                </Collapsible>
              </div>
            )
          })}
        </SidebarMenu>
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

        /* Submenu item fade-in with slight movement */
        .fade-in-subitem {
          opacity: 0;
          transform: translateX(-5px);
          animation: fadeInSlide 0.2s ease forwards;
        }

        /* Hover effect for menu items - replaces whileHover */
        .menu-item-hover {
          transition: transform 0.2s ease;
        }
        .menu-item-hover:hover {
          transform: translateX(3px);
        }

        /* Hover effect for submenu items */
        .submenu-item-hover {
          transition: transform 0.2s ease;
        }
        .submenu-item-hover:hover {
          transform: translateX(2px);
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
  )
}