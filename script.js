document.addEventListener('DOMContentLoaded', function(){
    const khodam = ["tutup botol", "nasi liwet", "nyi Roro kidul", "Prabu Siliwangi", "wadah beas", 'tutup kastrol', 'macan putih', 'brajamusti']
    const khodamNama = document.getElementById('khodamNama')
    
    const submitBtn = document.getElementById('submit')

    submitBtn.addEventListener('click', (ev)=>{
        ev.preventDefault()
        const generateKhodam = Math.floor(Math.random() * khodam.length)
        const ValueKhodamNama = khodamNama.value
        const alertNullColumn = document.getElementById('alert')
        const form = document.getElementById('formId')
        
            if(ValueKhodamNama !== ""){
                form.setAttribute('hidden', 'true')
                setTimeout(()=>{
                    // alert(`Khodam ${ValueKhodamNama} adalah: ${khodam[generateKhodam]}`)

                }, 2000)
            alert('tunggu sbntar ya ges!')
            }else{
                // alert('kolom tidak boleh kosong')
                alertNullColumn.innerText = "kolom tidak boleh kosong"
            }
        khodamNama.value = ''

    })
    

})
