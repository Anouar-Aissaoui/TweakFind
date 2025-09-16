
import Link from "next/link";
import { slugify } from "@/lib/utils";
import { apps, type AppCategory } from "@/lib/apps";
import { Home } from "lucide-react";

export function Sidebar() {
    const allCategories = [...new Set(apps.map(app => app.category))];

    return (
        <div className="space-y-6 sticky top-8">
            <div className="p-4 bg-secondary/50 rounded-lg border border-border">
                <h3 className="text-lg font-bold mb-4">Categories</h3>
                <div className="grid grid-cols-2 gap-x-4 gap-y-2">
                    <Link href="/" className="text-sm text-muted-foreground hover:text-primary transition-colors truncate flex items-center gap-2">
                        <Home className="w-4 h-4" /> Home
                    </Link>
                    {allCategories.map(category => (
                        <Link key={category} href={`/${slugify(category)}/apps`} className="text-sm text-muted-foreground hover:text-primary transition-colors truncate">
                            {category}
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    )
}
