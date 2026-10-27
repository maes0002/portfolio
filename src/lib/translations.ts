export const translations: Record<string, string> = {
  'Previous project': 'Forrige projekt',
  'Next project': 'Næste projekt',
  'Personal projects': 'Egne projekter',
  'Digital Design · Website Development · Content Creation · 2026': 'Digitalt design · Webudvikling · Indholdsproduktion · 2026',
  'Toggle menu': 'Åbn eller luk menuen',
  'Project content': 'Projektindhold',
  'Home': 'Forside',
  'AI art direction — I created this image series in Adobe Firefly using Nano Banana, with a focus on composition, materials, lighting and visual consistency. I used AI as a creative tool to translate the project’s visual identity into a cohesive image universe, connecting individual scenes through a shared aesthetic. The series demonstrates how I combine design judgement with AI image generation to create visual content that supports a specific brand and concept.': 'AI art direction — Jeg har skabt billedserien i Adobe Firefly med Nano Banana med fokus på komposition, materialer, lys og visuel sammenhæng. Jeg har brugt AI som et kreativt værktøj til at omsætte projektets visuelle identitet til et samlet billedunivers, hvor de enkelte scener bindes sammen af en fælles æstetik. Serien viser, hvordan jeg kombinerer designfaglig dømmekraft med AI-billedgenerering for at skabe visuelt indhold, der understøtter et konkret brand og koncept.',
  'Laptop mockup': 'Laptop-mockup',
  'Tusindfryd website on a laptop': 'Tusindfryds hjemmeside på en bærbar computer',
  'SCHOOL PROJECTS': 'SKOLEPROJEKTER', 'PERSONAL PROJECTS': 'EGNE PROJEKTER',
  'DIGITAL DESIGNER': 'DIGITAL DESIGNER', 'RESUMÉ': 'RESUMÉ', 'Download PDF ↗': 'Hent PDF ↗',
  'OPEN TO WORK': 'ÅBEN FOR ARBEJDE', 'COLLECTION': 'UDVALG', 'OF MY WORK AND': 'AF MIT ARBEJDE OG', 'PROJECTS, 2026': 'PROJEKTER, 2026',
  'Portfolio / School projects': 'Portfolio / Skoleprojekter', 'Selected school': 'Udvalgte skole-', 'projects': 'projekter',
  'Selected projects from my studies': 'Udvalgte projekter fra min uddannelse', 'in digital design & development.': 'inden for digitalt design og udvikling.',
  'Explore projects ↓': 'Se projekter ↓', 'School projects': 'Skoleprojekter', 'Project name': 'Projektnavn',
  'Project preview coming soon': 'Projektbillede kommer snart', 'Featured project': 'Udvalgt projekt', 'Project preview': 'Projektbillede',
  'View project ↗': 'Se projektet ↗', 'Get in touch': 'Kontakt', 'Have a project': 'Har du et projekt', 'in mind?': 'i tankerne?',
  'Contact details coming soon.': 'Kontaktoplysninger kommer snart.',
  'Portfolio / Personal projects': 'Portfolio / Egne projekter', 'Personal': 'Egne',
  'Independent projects and creative experiments.': 'Egne projekter og kreative eksperimenter.', 'Projects coming soon.': 'Projekter kommer snart.',
  'Case:': 'Projekt:', 'Website': 'Hjemmeside', 'redesign': 'redesign', 'Final exam': 'Afsluttende eksamen',
  'View website ↓': 'Se hjemmesiden ↓', '← School projects': '← Skoleprojekter',
  'Mobile mockup': 'Mobilmockup', 'Tablet mockup': 'Tablet-mockup', 'Website walkthrough': 'Gennemgang af hjemmesiden',
  '(Images from case)': '(Billeder fra projektet)',
  'Project information': 'Projektoplysninger', 'Project introduction': 'Introduktion til projektet',
  'Images from case': 'Billeder fra projektet', 'Main navigation': 'Hovedmenu', 'Social media': 'Sociale medier',
  'Tusindfryd website on mobile': 'Tusindfryds hjemmeside på mobil', 'Tusindfryd website on tablet': 'Tusindfryds hjemmeside på tablet',
  'Tusindfryd website presented on a desktop monitor': 'Tusindfryds hjemmeside vist på en computerskærm',
  'A walkthrough of the Tusindfryd website': 'En gennemgang af Tusindfryds hjemmeside',
  'A preview of the Tusindfryd website': 'Et preview af Tusindfryds hjemmeside',
  'A preview of the Højskolen project': 'Et preview af Højskolen-projektet',
  'School Projects — Maja Estrup': 'Skoleprojekter — Maja Estrup', 'Personal Projects — Maja Estrup': 'Egne projekter — Maja Estrup',
  'Home — Maja Estrup': 'Forside — Maja Estrup',
  'This project was created as the final exam project for my multimedia design degree. The assignment was to develop a complete digital solution for the chosen case, Tusindfryd, using relevant theories, methods and tools.': 'Dette projekt er udarbejdet som en del af det afsluttende eksamensprojekt på multimediedesignuddannelsen. I projektet skulle der udarbejdes en færdig digital løsning for den selvvalgte case, Tusindfryd, gennem inddragelse af relevante teorier, metoder og værktøjer.',
  'The process covered initial research and analysis, concept development, design and technical implementation. Throughout the project, the key decisions and the reasoning behind them were documented.': 'Det indebærer alt fra indledende research og analyse til konceptudvikling, design og teknisk implementering. Igennem projektet skulle der dokumenteres for de centrale beslutninger og indsatser, der ligger bag dem.',
  'Explore the digital solution and the website design in the video.': 'Se den digitale løsning og udforsk sidens design i videoen.',
};
export function danish(text: string): string {
  return translations[text] ?? text
    .replace('Digital design', 'Digitalt design').replace('Development', 'Udvikling')
    .replace('Visual identity', 'Visuel identitet').replace('Concept', 'Koncept')
    .replace(/^Case image /, 'Projektbillede ')
    .replace(/^Image placeholder for school project /, 'Billedpladsholder til skoleprojekt ')
    .replace(/^View (.+) project$/, 'Se projektet $1');
}
