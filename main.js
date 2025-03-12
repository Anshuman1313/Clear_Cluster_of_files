import e from "express";
import fs from "fs"
import path from "path"

const folderPath = "\Clutter";

let a = fs.readdirSync(folderPath);

// console.log(a)
a.forEach(e => {
    // console.log(e)
    let re = /(?:\.([^.]+))?$/;
    let ext = re.exec(e)[1];
    console.log(ext)
    // use stackoverflow for moving files from one folder to another 
    // https://stackoverflow.com/questions/52827683/multiple-files-move-into-another-directory-in-nodejs/52828147#:~:text=You%20can%20simply%20achieve%20this,to%20move(rename)%20them.
    if (ext == "docx") {
        let fileName = e;
        // let absolutePath = path.resolve(fileName);
        // if (!fs.existsSync(absolutePath)) {
        //     // Do something
        // }
        const folderName = 'docx';
        try {
            if (!fs.existsSync(folderName)) {
                fs.mkdirSync(folderName);
                let file = e;
                fs.rename('./Clutter/' + file, `./docx/` + file, function(err) {
                    if (err) throw err;
                    console.log('Move complete.');
                });

            }
            else{
                let file = e;
                fs.rename('./Clutter/' + file, `./docx/` + file, function(err) {
                    if (err) throw err;
                    console.log('Move complete.');
                });

            }
        } catch (err) {
            console.error(err);
        }

    }
    if (ext == "pdf") {
        let fileName = e;
        // let absolutePath = path.resolve(fileName);
        // if (!fs.existsSync(absolutePath)) {
        //     // Do something
        // }
        const folderName = 'pdf';
        try {
            if (!fs.existsSync(folderName)) {
                fs.mkdirSync(folderName);
                let file = e;
                fs.rename('./Clutter/' + file, `./pdf/` + file, function(err) {
                    if (err) throw err;
                    console.log('Move complete.');
                });

            }
            else{
                let file = e;
                fs.rename('./Clutter/' + file, `./pdf/` + file, function(err) {
                    if (err) throw err;
                    console.log('Move complete.');
                });

            }
        } catch (err) {
            console.error(err);
        }

    }
    if (ext == "png") {
        let fileName = e;
        // let absolutePath = path.resolve(fileName);
        // if (!fs.existsSync(absolutePath)) {
        //     // Do something
        // }
        const folderName = 'png';
        try {
            if (!fs.existsSync(folderName)) {
                fs.mkdirSync(folderName);
                let file = e;
                fs.rename('./Clutter/' + file, `./png/` + file, function(err) {
                    if (err) throw err;
                    console.log('Move complete.');
                });

            }
            else{
                let file = e;
                fs.rename('./Clutter/' + file, `./png/` + file, function(err) {
                    if (err) throw err;
                    console.log('Move complete.');
                });

            }
        } catch (err) {
            console.error(err);
        }

    }
    


});














