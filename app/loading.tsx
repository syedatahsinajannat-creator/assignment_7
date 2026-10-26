export default function Loading() {
  return (
    <main className="min-h-screen bg-emerald-50/30 p-4 md:p-8">
      <div className="max-w-6xl mx-auto space-y-6">
        {/* Category Filter Buttons Skeleton */}
        <div className="flex flex-wrap gap-2">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div
              key={i}
              className="h-10 w-24 bg-gray-200 rounded-lg animate-pulse"
            />
          ))}
        </div>

        {/* Product Cards Grid Skeleton */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div
              key={i}
              className="bg-white p-4 rounded-xl border border-emerald-100 shadow-sm space-y-3 animate-pulse"
            >
              <div className="flex justify-between items-center">
                <div className="h-4 w-16 bg-gray-200 rounded-full" />
                <div className="h-4 w-16 bg-gray-200 rounded" />
              </div>
              <div className="h-6 w-3/4 bg-gray-200 rounded" />
              <div className="h-4 w-1/2 bg-gray-200 rounded pt-2" />
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}