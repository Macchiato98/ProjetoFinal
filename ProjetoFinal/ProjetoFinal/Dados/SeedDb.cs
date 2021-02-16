using ProjetoFinal.Dados.Entidades;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ProjetoFinal.Dados
{
    public class SeedDb
    {
        private readonly DataContext context;

        public SeedDb(DataContext context)
        {
            this.context = context;
        }

        public async Task SeedAsync()
        {
            await this.context.Database.EnsureCreatedAsync();

            if (!this.context.Reservas.Any())
            {
                this.AddReservas("Ricardo", "ricardo@gmail.com", "96583498", 2);
                this.AddReservas("Felipe", "felipe@gmail.com", "965516250", 3);
                this.AddReservas("João", "joao@gmail.com", "93564878", 5);
                await this.context.SaveChangesAsync();
            }
        }

        private void AddReservas(string name, string email, string tele, int reserva)
        {
            this.context.Reservas.Add(new Reservas
            {
                Nome = name,
                Email = email,
                Telemovel = tele,
                Reservar = reserva
            });
        }

    }
}
