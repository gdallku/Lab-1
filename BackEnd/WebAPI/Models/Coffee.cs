﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebAPI.Models
{
    public class Coffee
    {
        public int CoffeeId { get; set; }
        public string CoffeeName { get; set; }
        public decimal Price { get; set; }
    }
}
