import { w3cwebsocket as W3CWebSocket } from "websocket";




const ws = new W3CWebSocket('wss://ws.kraken.com')

// bilerek boyle tanimladim cunku degistiginde sayfanin bastan render etmesini istemiyorum
let   filteredData={},  incomingTrasmission = `` 
ws .onopen = function () {
  this.onclose = () => console.log('SOCKET CLOSED')

  this.onmessage =  (e) =>{
      let filter =JSON.parse(e.data)

      if( filter != null &&
          filter != undefined && 
          filter.event != "heartbeat"
        ){
          
          incomingTrasmission=filter
          incomingDataAdding()
        }
  } // her msaniye geldigi icin datayi burada temizliyorum
  this.send(
    JSON.stringify({
      event: 'subscribe',
       pair: ['SOL/USD','SOL/EUR',"XRP/USD","XRP/EUR",'LTC/USD','LTC/EUR','ETH/USD','ETH/EUR'
      ,'ADA/USD','ADA/EUR',"XBT/USD","XBT/EUR"],
       subscription: { name: 'ticker' },
    }), 
 ) }

// https://stackoverflow.com/questions/67941376/how-to-work-with-an-api-with-websockets-example-kraken

const incomingDataAdding = () =>{
 

  if( 
  incomingTrasmission[3] != null && //birim
  incomingTrasmission[3] != undefined &&
  incomingTrasmission[1].a != null && // alis
  incomingTrasmission[1].a != undefined &&
  incomingTrasmission[1].b != null && // satis
  incomingTrasmission[1].b != undefined    
  )
{
if(filteredData[incomingTrasmission[3]] != undefined &&
 filteredData[incomingTrasmission[3]] != null)
{

  let objectData =filteredData[incomingTrasmission[3]]
  objectData.buy = [incomingTrasmission[1].a,...objectData.buy.slice(0,10)]
   objectData.sell = [incomingTrasmission[1].b,...objectData.sell.slice(0,10)] 
// rame cok yukelenmesin diye sadece son 10 adetini aliyorum
 filteredData=  {...filteredData,[incomingTrasmission[3]]:objectData}
   // datayi iyice filtreliyorum ki hizlica yerli yerine yerlestireyim
  
 }
 else filteredData= {...filteredData,[incomingTrasmission[3]]:{buy:[],sell:[]}}


}

}
        
  


  // her salise data aktigi icin disarda tanimlamak zorundayim aksi takdirde surekli Renderi calistiriyorum.

const filter = () =>filteredData // func gondererek her istedigimde buradaki calisan dosyadan guncel veri cekiyorum
  export default filter