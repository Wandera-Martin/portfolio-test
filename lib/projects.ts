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
      "An end-to-end data science project exploring the relationship between player statistics and market values using a Linear Regression model in Python.",
    methods: ["Python", "Linear Regression"],
    metadata: ["23,506 players"],
    question: "Can football statistics predict what a player is worth?",
    sector: "Sports Analytics & Data Science",
    transformationProblem: "Quantifying market value amidst off-pitch variables",
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
        "This page separates what is currently documented from material that still needs to be supplied. No missing result or contribution is inferred.",
      sections: [
        {
          id: "dataset-context",
          label: "Dataset context",
          title: "Three datasets covering 23,506 professional players",
          status: "documented",
          body:
            "The current project record describes profile data, career-performance data, and historical market-value data used together for the analysis.",
          missing: ["Dataset names and source links", "Date or version information", "Licensing and reuse context"],
        },
        {
          id: "research-question",
          label: "Research question",
          title: "Can football statistics predict what a player is worth?",
          status: "documented",
          body:
            "The project examines how far player statistics can explain market value while recognizing that valuation also reflects club, league, reputation, and transfer-demand factors.",
        },
        {
          id: "data-cleaning",
          label: "Data cleaning",
          title: "Preparing the data before fitting the model",
          status: "partial",
          body:
            "The current project notes confirm that data cleaning and leakage prevention were part of the workflow.",
          missing: ["Join and deduplication steps", "Missing-value treatment", "Exclusions and leakage checks", "Reproducible cleaning artifact"],
        },
        {
          id: "exploratory-analysis",
          label: "Exploratory analysis",
          title: "Reading the distribution before modeling it",
          status: "partial",
          body:
            "Exploratory analysis and feature engineering are documented as part of the workflow, including attention to the right-skewed distribution of market values.",
          missing: ["Exploration sequence", "Supporting charts", "Feature-level observations", "Analysis notebook"],
        },
        {
          id: "visualizations",
          label: "Visualizations",
          title: "Source charts and explanatory graphics",
          status: "pending",
          body:
            "No verified analysis visualizations have been supplied for this portfolio page yet. The current cover is an editorial image, not a research artifact.",
          missing: ["Distribution plots", "Age and position comparisons", "Model diagnostic visuals", "Captions and source notes"],
        },
        {
          id: "model",
          label: "Model",
          title: "Linear Regression in Python",
          status: "partial",
          body:
            "The documented model is a Linear Regression model implemented in Python to explore the relationship between player statistics and market value.",
          missing: ["Final feature set", "Train-test procedure", "Evaluation metrics", "Coefficient interpretation", "Model artifact"],
        },
        {
          id: "findings",
          label: "Findings",
          title: "Current observations from the analysis",
          status: "partial",
          body: "The project record currently identifies three observations without supplying their underlying charts or model tables.",
          items: ["Market values were right-skewed", "Peak valuations appeared at ages 26–28", "Attackers and midfielders carried a valuation premium"],
          missing: ["Supporting calculations", "Exact model results", "Uncertainty and error reporting"],
        },
        {
          id: "limitations",
          label: "Limitations",
          title: "Performance data cannot explain valuation alone",
          status: "documented",
          body:
            "Club context, league strength, reputation, transfer demand, and high-value outliers limit what a simple statistical model can explain about player value.",
          missing: ["Quantitative error analysis", "Segment-level limitations", "Data-quality limitations"],
        },
        {
          id: "learning",
          label: "Learning",
          title: "Preparation and interpretation matter as much as model fitting",
          status: "partial",
          body:
            "The current project notes emphasize the hidden work of data preparation, honest interpretation of machine-learning results, and the limits of performance data.",
          missing: ["Verified retrospective", "What would change in a second iteration"],
        },
        {
          id: "artifacts",
          label: "Actual artifacts",
          title: "Research materials to be added progressively",
          status: "pending",
          body:
            "The published page currently contains an editorial cover only. Research artifacts have not yet been supplied for publication.",
          missing: ["Code or notebook", "Source visualizations", "Model output", "Data documentation", "Download or repository links"],
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
