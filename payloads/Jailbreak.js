export function GoldHEN() {
    window.payload_path = './payloads/GoldHEN/GoldHEN.bin';
    setTimeout(() => {
        sessionStorage.setItem('jbsuccess', 1);
        document.getElementById('jailbreak').style.display = 'flex';
        document.getElementById('loader').style.display = 'none';
        window.location.reload();
    }, 3000); // 3 seconds delay
}

export function HEN(ps4fw) {
    window.payload_path = `./payloads/HEN/HEN-${ps4fw}.bin`;
    setTimeout(() => {
        sessionStorage.setItem('jbsuccess', 1);
        document.getElementById('jailbreak').style.display = 'flex';
        document.getElementById('loader').style.display = 'none';
        window.location.reload();
    }, 3000); // 3 seconds delay
}