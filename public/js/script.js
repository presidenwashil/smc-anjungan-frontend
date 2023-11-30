function refreshPage() {
    setTimeout(function () {
        location.reload(true); // Reload halaman dengan membersihkan cache
    }, 40000); // Waktu dalam milidetik (60 detik)
    }
    document.addEventListener('DOMContentLoaded', function () {
refreshPage();
});

setInterval(function () {
    updateDateTime();
    refreshPage();
}, 40000);