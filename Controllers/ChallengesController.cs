using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using TennisBuds.Models;

namespace TennisBuds.Controllers
{
    // All of these routes will be at the base URL:     /api/Challenges
    // That is what "api/[controller]" means below. It uses the name of the controller
    // in this case ChallengesController to determine the URL
    [Route("api/[controller]")]
    [ApiController]
    public class ChallengesController : ControllerBase
    {
        // This is the variable you use to have access to your database
        private readonly DatabaseContext _context;

        // Constructor that recives a reference to your database context
        // and stores it in _context for you to use in your API methods
        public ChallengesController(DatabaseContext context)
        {
            _context = context;
        }

        // GET: api/Challenges
        //
        // Returns a list of all your Challenges
        //
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Challenge>>> GetChallenges()
        {
            // Uses the database context in `_context` to request all of the Challenges, sort
            // them by row id and return them as a JSON array.
            return await _context.Challenges.OrderBy(row => row.Id).ToListAsync();
        }

        // GET: api/Challenges/5
        //
        // Fetches and returns a specific challenge by finding it by id. The id is specified in the
        // URL. In the sample URL above it is the `5`.  The "{id}" in the [HttpGet("{id}")] is what tells dotnet
        // to grab the id from the URL. It is then made available to us as the `id` argument to the method.
        //
        [HttpGet("{id}")]
        public async Task<ActionResult<Challenge>> GetChallenge(int id)
        {
            // Find the challenge in the database using `FindAsync` to look it up by id
            var challenge = await _context.Challenges.FindAsync(id);

            // If we didn't find anything, we receive a `null` in return
            if (challenge == null)
            {
                // Return a `404` response to the client indicating we could not find a challenge with this id
                return NotFound();
            }

            //  Return the challenge as a JSON object.
            return challenge;
        }

        // PUT: api/Challenges/5
        //
        // Update an individual challenge with the requested id. The id is specified in the URL
        // In the sample URL above it is the `5`. The "{id} in the [HttpPut("{id}")] is what tells dotnet
        // to grab the id from the URL. It is then made available to us as the `id` argument to the method.
        //
        // In addition the `body` of the request is parsed and then made available to us as a Challenge
        // variable named challenge. The controller matches the keys of the JSON object the client
        // supplies to the names of the attributes of our Challenge POCO class. This represents the
        // new values for the record.
        //
        [HttpPut("{id}")]
        public async Task<IActionResult> PutChallenge(int id, Challenge challenge)
        {
            // If the ID in the URL does not match the ID in the supplied request body, return a bad request
            if (id != challenge.Id)
            {
                return BadRequest();
            }

            // Tell the database to consider everything in challenge to be _updated_ values. When
            // the save happens the database will _replace_ the values in the database with the ones from challenge
            _context.Entry(challenge).State = EntityState.Modified;

            try
            {
                // Try to save these changes.
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                // Ooops, looks like there was an error, so check to see if the record we were
                // updating no longer exists.
                if (!ChallengeExists(id))
                {
                    // If the record we tried to update was already deleted by someone else,
                    // return a `404` not found
                    return NotFound();
                }
                else
                {
                    // Otherwise throw the error back, which will cause the request to fail
                    // and generate an error to the client.
                    throw;
                }
            }

            // Return a copy of the updated data
            return Ok(challenge);
        }

        // POST: api/Challenges
        //
        // Creates a new challenge in the database.
        //
        // The `body` of the request is parsed and then made available to us as a Challenge
        // variable named challenge. The controller matches the keys of the JSON object the client
        // supplies to the names of the attributes of our Challenge POCO class. This represents the
        // new values for the record.
        //
        [HttpPost]
        public async Task<ActionResult<Challenge>> PostChallenge(Challenge challenge)
        {
            // Indicate to the database context we want to add this new record
            _context.Challenges.Add(challenge);
            await _context.SaveChangesAsync();

            // Return a response that indicates the object was created (status code `201`) and some additional
            // headers with details of the newly created object.
            return CreatedAtAction("GetChallenge", new { id = challenge.Id }, challenge);
        }

        // DELETE: api/Challenges/5
        //
        // Deletes an individual challenge with the requested id. The id is specified in the URL
        // In the sample URL above it is the `5`. The "{id} in the [HttpDelete("{id}")] is what tells dotnet
        // to grab the id from the URL. It is then made available to us as the `id` argument to the method.
        //
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteChallenge(int id)
        {
            // Find this challenge by looking for the specific id
            var challenge = await _context.Challenges.FindAsync(id);
            if (challenge == null)
            {
                // There wasn't a challenge with that id so return a `404` not found
                return NotFound();
            }

            // Tell the database we want to remove this record
            _context.Challenges.Remove(challenge);

            // Tell the database to perform the deletion
            await _context.SaveChangesAsync();

            // Return a copy of the deleted data
            return Ok(challenge);
        }

        // Private helper method that looks up an existing challenge by the supplied id
        private bool ChallengeExists(int id)
        {
            return _context.Challenges.Any(challenge => challenge.Id == id);
        }
    }
}
