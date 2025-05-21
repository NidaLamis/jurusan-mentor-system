
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface ProfileChartProps {
  traits: Record<string, number>;
}

const ProfileChart: React.FC<ProfileChartProps> = ({ traits }) => {
  // Transform traits to format needed for recharts
  const data = Object.entries(traits).map(([trait, value]) => ({
    trait: formatTraitName(trait),
    value
  })).sort((a, b) => b.value - a.value);

  // Custom colors for bars
  const colors = [
    '#0270c8', // analytical - education-600
    '#1090ea', // creative - education-500
    '#3aabf8', // social - education-400
    '#7ec7fc', // practical - education-300
    '#bae0fd', // investigative - education-200
    '#e0effe', // enterprising - education-100
  ];

  // Format trait names for display
  function formatTraitName(trait: string): string {
    const names: Record<string, string> = {
      analytical: 'Analitis',
      creative: 'Kreatif',
      social: 'Sosial',
      practical: 'Praktis',
      investigative: 'Investigatif',
      enterprising: 'Wirausaha',
    };
    return names[trait] || trait;
  }

  return (
    <Card className="w-full shadow-md animate-slide-up">
      <CardHeader>
        <CardTitle className="text-xl text-education-900">Profil Kepribadian Anda</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-[250px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={data}
              margin={{ top: 5, right: 20, left: 20, bottom: 20 }}
              layout="vertical"
            >
              <XAxis type="number" domain={[0, 'dataMax + 5']} />
              <YAxis type="category" dataKey="trait" width={100} />
              <Tooltip
                formatter={(value: number) => [`Skor: ${value.toFixed(1)}`, 'Nilai']}
                labelFormatter={(label) => `Karakteristik: ${label}`}
                contentStyle={{ 
                  backgroundColor: '#ffffff', 
                  border: '1px solid #e0effe',
                  borderRadius: '4px'
                }}
              />
              <Bar dataKey="value" barSize={20} radius={[0, 4, 4, 0]}>
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProfileChart;
