using System.Collections.Generic;

namespace TennisBuds.Models
{
    public class Player
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Email { get; set; }
        public string Telephone { get; set; }
        public string Court { get; set; }
        public int Zip { get; set; }
        public int Rating { get; set; }
        public List<Challenge> Challenges { get; set; }

    }
}