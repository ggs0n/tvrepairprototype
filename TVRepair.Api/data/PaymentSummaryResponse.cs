using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.Identity.Client;

namespace TVRepair.Api.data
{
    public class PaymentSummaryResponse
    {
        public decimal QuotationAmount { get ;set;}

        public int QuotationId { get ;set;}
    }
}