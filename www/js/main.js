function update() {
  d = document.all
  pice = d.pice.value
  posuda = d.posuda.value
  komada = d.komada.value
  tezina = d.tezina.value
  trajanje = d.trajanje.value
  prestao = d.prestao.value
  pol = d.pol.value

  rezultat = (pice * posuda * komada / 100 / tezina / pol) - (trajanje * .15) - (prestao * .15)
  rezultat = (rezultat < 0) ? 0 : Math.round(rezultat * 100) / 100
  document.getElementById('rezultat').innerText = rezultat

  if (rezultat < 0.2) savet = "Potpuno si trezan."
  else if (rezultat <= 0.50) savet = "Umereno pijanstvo, još nisi za vožnju."
  else if (rezultat <= 1.19) savet = "Srednje pijanstvo, ozbiljna kazna, bolje uzmi taksi."
  else if (rezultat <= 1.6) savet = "Teško pijanstvo, ni ne pomišljaj sesti za volan."
  else if (rezultat <= 2) savet = "Veoma teško pijanstvo, ni ne pomišljaj sesti za volan."
  else if (rezultat < 6) savet = "Potpuno pijanstvo, ne možes gledati na oči, a kamoli voziti."
  else savet = "Ne pravi se važan, toliko ne možeš popiti."
  document.getElementById('savet').innerText = savet
  navigator.vibrate(2000)
}

var izbori = document.querySelectorAll('select')
for (var i = 0; i < izbori.length; i++) izbori[i].addEventListener('change', update)

document.addEventListener('deviceready', update)
