using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace TVRepair.Api.data
{
    public class PaymentDetailsResponse
    {
        public int QuotationId { get; set; }
        public string QuotationDesc { get; set; }
        public int Amount { get; set; }
        
    }
}