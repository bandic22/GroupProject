﻿using CarDealershipAPI.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace CarDealershipAPI.API
{
    public class CarsController : ApiController
    {
        private ApplicationDbContext _db = new ApplicationDbContext();

        // GET: api/Cars
        public IEnumerable<Car> Get()
        {
            return _db.Cars.ToList();
        }

        // GET: api/Cars/5
        public Car Get(int id)
        {
            return _db.Cars.Find(id);
        }

    }
}
