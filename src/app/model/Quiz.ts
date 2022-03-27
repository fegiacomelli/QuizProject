import {Option} from "./Option";

export type Quiz = {
    _id: string,
    title?: string,
    team?: string,
    description?: string,
    type?: string,
    rewardXp?: number,
    level?: string,
    options?: Option[]
}


