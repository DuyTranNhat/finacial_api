using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using api.Models;

namespace api.Interfaces
{
    public interface IPortifolioRepository
    {
        Task<List<Stock>> GetUserPortfolio(AppUser appUser);
        Task<Portfolio?>  CreateAsync(Portfolio portfolio);
        Task<Portfolio?> DeleteAsync(AppUser appUser, string symbol);
    } 
}