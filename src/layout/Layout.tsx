"use client";

import { SiteHeader } from "@/components/site-header";
import { AppSidebar } from "@/components/app-sidebar";
import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar";

export default function Layout({ children }: { children?: React.ReactNode }) {
  return (
    <div
      className="[--header-height:calc(theme(spacing.14))] min-h-screen bg-[hsl(var(--wsbackground))] main-container"
    >
      <SidebarProvider className="flex flex-col">
        <SiteHeader />
        <div className="flex flex-1">
          <AppSidebar />
          <SidebarInset>
            <div
              className="flex flex-1 flex-col gap-4 p-6 bg-[hsl(var(--wsbackground))] content-animation"
            >
              {children}
            </div>
          </SidebarInset>
        </div>
      </SidebarProvider>

      <style>{`
        /* Main container fade-in animation */
        .main-container {
          opacity: 0;
          animation: fadeIn 0.4s ease forwards;
        }

        /* Content fade-in and slide up animation */
        .content-animation {
          opacity: 0;
          transform: translateY(10px);
          animation: fadeInUp 0.3s ease forwards;
          animation-delay: 0.1s; /* Delay to simulate "when: beforeChildren" */
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes fadeInUp {
          from { 
            opacity: 0;
            transform: translateY(10px);
          }
          to { 
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}