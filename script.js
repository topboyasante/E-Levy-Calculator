function returnText(){
    let AmtSending = parseInt(document.getElementById("amountSending").value);
    let network = document.getElementById("network").value;
    let mtnCharge;
    let vfCharge;
    let eLevy;
    let amtToRecipient = AmtSending;

       if(AmtSending<=50 && network=='MTN'){
            mtnCharge = 0.38;
            eLevy = 0*AmtSending;
            totalCharge = mtnCharge+eLevy;
            document.getElementById('totalAmt').innerHTML=(`Recipient Gets GHC${amtToRecipient}, and the total charges are GHC${Math.floor(totalCharge)}.
            Hence You'd Spend GHC${Math.floor(amtToRecipient+totalCharge)}`);
       }else if(50<AmtSending<=1000 && network=='MTN'){
            mtnCharge = (0.75/100)*AmtSending;
            eLevy = (1.50/100)*AmtSending;
            totalCharge = mtnCharge+eLevy;
            document.getElementById('totalAmt').innerHTML=(`Recipient Gets GHC${amtToRecipient}, and the total charges are GHC${Math.floor(totalCharge)}.
            Hence You'd Spend GHC${Math.floor(amtToRecipient+totalCharge)}`);
       }

       if(AmtSending<=50 && network == 'VODAFONE'){
            vfCharge = 0;
            eLevy = 0*AmtSending;
            totalCharge = vfCharge+eLevy;
            document.getElementById('totalAmt').innerHTML=(`Recipient Gets GHC${amtToRecipient}, and the total charges are GHC${Math.floor(totalCharge)}.
            Hence You'd Spend GHC${Math.floor(amtToRecipient+totalCharge)}`);
       }else if(50<AmtSending<=1000 && network=='VODAFONE'){
            vfCharge = (0.75/100)*AmtSending;
            eLevy = (1.50/100)*AmtSending;
            totalCharge = vfCharge+eLevy;
            document.getElementById('totalAmt').innerHTML=(`Recipient Gets GHC${amtToRecipient}, and the total charges are GHC${Math.floor(totalCharge)}.
            Hence You'd Spend GHC${Math.floor(amtToRecipient+totalCharge)}`);
         }
      
}