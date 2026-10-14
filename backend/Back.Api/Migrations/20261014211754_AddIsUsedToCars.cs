using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Back.Api.Migrations
{
    /// <inheritdoc />
    public partial class AddIsUsedToCars : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<bool>(
                name: "IsUsed",
                table: "Cars",
                type: "boolean",
                nullable: false,
                defaultValue: false);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "IsUsed",
                table: "Cars");
        }
    }
}
