export type Session = {
    id: string;
    name: string;
    date: string;
    type_id: string; // ID of what session type it is: pull_day, push_day, leg_day
    exercises: Exercise[];
    bodyMetric: BodyMetric;
}

export type Weight = `${number}kg` | `${number}lbs` | 'BW';

export type BodyMetric = {
    weight?: Omit<Weight, 'BW'>;
    height?: string | number;
}

// Base type for an exercise
export type BaseExercise = {
    id: string;
    name: string;
}
// Type for one exercise ONLY
export type SingleExercise = BaseExercise & {
    kind: "single"
    sets: (UnitSet | DropSet)[][];
}
// Type for multiple consecutive exercises
export type SupersetExercise = {
    kind: "superset"
    sets: (UnitSet | DropSet)[][][];
}
// Union type for all exercises
export type Exercise = SingleExercise | SupersetExercise;

export type RepRemark = 'F' | 'NROM' | 'H';

// Type for rep unit
export type RepUnit = number | `${number}${RepRemark}`;
// Type for both handed rep
export type AmbiRep = RepUnit;
// Type for rep that specifies left and right hand
export type HandRep = {
    left: RepUnit;
    right: RepUnit;
}
// Union type for both reps
export type Rep = AmbiRep | HandRep;

export type Set = {
    load: Weight | [Weight, Weight];
    reps: Rep[];
    remark?: string;
}

// Type for 1 set
export type UnitSet = {
    kind: 'unit', 
    sets: Set;
}
// Type for a drop set - start with a normal set then work until failure, reduce then repeat
export type DropSet = {
    kind: 'drop',
    sets: Set[];
}