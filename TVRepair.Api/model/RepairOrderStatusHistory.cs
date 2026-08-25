using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace TVRepair.Api.model
{
    public class RepairOrderStatusHistory
    {
        [Key]
        public int HistoryID { get; set; }

        public Guid RepairOrderID { get ;set;}

        public string Status { get ; set;}

        public DateTime UpdatedDate { get ; set;}
    }
}