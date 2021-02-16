using Microsoft.EntityFrameworkCore;
using ProjetoFinal.Dados.Entidades;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ProjetoFinal.Dados
{
    public class DataContext : DbContext
    {

        public DbSet<Reservas> Reservas { get; set; }


        public DataContext(DbContextOptions<DataContext> options) : base(options)
        {


        }

    }
}
