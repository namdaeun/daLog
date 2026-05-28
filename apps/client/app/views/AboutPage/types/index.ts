import type { EXPERIENCES } from '~/constants/experiences';
import type { PROJECTS } from '~/constants/projects';
import type { REVIEWS } from '~/constants/review';

export type Project = (typeof PROJECTS)[number];

export type Experience = (typeof EXPERIENCES)[number];

export type Review = (typeof REVIEWS)[number];
