﻿// <auto-generated />
using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using WarehouseAPI.Data;

#nullable disable

namespace WarehouseAPI.Migrations
{
    [DbContext(typeof(DataContext))]
    partial class DataContextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "6.0.10")
                .HasAnnotation("Relational:MaxIdentifierLength", 128);

            SqlServerModelBuilderExtensions.UseIdentityColumns(modelBuilder, 1L, 1);

            modelBuilder.Entity("WarehouseAPI.Domain.Delivery", b =>
                {
                    b.Property<Guid>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("uniqueidentifier");

                    b.Property<int?>("WarehouseId")
                        .HasColumnType("int");

                    b.Property<DateTime>("dateOfDelivery")
                        .HasColumnType("datetime2");

                    b.Property<int>("deliveryMass")
                        .HasColumnType("int");

                    b.Property<int>("placementTime")
                        .HasColumnType("int");

                    b.Property<int>("receiveTime")
                        .HasColumnType("int");

                    b.HasKey("Id");

                    b.HasIndex("WarehouseId");

                    b.ToTable("Deliveries");
                });

            modelBuilder.Entity("WarehouseAPI.Domain.Warehouse", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Id"), 1L, 1);

                    b.Property<string>("active")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("address")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("coOrdinates")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("name")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("Id");

                    b.ToTable("Warehouses");
                });

            modelBuilder.Entity("WarehouseAPI.Domain.User", b =>
            {
                b.Property<Guid>("domainId")
                    .ValueGeneratedOnAdd()
                    .HasColumnType("uniqueidentifier");

                b.Property<int>("id")
                    .ValueGeneratedOnAdd()
                    .HasColumnType("int");

                b.Property<string>("userName")
                    .IsRequired()
                    .HasColumnType("nvarchar(20)");

                b.Property<string>("typeOfManager")
                    .IsRequired()
                    .HasColumnType("nvarchar(20)");

                b.Property<string>("phoneNumber")
                    .IsRequired()
                    .HasColumnType("nvarchar(9)");

                b.Property<string>("email")
                   .IsRequired()
                   .HasColumnType("nvarchar(25)");

                b.Property<string>("password")
                   .IsRequired()
                   .HasColumnType("nvarchar(20)");


                b.HasKey("domainId");

                b.ToTable("Users");
            });
#pragma warning restore 612, 618
        }
    }
}