const zp = +(prompt('Сколько вы получаете?'))
    if (zp<=15000) {
        console.log(`С ${zp} налог составит ${zp * 0.13}`)
    } else if (zp>=15000 && zp<=50000){
        console.log(`С ${zp} налог составит ${zp * 0.2}`)
    } else {
        console.log(`С ${zp} налог составит ${zp * 0.3}`)
    }