function work(){
    let x = ""

    let restrictionSite = String(document.getElementById("site").value)
    const restrictionParts = restrictionSite.split(" ")

    let dna = String(document.getElementById("dna").value)
    const base = dna.split("")

    for(let i = 0; i < dna.length; i++){

        //checking to see if the restriction enzyme's recognition site matches
        if (x.includes(restrictionSite.split(' ').join(''))){
        
            //finished fragment
            x = x.slice(0, 0-restrictionParts[1].length)
            document.getElementById("fragments").innerHTML += (x + "<br />")
            document.getElementById("sizes").innerHTML += (x.length + "<br />")
        
            // starting loop back at the site
            i-=restrictionParts[1].length

            //resetting the DNA fragment 
            x=""
        }
        //adding on to DNA fragment
        x += base[i]
    }
    document.getElementById("fragments").innerHTML += (x + "<br />")
    document.getElementById("sizes").innerHTML += (x.length + "<br />")
}