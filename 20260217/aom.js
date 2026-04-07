 function btnMinus_onclick(){
        var fn=0, sn=0, res=0;

 function utofloat(s){
        n=parseFloat(s);
        n=isNaN(n) ? 0 : n;
        return n;
 }

        fn=utofloat(numfn.value);
        sn=utofloat(numsn.value);

        res=fn-sn;
        numres.value=res;
}