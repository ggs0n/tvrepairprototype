using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace TVRepair.Api.data
{
    public class SubmitQuotationRequest
    {
        public Guid RepairOrderId { get ;set;}

        public string QuotationDesc { get ; set;}

        public int Amount { get;set;}

        public Guid CustomerId { get ;set;}

        public Guid TechnicianId { get ;set;}
    }
}