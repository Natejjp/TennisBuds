using Microsoft.EntityFrameworkCore.Migrations;
using Npgsql.EntityFrameworkCore.PostgreSQL.Metadata;

namespace TennisBuds.Migrations
{
    public partial class ConnectUsersAndChallenges : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Challenges_Players_PlayerId",
                table: "Challenges");

            migrationBuilder.DropTable(
                name: "Players");

            migrationBuilder.RenameColumn(
                name: "PlayerId",
                table: "Challenges",
                newName: "UserId");

            migrationBuilder.RenameIndex(
                name: "IX_Challenges_PlayerId",
                table: "Challenges",
                newName: "IX_Challenges_UserId");

            migrationBuilder.AddForeignKey(
                name: "FK_Challenges_Users_UserId",
                table: "Challenges",
                column: "UserId",
                principalTable: "Users",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Challenges_Users_UserId",
                table: "Challenges");

            migrationBuilder.RenameColumn(
                name: "UserId",
                table: "Challenges",
                newName: "PlayerId");

            migrationBuilder.RenameIndex(
                name: "IX_Challenges_UserId",
                table: "Challenges",
                newName: "IX_Challenges_PlayerId");

            migrationBuilder.CreateTable(
                name: "Players",
                columns: table => new
                {
                    Id = table.Column<int>(type: "integer", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    Court = table.Column<string>(type: "text", nullable: true),
                    Email = table.Column<string>(type: "text", nullable: true),
                    Name = table.Column<string>(type: "text", nullable: true),
                    Rating = table.Column<int>(type: "integer", nullable: false),
                    Telephone = table.Column<string>(type: "text", nullable: true),
                    Zip = table.Column<int>(type: "integer", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Players", x => x.Id);
                });

            migrationBuilder.AddForeignKey(
                name: "FK_Challenges_Players_PlayerId",
                table: "Challenges",
                column: "PlayerId",
                principalTable: "Players",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
