using Microsoft.EntityFrameworkCore.Migrations;

namespace TennisBuds.Migrations
{
    public partial class AddOpponentName : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "OpponentName",
                table: "Challenges",
                type: "text",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "OpponentName",
                table: "Challenges");
        }
    }
}
