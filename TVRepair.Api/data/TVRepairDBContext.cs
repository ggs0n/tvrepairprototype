using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using TVRepair.Api.model;

namespace TVRepair.Api.data
{
    public class TVRepairDBContext : IdentityDbContext<ApplicationUser>
    {
        public TVRepairDBContext(DbContextOptions<TVRepairDBContext> options) : base(options)
        {
            
        }

        public DbSet<RepairOrder> RepairOrder { get ; set;}
        public DbSet<RepairOrderStatusHistory> RepairOrderStatusHistory { get ; set;}
        public DbSet<Quotation> Quotation { get ;set;}
    }
}