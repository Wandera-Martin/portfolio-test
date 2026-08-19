export type Project = {
  slug: string;
  index: string;
  displayTitle: string;
  technicalTitle: string;
  shortDescription: string;
  methods: string[];
  metadata: string[];
  question: string;
  sector: string;
  transformationProblem: string;
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
  caseStudy?: {
    scopeNote: string;
    sections: Array<{
      id: string;
      label: string;
      title: string;
      status: "documented" | "partial" | "pending";
      body: string;
      items?: string[];
      missing?: string[];
      artifacts?: Array<{
        src: string;
        alt: string;
        caption: string;
        width: number;
        height: number;
        sourceUrl: string;
      }>;
      links?: Array<{
        label: string;
        href: string;
      }>;
    }>;
  };
};

export const placeholderDisclaimer =
  "Illustrative case study created to demonstrate the portfolio structure. It does not represent work performed by the portfolio owner.";

export const projects: Project[] = [
  {
    slug: "football-player-value-prediction",
    index: "01",
    displayTitle: "What drives a footballer's market value?",
    technicalTitle: "Football Statistics and Player Value Prediction with Linear Regression",
    shortDescription:
      "A coursework data science project combining three datasets into a one-player-per-row analysis and testing an interpretable Linear Regression baseline.",
    methods: ["Python", "Linear Regression"],
    metadata: ["23,506 players", "R² 0.276"],
    question: "Can football statistics predict what a player is worth?",
    sector: "Sports Analytics & Data Science",
    transformationProblem: "Quantifying market value amidst off-pitch variables",
    context:
      "The project combined profiles, career-performance records, and historical market values for 23,506 professional football players, then evaluated a beginner-level Linear Regression model on an unseen test set.",
    tensions: [
      "On-pitch statistics versus off-pitch influences (club, league strength, reputation, and transfer demand)",
      "Model training (model.fit) versus the extensive groundwork of data cleaning and preventing data leakage",
      "High-value outliers (mean of 1.41M) versus the typical player reality (median of 275K)",
    ],
    signals: [
      "Right-skewed market values",
      "Peak valuations at ages 26–28",
      "Attacker and midfielder premium valuation",
    ],
    systems: [
      "Python data processing pipelines",
      "Linear Regression modeling",
      "Feature engineering and exploratory analysis",
    ],
    stories: [
      "The hidden effort of data preparation",
      "Interpreting machine learning results honestly",
      "The limits of performance data in valuation",
    ],
    isPlaceholder: false,
    status: "published",
    disclaimer: null,
    coverImage: {
      src: "/images/projects/football-player-value-prediction-cover.png",
      alt: "Editorial cover asking whether football statistics can predict a player's market value, with a footballer and regression chart.",
    },
    caseStudy: {
      scopeNote:
        "Published in August 2026, this coursework project documents the full path from defining one row per player to interpreting a deliberately simple model without overstating its accuracy.",
      sections: [
        {
          id: "dataset-context",
          label: "Dataset context",
          title: "Three datasets, resolved to one row per player",
          status: "partial",
          body:
            "Player profiles supplied birth date, height, position, and preferred foot; performance records supplied appearances, goals, and assists; historical records supplied changing market values. After grouping and merging, the prepared dataset contained 23,506 unique players.",
          items: [
            "Unit of analysis: one football player",
            "Performance rows aggregated into career totals and per-appearance rates",
            "Target: each player's latest positive market value recorded from June 2025 onward",
          ],
          missing: ["Original dataset names and source links", "Licensing and reuse context"],
        },
        {
          id: "research-question",
          label: "Research question",
          title: "How much can observable player data explain?",
          status: "documented",
          body:
            "The regression question asked whether age, height, position, preferred foot, appearances, goals, and assists could help explain or predict market value. The goal was to learn the complete process, not to claim a professional valuation system.",
          items: ["Prepare messy data", "Explore patterns", "Create useful variables", "Build and evaluate one understandable model", "Interpret the result honestly"],
        },
        {
          id: "data-cleaning",
          label: "Data cleaning",
          title: "The model depended on decisions made before fitting",
          status: "documented",
          body:
            "Performance records were grouped by player_id into career totals and rates. The 2025/26 performance season was excluded to reduce leakage, zero heights were treated as missing and filled with the median for each position, unknown preferred feet were retained as Unknown, and age was calculated at the valuation date.",
          items: [
            "Career appearances, goals, assists, and goal contributions",
            "Goals and assists per appearance",
            "Position-level median imputation for missing height",
            "Age aligned to the recorded valuation date",
          ],
        },
        {
          id: "exploratory-analysis",
          label: "Exploratory analysis",
          title: "The typical player was far below the average",
          status: "documented",
          body:
            "Mean market value was approximately 1.41 million, while the median was 275,000 and the most common value was 100,000. A small number of extremely valuable players pulled the average upward, producing a strongly right-skewed distribution.",
          artifacts: [
            {
              src: "/images/projects/football-market-value-distribution.png",
              alt: "Histogram showing most player market values concentrated near the low end with a long right tail.",
              caption: "Distribution of player market values. A small elite group creates a long right-hand tail.",
              width: 889,
              height: 490,
              sourceUrl: "https://cdn-images-1.medium.com/max/889/1*iwtjOtEDOf2YAP6zuY942g.png",
            },
          ],
        },
        {
          id: "visualizations",
          label: "Visualizations",
          title: "Position mattered; age showed the clearest curve",
          status: "documented",
          body:
            "Attackers and midfielders had median values of approximately 300,000, defenders 250,000, and goalkeepers 175,000. Median value generally rose through the early twenties, peaked in the 26–28 group, and then declined.",
          items: ["Position alone did not explain the wide variation within each group", "The non-linear age pattern motivated an age-squared feature"],
          artifacts: [
            {
              src: "/images/projects/football-median-value-by-position.png",
              alt: "Bar chart comparing median market value for attackers, midfielders, defenders, and goalkeepers.",
              caption: "Median market value by position. Attackers and midfielders were highest; goalkeepers were lowest.",
              width: 790,
              height: 490,
              sourceUrl: "https://cdn-images-1.medium.com/max/790/1*F96ruCYkQIWI8WYYRv-0Mg.png",
            },
            {
              src: "/images/projects/football-median-value-by-age.png",
              alt: "Line chart showing median market value rising to a peak at ages 26 to 28 before declining.",
              caption: "Median market value by age group. Values peaked between ages 26–28 in the prepared dataset.",
              width: 889,
              height: 490,
              sourceUrl: "https://cdn-images-1.medium.com/max/889/1*wd0Vd2n-V5qY0SKKxd3enA.png",
            },
          ],
        },
        {
          id: "model",
          label: "Model",
          title: "An interpretable baseline, trained on log market value",
          status: "documented",
          body:
            "The Linear Regression model used age at valuation, age squared, height, career appearances, goals, assists, position, and preferred foot. The skewed target was transformed with np.log1p(value), categorical fields were one-hot encoded, and the data was split 80/20.",
          items: ["18,804 training players", "4,702 testing players", "Predictions evaluated on players excluded from training"],
        },
        {
          id: "findings",
          label: "Findings",
          title: "Useful signal, but most variation remained unexplained",
          status: "documented",
          body:
            "The model achieved R² = 0.276, explaining approximately 28% of the variation in log market value on the test set. The mean absolute error after reversing the transformation was approximately 1.24 million, while the median absolute error was about 211,000.",
          items: [
            "Approximately 72% of variation remained outside the model",
            "A small number of elite players drove very large errors",
            "Linear Regression pulled predictions toward more typical values",
          ],
        },
        {
          id: "limitations",
          label: "Limitations",
          title: "Performance data cannot explain valuation alone",
          status: "documented",
          body:
            "The dataset could not see many factors that shape the real transfer market. The result is a baseline for understanding available signal, not a professional pricing model.",
          items: [
            "Current club and league strength",
            "Contract length and transfer demand",
            "Recent form, injury status, and international appearances",
            "Reputation, commercial appeal, and negotiation conditions",
          ],
        },
        {
          id: "learning",
          label: "Learning",
          title: "Machine learning started long before model.fit()",
          status: "documented",
          body:
            "The most valuable work involved defining the unit of analysis, aligning dates, avoiding future information, handling missing values, and deciding whether a statistic represented ability or simply more playing time. Evaluation was something to interpret rather than defend.",
          items: ["Improve the data before adding model complexity", "Compare recent performance with career totals", "Add club, league, contract, injury, international, and transfer-activity context"],
        },
        {
          id: "artifacts",
          label: "Actual artifacts",
          title: "Published analysis and project repository",
          status: "documented",
          body:
            "The complete project is published with its analysis narrative and a repository containing the Jupyter notebooks, prepared dataset, model results, documentation, and final report.",
          links: [
            {
              label: "Read the full analysis on Medium",
              href: "https://medium.com/@martinwandera/can-football-statistics-predict-a-players-market-value-df7dacda14e6",
            },
            {
              label: "View the project on GitHub",
              href: "https://github.com/Wandera-Martin/Football-Player-Market-Value",
            },
          ],
        },
      ],
    },
  },
  {
    slug: "data-to-decision",
    index: "02",
    displayTitle: "Turning scattered program data into a decision system",
    technicalTitle: "Illustrative decision-centered data governance scenario",
    shortDescription:
      "A fictional scenario about moving from disconnected reporting practices toward a shared evidence and governance model.",
    methods: ["Decision mapping", "Data governance", "Evidence workflow"],
    metadata: ["Illustrative placeholder"],
    question: "What changes when reporting data is designed around decisions rather than collection?",
    sector: "Development organizations",
    transformationProblem: "Data without decision utility",
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
    displayTitle: "Designing adoption around an emerging platform",
    technicalTitle: "Illustrative platform adoption and ecosystem operating-model scenario",
    shortDescription:
      "A fictional scenario exploring the relationship between product choices, partner incentives, operating models, communication, and adoption.",
    methods: ["Partner research", "Operating-model design", "Adoption strategy"],
    metadata: ["Illustrative placeholder"],
    question: "How might a useful technology become part of how an ecosystem actually works?",
    sector: "Technology ecosystems",
    transformationProblem: "Product rollout without adoption",
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
