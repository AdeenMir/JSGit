
function generatePassword(length,includelowercase,includenumbers,includeuppercase,includesymbols) {
    
        const lowercasechars="abcdefghijklmnopqrstuvwxyz";
        const uppercasechars="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        const numberchars="0123456789";
        const symbolchars="!@#$%^&*-+";

        let allowedchars="";
        let password="";

        allowedchars+=includelowercase ? lowercasechars:"";
        allowedchars+=includeuppercase ? uppercasechars:"";
        allowedchars+=includenumbers ? numberchars:"";
        allowedchars+=includesymbols ? symbolchars:"";

        if(length<=0){
            return `(password length must be atleast one)`
        }
        if(allowedchars.length===0){
            return `(at least one set of characters needs tobe selected)`;
        }

        for(let i=0;i<length;i++){
            const randomindex=Math.floor(Math.random()*allowedchars.length)
            password+=allowedchars[randomindex]
        }
        return password;
}

const passwordlength=10;
const includelowercase=false;
const includeuppercase=false;
const includesymbols=false;
const includenumbers=false;

const password=generatePassword(passwordlength,includelowercase,includenumbers,includeuppercase,includesymbols) 
console.log(`generate password: ${password}`);