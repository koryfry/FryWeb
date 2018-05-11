using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Kory.Tools.Data.RefereeTools;
using Kory.Tools.Data.Repository;
using Kory.Tools.BR.Utils;

namespace Kory.Tools.Data.Business.Services.Officiating
{
    public class ArenaService
    {
        //private readonly ArenaRepository _arenaRepository;

        //public ArenaService()
        //{
        //    _arenaRepository = new ArenaRepository();
        //}

        //public List<Arena> GetArenas()
        //{
        //    var arenas = _arenaRepository.All.OrderBy(a => a.ArenaKey).ToList();

        //    return arenas;
        //}

        //public Arena GetArena(int ArenaKey)
        //{
        //    var arena = new Arena();

        //    try
        //    {
        //        arena = _arenaRepository.All.SingleOrDefault(a => a.ArenaKey == ArenaKey);

        //        if (arena != null)
        //        {
        //            arena.ModelCode = (int)MessageCodes.Success;
        //        }
        //    }

        //    catch (Exception ex)
        //    {
        //        if (arena != null)
        //        {
        //            arena.ModelCode = (int)MessageCodes.Failure;
        //            arena.Message = ex.Message;
        //        }
        //    }

        //    return arena;
        //}

        //public Arena SubmitArena(Arena arena)
        //{
        //    try
        //    {
        //        // Performs appropriate operations based on Age Group Key value
        //        _arenaRepository.InsertOrUpdate(arena);

        //        // Saves and writes the Age Group to the database
        //        _arenaRepository.Save();

        //        // Repopulate the Age Group object
        //        arena = GetArena(arena.ArenaKey);

        //        arena.IsSubmitted = true;

        //        // Report the success
        //        arena.ModelCode = (int)MessageCodes.Success;
        //    }

        //    catch (Exception ex)
        //    {
        //        arena.IsSubmitted = false;
                
        //        // Report the failure
        //        arena.ModelCode = (int)MessageCodes.Failure;
                
        //        // Assign the message
        //        arena.Message = ex.Message;
        //    }

        //    return arena;
        //}

        //public void DeleteArena(int arenaKey)
        //{
        //    var arena = new Arena();

        //    try
        //    {
        //        _arenaRepository.Delete(arenaKey);
        //        _arenaRepository.Save();

        //        // Report the success
        //        arena.ModelCode = (int)MessageCodes.Success;
        //    }

        //    catch (Exception ex)
        //    {
        //        // Report the failure
        //        arena.ModelCode = (int)MessageCodes.Failure;

        //        // Assign the message
        //        arena.Message = ex.Message;
        //    }
        //}

        //public List<Arena> GetArenasLikeArena(string term)
        //{
        //    return _arenaRepository.All.Where(a => a.ArenaName.Contains(term)).ToList();
        //}

        //public Arena CreateDefaultArena()
        //{
        //    var Arena = new Arena();

        //    return Arena;
        //}

        //public bool ValidateArenaName(Arena arena)
        //{
        //    if (arena.ArenaName != null)
        //    {
        //        //Does Arena Name already exist
        //        if (DoesArenaNameAlreadyExist(arena))
        //        {
        //            //Arena Name is Not Valid
        //            arena.NotValidReason = ArenaNotValid.AlreadyExists;
        //            arena.IsValidArena = false;

        //            return false;
        //        }

        //        else
        //        {
        //            // Valid Arena
        //            arena.IsValidArena = true;
        //            return true;
        //        }
        //    }

        //    else
        //    {
        //        return false;
        //    }
        //}

        //public List<Arena> GetArenaNamesLikeArenaName(string term)
        //{
        //    return _arenaRepository.All.Where(a => a.ArenaName == term).ToList();
        //}

        //public List<Arena> GetArenaNamesNotLikeArenaName(string term)
        //{
        //    return _arenaRepository.All.Where(a => a.ArenaName != term).ToList();
        //}
        
        //private bool DoesArenaNameAlreadyExist(Arena arena)
        //{
        //    List<Arena> MatchArenaNames = GetArenaNamesLikeArenaName(arena.ArenaName.Trim());

        //    foreach (Arena Arena in MatchArenaNames)
        //    {
        //        if (Arena.ArenaName.ToString().Contains(arena.ArenaName))
        //        {
        //            return true;
        //        }

        //        else
        //        {
        //            return false;
        //        }
        //    }

        //    return false;
        //}

        //public void Dispose()
        //{
        //    _arenaRepository.Dispose();
        //}
    }
}
