import { cn } from "@/lib/utils";

export function GradientMesh({ className }: { className?: string }) {
  return (
    <div
      aria-hidden
      className={cn("pointer-events-none absolute inset-0 overflow-hidden -z-10", className)}
    >
      <div
        className="absolute left-1/2 top-0 -translate-x-1/2 h-[720px] w-[1200px] max-w-[140%] rounded-full blur-3xl opacity-40"
        style={{
          backgroundImage:
            "radial-gradient(closest-side, #F16D34, transparent 70%), radial-gradient(closest-side at 70% 30%, #BBE0EF, transparent 70%)",
          backgroundSize: "200% 200%",
          animation: "gradient-pan 14s ease-in-out infinite",
        }}
      />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_-10%,rgba(241,109,52,0.28),transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_10%,rgba(187,224,239,0.2),transparent_55%)]" />
    </div>
  );
}
