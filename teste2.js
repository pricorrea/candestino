//2 - crie um algoritmo que converte dias em horas, quando recebe um número de dias.

function converterDiaEmHoras(dias) {
    const horas = dias * 24;
    return `${horas} horas`;
  }
  console.log(converterDiaEmHoras(365))