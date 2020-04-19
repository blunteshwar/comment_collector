let arr=["og"];
chrome.browserAction.setIcon({path:"https://i.ibb.co/JBRmdc2/active.png"});
function fun()
{
  //console.log(arr);

  //let p = document.getElementsByClassName("_1qeIAgB0cPwnLhDF9XSiJM");
  let p = document.getElementsByClassName("_3sf33-9rVAO_v4y0pIW_CH ");
  //let y = p[1].getElementsByClassName("_2mHuuvyV9doV3zwbZPtIPG");
  
  //console.log("yi");
  let url =document.URL;
  let ul=url.split("/");
  //console.log(ul[4]);
  let subr="r/";
  subr=subr+ ul[4] ;
  n=p.length
  console.log(n);
  //console.log(p[0]);
  
  for(i=0;i<n;i++)
  {
      var arg = new Object();
      //console.log("inloop");
      //const para = document.createElement('p');
      //para.textContent = 'We hope you enjoyed the ride.';
      let div=p[i];
      //div.appendChild(para);
      //console.log(div);
      let check = div.querySelector(".Comment");
      if(check==null)
        continue;
      //let x=div.querySelector(".P8SGAKMtRxNwlmLz1zdJu").querySelector("._3tw__eCCe7j-epNCKGXUKk ").querySelector("._1S45SPAIb30fsXtEcKPSdt").querySelector("._2mHuuvyV9doV3zwbZPtIPG").querySelector("a").innerText;
      let x=div.querySelector(".P8SGAKMtRxNwlmLz1zdJu")
      if(x==null)
        continue;
      x=x.querySelector("._3tw__eCCe7j-epNCKGXUKk ");
      if(x==null)
        continue;
      x=x.querySelector("._1S45SPAIb30fsXtEcKPSdt");
      if(x==null)
        continue;
      x=x.querySelector("._2mHuuvyV9doV3zwbZPtIPG");
      if(x==null)
        continue;
      x=x.querySelector("a");
      if(x==null)
        continue;
      x=x.innerText;
      arg.username=x;
      let z=div.querySelector(".P8SGAKMtRxNwlmLz1zdJu").querySelector("._3tw__eCCe7j-epNCKGXUKk ").querySelector("._1S45SPAIb30fsXtEcKPSdt");
      
      //arg["username"]=x;
      x=div.querySelector(".P8SGAKMtRxNwlmLz1zdJu").querySelector("._3tw__eCCe7j-epNCKGXUKk ").querySelector("._1S45SPAIb30fsXtEcKPSdt").querySelector("._2ETuFsVzMBxiHia6HfJCTQ").innerText;
      x=x.split(" ");
      arg.points=x[0];
      x=div.querySelector(".P8SGAKMtRxNwlmLz1zdJu").querySelector("._3tw__eCCe7j-epNCKGXUKk ").querySelector("._3cjCphgls6DH-irkVaA0GM").querySelector("._292iotee39Lmt0MkQZ2hPV").querySelectorAll("p");
      let st="";
      //console.log(x.length);
      for(j=0;j<x.length;j++)
      {
        st= st + x[j].innerText; 
      }
      arg.text=st;
      x=div.querySelector(".P8SGAKMtRxNwlmLz1zdJu").querySelector("._3tw__eCCe7j-epNCKGXUKk ").querySelector("._1RIl585IYPW6cmNXwgRz0J").innerText;
      arg.level=x;
      arg.subreddit=subr;
      if(arr.includes(arg.text))
      {
        continue;
      }
      arr.push(arg.text);
      
      let toxic='https://i.ibb.co/vVRCMSL/toxic.png';
      let threat='https://i.ibb.co/56ksD3t/threat.png';
      let severe_toxic='https://i.ibb.co/MCZfVjv/severe-toxic.png';
      let obscene='https://i.ibb.co/PMG3kW1/obscene.png';
      let identity_hate='https://i.ibb.co/b1TN5cD/identity-hate.png';
      let insult='https://i.ibb.co/ncV2BJK/insult.png';
      
      
      let faltu=document.createElement("p");
      faltu.textContent="qw";
      faltu.style.cssText="color : #80000000";
      //let para = new Image();
     // para.src='https://i.ibb.co/vVRCMSL/toxic.png';
      //para.textContent = '  !';
      //para.style.width='9%';
      

      var data = JSON.stringify(arg);
      var xhr = new XMLHttpRequest();
      xhr.withCredentials = true;

      xhr.addEventListener("readystatechange", function() {
      if(this.readyState === 4) 
      {
        console.log(this.responseText);
        
        let res=JSON.parse(this.responseText);
        
        if(res["label"]!="clean")
        {

          //console.log(arg);
          z.appendChild(faltu);
          let para = new Image();
          let sc;
          switch(res["label"])
          {
            case "toxic":
              sc=toxic;break;
            case "threat":
              sc=threat;break;
            case "obscene":
              sc=obscene;break;
            case "severe_toxic":
              sc=severe_toxic;break;
            case "identity_hate":
              sc=identity_hate;break;
            case "insult":
              sc=insult;break;


          }
          para.src=sc;
          para.style.width='9%';

          z.appendChild(para);
        }
      }
      });

      xhr.open("POST", "https://www.haters.wtf/detect",true);
      xhr.setRequestHeader("Content-Type", "application/json");
      xhr.setRequestHeader("Content-Type", "application/json");
      xhr.withCredentials = false;
      xhr.send(data);
      

      //console.log(arg);
      
      
      //z.appendChild(para);
      //console.log(typeof(xhr.responseText));
      

      
  }
}

  


window.onload=function()
{
  fun();
}

var prev=0;
window.onscroll = function()
{
  var y=window.scrollY;
  //console.log(y);
  if(y-prev>3500)
  {
    prev=y;
    this.fun();
  }
};

