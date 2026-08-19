using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Identity;

namespace TVRepair.Api.model
{
    public class ApplicationUser : IdentityUser
    {
        public string? CustomerType { get; set;}

        public string? PreferredArea { get ;set;}
    }
}