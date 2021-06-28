using Microsoft.EntityFrameworkCore.Migrations;

namespace TennisBuds.Migrations
{
    public partial class AddUserNameToChallenge : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "UserName",
                table: "Challenges",
                type: "text",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "UserName",
                table: "Challenges");
        }
    }
}
