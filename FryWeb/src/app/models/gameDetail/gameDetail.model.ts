import { Arena } from "app/models/arena/arena.model";
import { AgeGroup } from "app/models/ageGroup/age-group.model";
import { Official } from "app/models/official/official.model";

/**
 * Game Details represents an instance of the details related to an ice hockey
 * game that an official works. It brings together the Arena, Age Group and
 * Official models
 */

 export interface GameDetail {
    id?: number,
    GameDate: Date,
    GameTime: string,
    ArenaId: number,
    AgeGroupId: number,
    Partner1_OfficialId?: number,
    Partner2_OfficialId?: number,
    Partner3_OfficialId?: number,
    Ref?: boolean,
    Line?: boolean,
    TotalMiles: number,
    RateOfPay?: number,
    DatePaid?: Date,
    MiscExpenseAmount?: number,
    AmountPaid?: number,
    Arena: Arena,
    AgeGroup: AgeGroup,
    Partner1?: Official
    Partner2?: Official
    Partner3?: Official
 }