using Microsoft.EntityFrameworkCore.Migrations;

namespace TennisBuds.Migrations
{
    public partial class AddSearchForOpponentId : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "Opponent",
                table: "Challenges",
                newName: "OpponentId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "OpponentId",
                table: "Challenges",
                newName: "Opponent");
        }
    }
}
