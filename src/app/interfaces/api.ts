export interface APIResponse {
  results:      Result[];
  offset:       number;
  number:       number;
  totalResults: number;
}

export interface Result {
  vegetarian:               boolean;
  vegan:                    boolean;
  glutenFree:               boolean;
  dairyFree:                boolean;
  veryHealthy:              boolean;
  cheap:                    boolean;
  veryPopular:              boolean;
  sustainable:              boolean;
  lowFodmap:                boolean;
  weightWatcherSmartPoints: number;
  gaps:                     Gaps;
  preparationMinutes:       number;
  cookingMinutes:           number;
  aggregateLikes:           number;
  healthScore:              number;
  creditsText:              null | string;
  license?:                 string;
  sourceName:               null | string;
  pricePerServing:          number;
  id:                       number;
  title:                    string;
  readyInMinutes:           number;
  servings:                 number;
  sourceUrl:                string;
  openLicense:              number;
  image:                    string;
  imageType:                ImageType;
  summary:                  string;
  cuisines:                 any[];
  dishTypes:                string[];
  diets:                    string[];
  occasions:                any[];
  analyzedInstructions:     AnalyzedInstruction[];
  spoonacularSourceUrl:     string;
  author?:                  string;
}

export interface AnalyzedInstruction {
  name:  string;
  steps: Step[];
}

export interface Step {
  number:      number;
  step:        string;
  ingredients: Ent[];
  equipment:   Ent[];
  length?:     Length;
}

export interface Ent {
  id:            number;
  name:          string;
  localizedName: string;
  image:         string;
}

export interface Length {
  number: number;
  unit:   string;
}

export enum Gaps {
  No = "no",
}

export enum ImageType {
  Jpg = "jpg",
}
