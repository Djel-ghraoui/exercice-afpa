// Age --- Ex2
let n;
let p;
    n=window.prompt("quelle est votre année de naissance ?");
    p=("18 ans");
    if (confirm("18 ans") == true)
    {
        alert("majeur");
    }   
    else {
        alert("mineur "+n +""+p);
    }