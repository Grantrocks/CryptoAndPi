var threads = 1;
var gustav;
var mining = "false";
var wallet = localStorage.wallet || "47HqXyfRx6HAhazGSaDp5p3VFyNMtDviQCPo1xHn5hVgezGY1eLiNW4bep9wmi2gKrH8BWXeGH9bYPU9NKcbehRqJSdKWLc";
var mining_status;
var lastrate = 0;
var totalHashes = 0;
var totalHashes2 = 0;
var acceptedHashes = 0;
var hashesPerSecond = 0;
document.getElementById("wallet").value = wallet;
function startLogs(){
  mining_status = setInterval(function(){
    lastrate = ((totalhashes) * 0.5 + lastrate * 0.5);
	  totalHashes = totalhashes + totalHashes
    hashesPerSecond = Math.round(lastrate);
	  totalHashes2 = totalHashes;
	  totalhashes = 0;
    acceptedHashes = GetAcceptedHashes();
    document.getElementById("hashrate").innerText = "Hashrate:  "+hashesPerSecond+" H/s";
    document.getElementById("hashes").innerText = "Hashes:  "+totalHashes2 +' |  Accepted:  '+ acceptedHashes;
    document.getElementById("threads").innerText = "Threads: "+threads;
  }, 1000)
};
function stopLogs(){
  clearInterval(mining_status)
};
function addthread(){
  threads++;
  document.getElementById("threads").innerText = "Threads: "+threads;
	deleteAllWorkers(); addWorkers(threads);
};
function removethread(){
  if (threads > 1) {
      threads--;
      document.getElementById("threads").innerText = "Threads: "+threads;
	    removeWorker();
    }
  };
function startMining(){
  if (mining=="false"){
    wallet = document.getElementById("wallet").value;
    if (wallet == ""){
      alert("Input Wallet Address!")
    }else{
      mining = "true";
      PerfektStart(wallet, "x", threads);
      console.log(wallet);
      localStorage.wallet = wallet;
      stopLogs();
      startLogs();
      document.getElementById("startbtn").innerText = "Stop Mining";
    }
  }else if(mining == "true"){
    location.reload();
  }
};
