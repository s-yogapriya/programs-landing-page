function btnFind_onclick(){ 
    var cuu100=0, cuu200=0, cuu400=0, cua400=0, cuau100=0, cuau200=0, cuau400=0, cuaa400=0, tia=0, np=0, nr=0;

        var pr=uToInt(numpr.value);
        var cr=uToInt(numcr.value);

        if(pr<=cr && pr>=0 && cr>=0){    
        nr=cr-pr;
        
        numpr.value=pr;
        numcr.value=cr;
        numnr.value=nr;

        if(cmbbxcc.value=="Agriculture"){
        var puau100=0.50, puau200=1.00, puau400=1.50, puaa400=2.00, mc=12.50, tip=1.00;
            if(nr>400){
                cuu100=100-0;
                cuu200=200-100;
                cuu400=400-200;
                cua400=nr-400
            }
            else if(nr>200){
                cuu100=100-0;
                cuu200=200-100;
                cuu400=nr-200;
            }
            else if(nr>100){
                cuu100=100-0;
                cuu200=nr-100;
            }
             else if(nr<100){
                cuu100=100-nr;                   
            }

        }

        else if(cmbbxcc.value=="Domestic"){
        var puau100=1.00, puau200=1.50, puau400=2.00, puaa400=2.50, mc=25.00, tip=1.50;
            if(nr>400){
                cuu100=100-0;
                cuu200=200-100;
                cuu400=400-200;
                cua400=nr-400
            }
            else if(nr>200){
                cuu100=100-0;
                cuu200=200-100;
                cuu400=nr-200;
            }
            else if(nr>100){
                cuu100=100-0;
                cuu200=nr-100;
            }
             else if(nr<100){
                cuu100=100-nr;                   
            }
        }

        else if(cmbbxcc.value=="Commercial"){
        var puau100=2.00, puau200=3.00, puau400=4.00, puaa400=5.00, mc=200.00, tip=2.00;
            if(nr>400){
                cuu100=100-0;
                cuu200=200-100;
                cuu400=400-200;
                cua400=nr-400
            }
            else if(nr>200){
                cuu100=100-0;
                cuu200=200-100;
                cuu400=nr-200;
            }
            else if(nr>100){
                cuu100=100-0;
                cuu200=nr-100;
            }
             else if(nr<100){
                cuu100=100-nr;                   
            }
        }
                numcuu100.value=cuu100.toFixed(2);
                numcuu200.value=cuu200.toFixed(2);
                numcuu400.value=cuu400.toFixed(2);
                numcua400.value=cua400.toFixed(2);

                numpuau100.value=puau100.toFixed(2);
                numpuau200.value=puau200.toFixed(2);
                numpuau400.value=puau400.toFixed(2);
                numpuaa400.value=puaa400.toFixed(2);

                cuau100=puau100*cuu100;
                numcuau100.value=cuau100.toFixed(2);
                cuau200=puau200*cuu200;
                numcuau200.value=cuau200.toFixed(2) ;
                cuau400=puau400*cuu400;
                numcuau400.value=cuau400.toFixed(2);
                cuaa400=puaa400*cua400;
                numcuaa400.value=cuaa400.toFixed(2);

                numtip.value=tip.toFixed(2);
                nummc.value=mc.toFixed(2);
                if (nr>400){
                        tia=tip/100*cuaa400;
                    }

                numtia.value=tia.toFixed(2);
                np=cuau100+cuau200+cuau400+cuaa400+mc+tia;
                numnp.value=np.toFixed(2);
        }
        else{
                numnr.value=nr;
                numcuu100.value=cuu100;
                numcuu200.value=cuu200;
                numcuu400.value=cuu400;
                numcua400.value=cua400;

                numpuau100.value=0;
                numpuau200.value=0;
                numpuau400.value=0;
                numpuaa400.value=0;

                numcuau100.value=0;
                numcuau200.value=0;
                numcuau400.value=0;
                numcuaa400.value=0;

                numtip.value=0;
                nummc.value=0;
                numtia.value=0;
                numnp.value=0;
        }      
       
   }