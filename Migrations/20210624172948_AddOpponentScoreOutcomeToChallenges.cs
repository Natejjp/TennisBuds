using Microsoft.EntityFrameworkCore.Migrations;

namespace TennisBuds.Migrations
{
    public partial class AddOpponentScoreOutcomeToChallenges : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "Opponent",
                table: "Challenges",
                type: "text",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Outcome",
                table: "Challenges",
                type: "text",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Score",
                table: "Challenges",
                type: "text",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Opponent",
                table: "Challenges");

            migrationBuilder.DropColumn(
                name: "Outcome",
                table: "Challenges");

            migrationBuilder.DropColumn(
                name: "Score",
                table: "Challenges");
        }
    }
}
