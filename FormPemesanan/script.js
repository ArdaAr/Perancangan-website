function tambahData() {
    var nama = document.getElementById('nama').value;
    var email = document.getElementById('email').value;
    var noHp = document.getElementById('noHP').value;
    var alamat = document.getElementById('alamat').value;
    var kodePos = document.getElementById('kodepos').value;
    var jenis = document.forms['tabelPesanan']['JenisPesanan'].value;
    var motif = document.forms['tabelPesanan']['Motif'].value;
    var ketMotif = document.getElementById('keterangan').value;
    var jumlah = document.getElementById('pesanan').value;

    var table = document.getElementById('tabelKeterangan');
    var row = table.insertRow(1);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    var cell5 = row.insertCell(4);
    var cell6 = row.insertCell(5);
    var cell7 = row.insertCell(6);
    var cell8 = row.insertCell(7);
    var cell9 = row.insertCell(8);

    cell1.innerHTML = nama;
    cell2.innerHTML = email;
    cell3.innerHTML = noHp;
    cell4.innerHTML = alamat;
    cell5.innerHTML = kodePos;
    cell6.innerHTML = jenis;
    cell7.innerHTML = motif;
    cell8.innerHTML = ketMotif;
    cell9.innerHTML = jumlah;

    alert("Data Pesanan Berhasil di masukkan")

}