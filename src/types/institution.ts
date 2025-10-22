// Institution Types based on public/data/institutions.json

export interface Institution {
  code: number;
  name: string;
  type: 'production' | 'beta';
}

export interface InstitutionsData {
  production: Institution[];
  beta: Institution[];
  all: Institution[];
}

export type InstitutionMap = Record<string, Institution>;
