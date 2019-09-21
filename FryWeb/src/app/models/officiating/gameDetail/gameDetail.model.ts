import { Arena } from '@models/officiating/arena/arena.model';//"app/models/arena/arena.model";
import { AgeGroup } from '@models/officiating/ageGroup/age-group.model';//"app/models/ageGroup/age-group.model";
import { Official } from '@models/officiating/official/official.model';//"app/models/official/official.model";

/**
 * Game Details represents an instance of the details related to an ice hockey
 * game that an official works. It brings together the Arena, Age Group and
 * Official models
 */

 export interface GameDetail {
    id?: number,
    GameDate: Date,
    GameTime: string,
    Ref: boolean,
    Line: boolean,
    ArenaId: number,
    AgeGroupId: number,
    OfficialId: number,
    Partner1_OfficialId?: number,
    Partner2_OfficialId?: number,
    Partner3_OfficialId?: number,
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