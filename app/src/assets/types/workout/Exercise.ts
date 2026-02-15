export type Session = {
    id: string;
    name: string;
    date: string;
    person_id: string;
    type_id: string; // ID of what session type it is: pull_day, push_day, leg_day
    exercises: Exercise[];
    bodyMetric: BodyMetric;
}

export type WeightUnit = 'kg' | 'lbs';
export type Weight = `${number}${WeightUnit}` | 'BW' | (string & {});

export type BodyMetric = {
    weight?: `${number}${WeightUnit}`;
    height?: string | number;
}

// Movement type = type for a single or group of exercises
export type Movement = {
    name: string;
    sets: Set[];
}
// Type for multiple consecutive exercises
export type Exercise = {
    id: string;
    movements: Movement[];
}

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

// Type for an atomic set
export type Subset = {
    load: Weight;
    reps: Rep[];
    remark?: string;
}
// Type for 1 set
export type UnitSet = {
    kind: 'unit', 
    subsets: Subset;
}
// Type for a drop set - start with a normal set then work until failure, reduce then repeat
export type DropSet = {
    kind: 'drop',
    subsets: Subset[];
}
// Union type for all types of sets
export type Set = UnitSet | DropSet;