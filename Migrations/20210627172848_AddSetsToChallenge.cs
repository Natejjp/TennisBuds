using Microsoft.EntityFrameworkCore.Migrations;

namespace TennisBuds.Migrations
{
    public partial class AddSetsToChallenge : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "Score",
                table: "Challenges",
                newName: "ThirdSet");

            migrationBuilder.AddColumn<string>(
                name: "FifthSet",
                table: "Challenges",
                type: "text",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "FirstSet",
                table: "Challenges",
                type: "text",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "FourthSet",
                table: "Challenges",
                type: "text",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "SecondSet",
                table: "Challenges",
                type: "text",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "FifthSet",
                table: "Challenges");

            migrationBuilder.DropColumn(
                name: "FirstSet",
                table: "Challenges");

            migrationBuilder.DropColumn(
                name: "FourthSet",
                table: "Challenges");

            migrationBuilder.DropColumn(
                name: "SecondSet",
                table: "Challenges");

            migrationBuilder.RenameColumn(
                name: "ThirdSet",
                table: "Challenges",
                newName: "Score");
        }
    }
}
