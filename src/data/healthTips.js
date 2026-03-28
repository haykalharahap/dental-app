export const HEALTH_TIPS = [
  { id: 1, icon: '🪥', title: 'Brush Twice Daily', summary: 'Brush your teeth for at least two minutes each morning and night using fluoride toothpaste to remove plaque and prevent cavities.', category: 'Hygiene' },
  { id: 2, icon: '🧵', title: 'Floss Every Day', summary: 'Daily flossing removes food particles and plaque from between teeth where your toothbrush cannot reach, preventing gum disease.', category: 'Hygiene' },
  { id: 3, icon: '🥦', title: 'Eat Teeth-Friendly Foods', summary: 'Crunchy fruits and vegetables like apples and carrots naturally clean teeth. Dairy products strengthen enamel with calcium.', category: 'Nutrition' },
  { id: 4, icon: '🚫', title: 'Limit Sugary Drinks', summary: 'Sodas, juices, and energy drinks bathe your teeth in sugar and acid. Opt for water to keep your mouth hydrated and clean.', category: 'Nutrition' },
  { id: 5, icon: '🦷', title: 'Visit Your Dentist Regularly', summary: 'Schedule checkups every six months for professional cleaning and early detection of cavities, gum disease, and oral cancer.', category: 'Prevention' },
  { id: 6, icon: '🛡️', title: 'Wear a Mouthguard', summary: 'If you play contact sports or grind your teeth at night, a mouthguard protects against fractures and enamel wear.', category: 'Prevention' },
  { id: 7, icon: '🚭', title: 'Quit Smoking', summary: 'Tobacco stains teeth, causes gum disease, and dramatically increases the risk of oral cancer. Quitting improves oral health fast.', category: 'Lifestyle' },
  { id: 8, icon: '💧', title: 'Stay Hydrated', summary: "Drinking water washes away food debris, dilutes acids, and promotes saliva production — your mouth's natural defense system.", category: 'Lifestyle' },
  { id: 9, icon: '👅', title: 'Clean Your Tongue', summary: 'Bacteria accumulate on the tongue and cause bad breath. Gently brush or use a tongue scraper daily for fresher breath.', category: 'Hygiene' },
  { id: 10, icon: '⏰', title: 'Replace Your Toothbrush', summary: 'Swap your toothbrush or brush head every 3-4 months, or sooner if the bristles are frayed, to maintain effective cleaning.', category: 'Hygiene' },
];

export function getHealthTips(category = 'All') {
  if (category === 'All') return [...HEALTH_TIPS];
  return HEALTH_TIPS.filter((t) => t.category === category);
}
