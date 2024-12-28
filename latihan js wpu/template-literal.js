// Data Karyawan
const dataEmployee = [
    {
        name: "Kiki Afrianto",
        position: "CEO",
        department: "Top"
    },
    {
        name: "Raniah Nurfadilah",
        position: "CTO",
        department: "Top"
    },
    {
        name: "Ilham Saputra",
        position: "IT",
        department: "IT"
    },
    {
        name: "Ericko Lim",
        position: "IT",
        department: "IT"
    },
    {
        name: "Ilham Sukardana",
        position: "IT",
        department: "IT"
    },
    {
        name: "Celine Masulo",
        position: "Admin",
        department: "Officer"
    },
    {
        name: "Frederick Islamin",
        position: "HR",
        department: "Officer"
    }
]

function del(params) {
    params.shift()
    params.shift()
    return `
    <ul>
        ${params.map(employee => `
                <li>Nama Karyawan : ${employee.name}</li>
                <li>Jabatan : ${employee.position}</li>
                <li>Departemen : ${employee.department}</li>
            `).join("")}
    </ul>`
}

console.info(dataEmployee.filter(data => data.department == "IT").length)

const show = `
    <h4>DATA KARYAWAN</h4>
    <div class="director">
        <h4>Jajaran Pimpinan</h4>
        <ul>
            <li>Nama Pimpinan : ${dataEmployee[0].name}</li>
            <li>Jabatan : ${dataEmployee[0].position}</li>
            <li>Nama Pimpinan : ${dataEmployee[1].name}</li>
            <li>Jabatan : ${dataEmployee[1].position}</li>
        </ul>
    </div>
    <div class="employee">
        <h4>Jajaran Karyawan</h4>
        ${del(dataEmployee)}
    </div>
    <div class="qtyEmployee">
        <p>Jumlah Karyawan : ${dataEmployee.length}</p>
    </div>
    <div class="itEmployee">
        <p>Jumlah Karyawan Dept. IT : ${dataEmployee.filter(data => data.department == "IT").length}</p>
    </div>
    <div class="officer">
        <p>Jumlah Karyawan Dept. Officer : ${dataEmployee.filter(data => data.department == "Officer").length}</p>
    </div>
    
`




document.body.innerHTML = show
console.info(show)

