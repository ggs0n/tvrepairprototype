using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace TVRepair.Api.data
{
    public class GetPaymentSummaryRequest
    {
        public Guid RepairOrderId { get; set; }
    }
}