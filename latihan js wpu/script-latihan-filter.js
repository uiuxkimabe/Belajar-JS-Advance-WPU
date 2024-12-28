// Mengambil element video
// Array.form() fungsinya u/ mengubah nodelist menjadi array
// nodelist tidak sama dengan array jadi tidak tdk bisa pakai filter,map,reduce
const allVideo = Array.from(document.querySelectorAll('[data-duration'))

// Pilih hanya yang JS Lanjutan
let jsLanjutan = allVideo.filter(video => video.textContent.includes("JS Lanjutan"))
// textContent.includes cara untuk mendeteksi konten tulisan tertentu

// Mengambil Durasi masing2 video
// di javascript ada method untuk mengambil dataset pada attribut sebuah element
// >>> Lanjutan yang atas pakai method chaining
    .map(duration => duration.dataset.duration)
    

// Ubah durasi menjadi float, lalu ubah menit menjadi detik
    .map(time => {
        // 10:30  -> [10, 30] split
        const timeSplit = time.split(":").map(timePart => parseFloat(timePart))
        return timeSplit[0] * 60 + timeSplit[1]
    })

// Jumlahkan semua detik nya
    .reduce((sum,times) => sum + times)

// Ubah format jadi jam, menit, detik
const hour = Math.floor(jsLanjutan / 3600)
let sisaDetik = jsLanjutan - hour * 3600
const minute = Math.floor(sisaDetik / 60)
const second = sisaDetik - minute * 60

// Simpan di DOM
const jumlahVideo = document.querySelector('.jumlah-video')
const totalDurasi = document.querySelector('.total-durasi')
const totalVideo = allVideo.filter(video => video.textContent.includes("JS Lanjutan")).length
totalDurasi.textContent = String(`${hour} Jam ${minute} Menit ${second} Detik`)
jumlahVideo.textContent = `${totalVideo} Video.`


console.info(jsLanjutan)