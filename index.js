#!/usr/bin/env node
class Fasulye {
    next() {
        console.log("Switching to the new version...")
    }
}

if (require.main === module) {
    const fasulye = new Fasulye();
    fasulye.next()
}

module.exports=Fasulye;