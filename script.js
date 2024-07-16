document.addEventListener('DOMContentLoaded', function(){
    const khodam = ["tutup botol", "nasi liwet", "nyi Roro kidul", "Prabu Siliwangi", "wadah beas", 'kuntilanak gyat', 'macan putih mewing', 'brajamusti','genderowo Sigma', 'pocong skibidi', 'buaya buntung',]
    const khodamNama = document.getElementById('khodamNama')
    
    const submitBtn = document.getElementById('submit')

    submitBtn.addEventListener('click', (ev)=>{
        ev.preventDefault()
        const generateKhodam = Math.floor(Math.random() * khodam.length)
        const ValueKhodamNama = khodamNama.value
        const alertNullColumn = document.getElementById('alert')
        const form = document.getElementById('formId')
        const par = document.getElementById('khodamMessage')
        const title = document.getElementById('khodamName')
        const displayKhodam = document.getElementById('displayKhodam')
        

            if(ValueKhodamNama !== ""){
                form.setAttribute('hidden', 'true')
                setTimeout(()=>{
                    title.innerText = khodam[generateKhodam]
                    par.removeAttribute('id')
                    par.innerText ='Khodam anda adalah: '
                }, 4000)
                
            displayKhodam.removeAttribute('hidden')
            par.innerText = 'tunggu sebentar gess!'
            }else{
                alertNullColumn.innerText = "kolom tidak boleh kosong"
            }
        khodamNama.value = ''

    })
    

})
