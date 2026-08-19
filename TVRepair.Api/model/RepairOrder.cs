using System;
using System.Collections.Generic;
using System.Data.Common;
using System.Linq;
using System.Threading.Tasks;

namespace TVRepair.Api.model
{
    public class RepairOrder
    {
        public Guid Id {get;set;}

        public string? UserName {get;set;}

        public string Brand {get;set;}

        public string Area { get;set;}

        public string IssueDescription { get; set;}
    }
}