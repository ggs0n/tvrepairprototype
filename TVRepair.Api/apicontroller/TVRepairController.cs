using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Azure.Core;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Query.Internal;
using TVRepair.Api.data;
using TVRepair.Api.model;

namespace TVRepair.Api.apicontroller
{
    [ApiController]
    [Route("api/[controller]")]
    public class TVRepairController : ControllerBase
    {
        
        public readonly TVRepairDBContext _context;

        public TVRepairController(TVRepairDBContext context)
        {
            _context = context;
        }

        [HttpPost("AddRepairOrder")]
        public async Task<ActionResult> AddRepairOrder([FromForm]RepairOrder request )
        {
            try 
            {
                if(request==null)
                return BadRequest();

                request.Id = Guid.NewGuid();
                request.CreatedDate = DateTime.Now;
                request.Status = "OrderPlace"; //assign default value when orderplaced

                _context.RepairOrder.Add(request);
                await _context.SaveChangesAsync();

                return Created();
            }

            catch(Exception ex)
            {
                throw (ex);
            }
            
        }

        [HttpGet("GetRepairOrder")]
        public async Task<ActionResult<List<RepairOrder>>> GetRepairOrder(string UserName)
        {
            if (UserName==null)
            return BadRequest();
            
            var repairorderlist = await _context.RepairOrder.Where(a=>a.UserName == UserName).AsNoTracking().ToListAsync();

            if(repairorderlist==null)
            return BadRequest();

            else return Ok(repairorderlist);
        }


        [HttpGet("GetRepairOrderTechnician")]
        public async Task<ActionResult<List<RepairOrder>>> GetRepairOrderTechnician (string Area)
        {
            var orderlist = await _context.RepairOrder.Where(x=>x.Area==Area).AsNoTracking().ToListAsync();
            return Ok(orderlist);
        }


        [HttpPost("AcceptRepairOrderTechnician")]
        public async Task<ActionResult<List<RepairOrder>>> AcceptRepairOrderTechnician (Guid Id, string TechnicianId)
        {
            if (Id == null)
            return BadRequest("Id empty");

            if (TechnicianId == null)
            return BadRequest("technician id empty");

            try {
            
            var updateorder = _context.RepairOrder.FirstOrDefault(x=>x.Id == Id);
            updateorder.Status = "Accepted";
            updateorder.TechnicianId = TechnicianId;
            _context.SaveChanges();

            return Ok(new
            {
                id = updateorder.Id,
                TechnicianId = updateorder.TechnicianId,
                Status = updateorder.Status
            }
            );
            }

            catch (Exception ex)
            {
                return BadRequest();
            }
        }

        [HttpPost("MatchRepairOrderTechnician")]
        public async Task <ActionResult<List<RepairOrder>>> MatchRepairOrderTechnician ()
        {

            return Ok();
        }

    }
}