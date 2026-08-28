using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.Net.Http.Headers;

namespace TVRepair.Api.model
{
    public class Quotation
    {
        [Key]
        public int QuotationId { get ;set;}
        public Guid RepairOrderId { get ;set;}

        public string QuotationDesc { get ; set;}

        public int Amount { get;set;}

        public Guid CustomerId { get ;set;}

        public Guid TechnicianId { get ;set;}
    }
}