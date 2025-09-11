import { recommendTweakedApps } from '@/ai/flows/recommend-tweaked-apps';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Wand2 } from 'lucide-react';

export async function RecommendedApps() {
  const trendingApps = ['TikTok', 'Among Us', 'Genshin Impact'];
  let recommendations;
  try {
     recommendations = await recommendTweakedApps({ trendingApps });
  } catch (error) {
    console.error("Failed to get AI recommendations:", error);
    return null; // Don't render component if AI call fails
  }

  if (!recommendations || recommendations.recommendedApps.length === 0) {
    return null;
  }

  return (
    <div className="container mx-auto px-4 pt-8">
      <h2 className="text-2xl font-bold tracking-tight mb-4 flex items-center gap-2 font-headline">
        <Wand2 className="text-chart-1" />
        Curated For You
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {recommendations.recommendedApps.map((appName, index) => (
          <Card key={index} className="bg-accent/50">
            <CardHeader>
              <CardTitle className="font-semibold">{appName}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                {recommendations.descriptions[appName]}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
