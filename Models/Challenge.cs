using System;

namespace TennisBuds.Models
{
    public class Challenge
    {
        public int Id { get; set; }
        public string Match { get; set; }
        public string Format { get; set; }
        public string Date { get; set; }
        public string Time { get; set; }
        public string Court { get; set; }
        public DateTime CreatedAt { get; private set; } = DateTime.Now;
        public string Opponent { get; set; }
        public int UserId { get; set; }
        public string Score { get; set; }
        public string Outcome { get; set; }

    }
}