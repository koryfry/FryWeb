import { Action } from '@ngrx/store';
import { Update } from '@ngrx/entity';
import { Arena } from '../../../models/arena/arena.model';

export enum ArenaActionTypes {
    LoadArenasRequestSuccess = '[Arena] Load Arenas',
    AddArena = '[Arena] Create Arena'
}

export class LoadArenasRequestSuccess implements Action {
    readonly type = ArenaActionTypes.LoadArenasRequestSuccess;

    constructor(public payload: { arenas: Arena[] }) {}
}

export class AddArena implements Action {
    readonly type = ArenaActionTypes.AddArena;
    constructor(public arena: Arena) { }
}

export type ArenaActions = 
    LoadArenasRequestSuccess
    | AddArena;