export type Project = {
  slug: string;
  index: string;
  title: string;
  question: string;
  sector: string;
  transformationProblem: string;
  summary: string;
  context: string;
  tensions: string[];
  signals: string[];
  systems: string[];
  stories: string[];
  isPlaceholder: boolean;
  status: "prototype" | "published";
  disclaimer: string | null;
  coverImage?: {
    src: string;
    alt: string;
  };
};

export const placeholderDisclaimer =
  "Illustrative case study created to demonstrate the portfolio structure. It does not represent work performed by the portfolio owner.";

export const projects: Project[] = [
{
  slug: "football-player-value-prediction",
  index: "01",
  title: "Football Statistics and Player Value Prediction with Linear Regression",
  question: "Can football statistics predict what a player is worth?",
  sector: "Sports Analytics & Data Science",
  transformationProblem: "Quantifying market value amidst off-pitch variables",
  summary:
    "An end-to-end data science project exploring the relationship between player statistics and market values using a Linear Regression model in Python.",
  context:
    "The project analyzed data from 23,506 professional football players across three datasets covering profiles, career performance, and historical market values to build a predictive model.",
  tensions: [
    "On-pitch statistics versus off-pitch influences (club, league strength, reputation, and transfer demand)",
    "Model training (model.fit) versus the extensive groundwork of data cleaning and preventing data leakage",
    "High-value outliers (mean of 1.41M) versus the typical player reality (median of 275K)",
  ],
  signals: [
    "Right-skewed market values", 
    "Peak valuations at ages 26–28", 
    "Attacker and midfielder premium valuation"
  ],
  systems: [
    "Python data processing pipelines", 
    "Linear Regression modeling", 
    "Feature engineering and exploratory analysis"
  ],
  stories: [
    "The hidden effort of data preparation", 
    "Interpreting machine learning results honestly", 
    "The limits of performance data in valuation"
  ],
  isPlaceholder: false,
  status: "published",
  disclaimer: null,
  coverImage: {
    src: "/images/projects/football-player-value-prediction-cover.png",
    alt: "Editorial cover asking whether football statistics can predict a player's market value, with a footballer and regression chart.",
  },
},
  {
    slug: "data-to-decision",
    index: "02",
    title: "Turning scattered program data into a decision system",
    question: "What changes when reporting data is designed around decisions rather than collection?",
    sector: "Development organizations",
    transformationProblem: "Data without decision utility",
    summary:
      "A fictional scenario about moving from disconnected reporting practices toward a shared evidence and governance model.",
    context:
      "The prototype considers a distributed program environment where teams collect significant information but struggle to connect it to timely institutional decisions.",
    tensions: [
      "Reporting compliance versus decision usefulness",
      "Local context versus portfolio-wide comparability",
      "Data access versus responsible governance",
    ],
    signals: ["Reporting workflows", "Decision moments", "Evidence gaps"],
    systems: ["Data governance", "Analysis workflow", "Accountability model"],
    stories: ["Common definitions", "Decision confidence", "Organizational learning"],
    isPlaceholder: true,
    status: "prototype",
    disclaimer: placeholderDisclaimer,
  },
  {
    slug: "ecosystem-adoption",
    index: "03",
    title: "Designing adoption around an emerging platform",
    question: "How might a useful technology become part of how an ecosystem actually works?",
    sector: "Technology ecosystems",
    transformationProblem: "Product rollout without adoption",
    summary:
      "A fictional scenario exploring the relationship between product choices, partner incentives, operating models, communication, and adoption.",
    context:
      "The prototype imagines a platform entering a distributed ecosystem where technical readiness does not automatically produce partner or user adoption.",
    tensions: [
      "Platform consistency versus partner autonomy",
      "Feature delivery versus ecosystem readiness",
      "Short-term activation versus sustained use",
    ],
    signals: ["Partner research", "Usage patterns", "Readiness indicators"],
    systems: ["Product model", "Partner operations", "Support infrastructure"],
    stories: ["Value articulation", "Partner alignment", "Sustained adoption"],
    isPlaceholder: true,
    status: "prototype",
    disclaimer: placeholderDisclaimer,
  },
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
