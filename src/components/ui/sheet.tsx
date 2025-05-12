import * as React from "react";
import { cn } from "@/lib/utils";

interface SheetProps {
  children: React.ReactNode;
}

export function Sheet({ children }: SheetProps) {
  return <>{children}</>;
}

interface SheetContentProps extends React.HTMLAttributes<HTMLDivElement> {
  side?: "left" | "right" | "top" | "bottom";
  className?: string;
  children: React.ReactNode;
}

export const SheetContent = React.forwardRef<HTMLDivElement, SheetContentProps>(
  ({ side = "left", className, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "fixed inset-0 z-50 flex",
          side === "left" && "justify-start",
          side === "right" && "justify-end",
          side === "top" && "items-start",
          side === "bottom" && "items-end",
          className
        )}
        {...props}
      >
        <div className="bg-white shadow-lg w-full max-w-xs h-full p-6 overflow-y-auto">
          {children}
        </div>
      </div>
    );
  }
);
SheetContent.displayName = "SheetContent";

export function SheetHeader({ children }: { children: React.ReactNode }) {
  return <div className="mb-4">{children}</div>;
}

export function SheetTitle({ children }: { children: React.ReactNode }) {
  return <h2 className="text-lg font-bold">{children}</h2>;
}

export function SheetTrigger({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
} 