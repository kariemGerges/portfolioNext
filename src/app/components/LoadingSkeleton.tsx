export function BlogCardSkeleton() {
    return (
        <div className="h-full bg-white rounded-xl border border-gray-200 overflow-hidden animate-pulse">
            <div className="w-full h-48 sm:h-56 bg-gray-200" />
            <div className="p-6 space-y-4">
                <div className="h-4 w-24 bg-gray-200 rounded" />
                <div className="h-6 w-3/4 bg-gray-200 rounded" />
                <div className="space-y-2">
                    <div className="h-4 w-full bg-gray-200 rounded" />
                    <div className="h-4 w-5/6 bg-gray-200 rounded" />
                </div>
                <div className="h-4 w-32 bg-gray-200 rounded mt-4" />
            </div>
        </div>
    );
}

export function BlogListSkeleton() {
    return (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {[...Array(6)].map((_, i) => (
                <BlogCardSkeleton key={i} />
            ))}
        </div>
    );
}

