
import Link from "next/link";
import { Button } from "./ui/button";
import { apps } from "@/lib/apps";
import { slugify } from "@/lib/utils";

const mainCategories = [...new Set(apps.map(app => app.category))];

const categoryGroups = {
    "Categories": mainCategories,
}

export function Sidebar() {
    return (
        <div className="space-y-6">
            {Object.entries(categoryGroups).map(([groupTitle, categories]) => (
                <div key={groupTitle} className="p-4 bg-secondary/50 rounded-lg border border-border">
                    <div className="flex items-center justify-between mb-4">
                        <h3 className="text-lg font-bold">{groupTitle}</h3>
                    </div>
                    <div className="grid grid-cols-2 gap-x-4 gap-y-2">
                        {categories.map(category => (
                            <Link key={category} href={`/${slugify(category)}/apps`} className="text-sm text-muted-foreground hover:text-primary transition-colors truncate">
                                {category}
                            </Link>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    )
}
