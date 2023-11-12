function getMonthName(month) {
    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September","October", "November", "December"];
    return monthNames[month];
}

function getMonthNames(start, end){
    let monthNames = [];
    if (start > end) {
        for (let i = start; i <= end+12; i++) {
            if (i > 11) {
                monthNames.push(getMonthName(i-12));
            }else monthNames.push(getMonthName(i));
        }
    }else{
        for(let i = start; i <= end; i++){
            monthNames.push(getMonthName(i));
        }
    }
    
    return monthNames;
}

function formatRupiah(angka){
    angka = angka.toString();
	var number_string = angka.replace(/[^,\d]/g, '').toString(),
	split   		= number_string.split(','),
	sisa     		= split[0].length % 3,
	rupiah     		= split[0].substr(0, sisa),
	ribuan     		= split[0].substr(sisa).match(/\d{3}/gi);
	if(ribuan){
		separator = sisa ? '.' : '';
		rupiah += separator + ribuan.join('.');
	}
 
	rupiah = split[1] != undefined ? rupiah + ',' + split[1] : rupiah;
	return 'Rp. ' + rupiah;
}