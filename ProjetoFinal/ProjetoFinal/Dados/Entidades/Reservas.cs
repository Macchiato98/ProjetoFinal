using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace ProjetoFinal.Dados.Entidades
{
    public class Reservas
    {
        public int Id { get; set; }

        [Required]
        public string Nome { get; set; }

        [Required]
        public string Email { get; set; }

        [Required]
        [Display(Name = "O seu número de telemóvel")]
        public string Telemovel { get; set; }

        [Required]
        [Display(Name = "Quantos bilhetes quer reservar?")]
        public int Reservar { get; set; }

    }
}
