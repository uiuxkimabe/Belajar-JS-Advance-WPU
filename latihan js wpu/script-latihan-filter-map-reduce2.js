const roomAvailable = 80 // Jumlah Kamar Yang Tersedia

// Room Occupancy = Room Sold / Room Available


// Menseleksi Cluster
const cluster = Array.from(document.querySelectorAll('[data-price]'))
// Mencari Total Penjualan Room By OTA
const segmenOTA = cluster.filter(segmenQty => segmenQty.textContent.includes("OTA")) // Jumlah Segmen Tamu OTA
    .map(otaPrice => otaPrice.dataset.price)
    .map(convertPrice => {
        const price = parseFloat(convertPrice) * 1000
        return price
    })
    .reduce((summary, currentPrice) => summary + currentPrice)


// Mencari Total Penjualan Room By Walk In
const segmenWalkIn = cluster.filter(totalSegmen => totalSegmen.textContent.includes("Walk In")) // Jumlah Segmen Tamu Walk In
    .map(totalPrice => totalPrice.dataset.price)
    .map(convertPrice => {
        const price = parseFloat(convertPrice) * 1000
        return price
    })
    .reduce((summary, currentPrice) => summary + currentPrice)

// Mencari Total Penjualan Berdasarkan Cluster WalkIn
// Rose Walk In
const roseWi = cluster.filter(roseTotalWi => roseTotalWi.textContent.includes("Rose | Walk In"))
    .map(priceRoseWi => priceRoseWi.dataset.price)
    .map(convertPriceWi => {
        const price = parseFloat(convertPriceWi) * 1000
        return price
    })
    .reduce((summary, currentPrice) => summary + currentPrice)

// Rose OTA
const roseOTA = cluster.filter(roseTotalWi => roseTotalWi.textContent.includes("Rose | OTA"))
    .map(priceRoseWi => priceRoseWi.dataset.price)
    .map(convertPriceWi => {
        const price = parseFloat(convertPriceWi) * 1000
        return price
    })
    .reduce((summary, currentPrice) => summary + currentPrice)

// Bougenville Walk In
const bougenvilleWi = cluster.filter(bougenvilleTotalWi => bougenvilleTotalWi.textContent.includes("Bougenville | Walk In"))
    .map(pricebougenvilleWi => pricebougenvilleWi.dataset.price)
    .map(convertPriceWi => {
        const price = parseFloat(convertPriceWi) * 1000
        return price
    })
    .reduce((summary, currentPrice) => summary + currentPrice)

// bougenville OTA
const bougenvilleOTA = cluster.filter(bougenvilleTotalWi => bougenvilleTotalWi.textContent.includes("Bougenville | OTA"))
    .map(pricebougenvilleWi => pricebougenvilleWi.dataset.price)
    .map(convertPriceWi => {
        const price = parseFloat(convertPriceWi) * 1000
        return price
    })
    .reduce((summary, currentPrice) => summary + currentPrice)

// Catalya Walk In
const catalyaWi = cluster.filter(catalyaTotalWi => catalyaTotalWi.textContent.includes("Catalya | Walk In"))
    .map(pricecatalyaWi => pricecatalyaWi.dataset.price)
    .map(convertPriceWi => {
        const price = parseFloat(convertPriceWi) * 1000
        return price
    })
    .reduce((summary, currentPrice) => summary + currentPrice)

// Catalya OTA
const catalyaOTA = cluster.filter(catalyaTotalWi => catalyaTotalWi.textContent.includes("Catalya | OTA"))
    .map(pricecatalyaWi => pricecatalyaWi.dataset.price)
    .map(convertPriceWi => {
        const price = parseFloat(convertPriceWi) * 1000
        return price
    })
    .reduce((summary, currentPrice) => summary + currentPrice)

// Menampilkan Data DSR
const showData = document.querySelectorAll('ol li span')
// Room Sold
const result = segmenOTA + segmenWalkIn
showData[0].textContent = result.toLocaleString('id-ID')
// Room Occupancy
showData[1].textContent = (`${cluster.length / roomAvailable * 100} %`)
// Room By OTA
showData[2].textContent = segmenOTA.toLocaleString('id-ID')
// Room By Walk In
showData[3].textContent = segmenWalkIn.toLocaleString('id-ID')
// Room By Cluster Rose Walk In
showData[4].textContent = roseWi.toLocaleString('id-ID')
// Room By Cluster Rose OTA
showData[5].textContent = roseOTA.toLocaleString('id-ID')
// Room By Cluster Bougenville Walk In
showData[6].textContent = bougenvilleWi.toLocaleString('id-ID')
// Room By Cluster Bougenville OTA
showData[7].textContent = bougenvilleOTA.toLocaleString('id-ID')
// Room By Cluster Catalya Walk In
showData[8].textContent = catalyaWi.toLocaleString('id-ID')
// Room By Cluster Catalya OTA
showData[9].textContent = catalyaOTA.toLocaleString('id-ID')
