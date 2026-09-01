using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.Identity.Client;

namespace TVRepair.Api.data
{
    public class GetRepairOrderResponse
    {
        public Guid Id {get;set;}

        public string? UserName {get;set;}

        public string Brand {get;set;}

        public string Area { get;set;}

        public string IssueDescription { get; set;}

        public string? Status { get ;set ;}

        public string? TechnicianId { get ;set ;}

        public DateTime CreatedDate { get ;set ;}

        public string? QuotationDesc { get ;set;}

        public decimal? QuotationAmount { get ;set;}

        public DateTime? QuotationDate { get ;set;}

        public string CustomerId { get ;set;}
    }
}