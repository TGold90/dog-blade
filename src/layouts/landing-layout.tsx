export function LandingLayout() {
  return (
    <div className="relative min-h-screen w-full bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Centered Title */}
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center space-y-6">
          <h1 className="text-6xl md:text-8xl font-bold text-white tracking-tight">
            Dog Blade
          </h1>
          <p className="text-xl md:text-2xl text-purple-200">
            A Card Battle Adventure
          </p>
        </div>
      </div>
    </div>
  );
}

