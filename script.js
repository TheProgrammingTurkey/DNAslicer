let x = ""

let restrictionSite = ("A ATCG")
const restrictionParts = restrictionSite.split(" ")

let dna = ("AATCGGGCTTACACCGTAATCGGGTACACTGATCTGG")
const base = dna.split("")
for(let i = 0; i < dna.length; i++){

    //checking to see if the restriction enzyme's recognition site matches
    if (x.includes(restrictionSite.split(' ').join(''))){
        
        //finished fragment
        x = x.slice(0, 0-restrictionParts[1].length)
        console.log(x)
        console.log(x.length)
        
        // starting loop back at the site
        i-=restrictionParts[1].length

        //resetting the DNA fragment 
        x=""
    }
    //adding on to DNA fragment
    x += base[i]
}
console.log(x)
console.log(x.length)