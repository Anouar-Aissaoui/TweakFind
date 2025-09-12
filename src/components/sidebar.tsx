
import Link from "next/link";
import { Button } from "./ui/button";

const categoryGroups = {
    "Games": ["Action", "Adventure", "Apple Arcade", "Board", "Card", "Casino", "Casual", "MMOG", "Music Game", "Paid", "Puzzle", "Racing", "Role Playing", "Simulation", "Sports", "Strategy", "Trivia", "Word"],
    "Apps": ["Art & Design", "Beauty", "Books & Reference", "Business", "Comics", "Communication", "Dating", "Education", "Emulator Apps", "Entertainment", "Events", "Finance", "Health & Fitness", "House & Home", "IPA Apps", "jailbreak apps", "Lifestyle", "Maps & Navigation", "Media & Video", "Medical", "Music & Audio", "News And Magazines", "Personalization", "Photography", "Productivity", "Shopping", "Social", "Sport", "Tools", "Tools and apps", "Travel & Local", "Tweaked App Store", "Video Players", "Video Players & Editors", "Weather"]
}

export function Sidebar() {
    return (
        <div className="space-y-6">
            {Object.entries(categoryGroups).map(([groupTitle, categories]) => (
                <div key={groupTitle} className="p-4 bg-card rounded-lg border">
                    <div className="flex items-center justify-between mb-4">
                        <h3 className="text-lg font-bold">{groupTitle}</h3>
                        <Button asChild variant="ghost" size="sm">
                            <Link href={`/${groupTitle.toLowerCase()}`}>View More</Link>
                        </Button>
                    </div>
                    <div className="grid grid-cols-2 gap-x-4 gap-y-2">
                        {categories.map(category => (
                            <Link key={category} href={`/${category.toLowerCase().replace(/ & /g, '-').replace(/ /g, '-')}`} className="text-sm text-muted-foreground hover:text-primary transition-colors truncate">
                                {category}
                            </Link>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    )
}
