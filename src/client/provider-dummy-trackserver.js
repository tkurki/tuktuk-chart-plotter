import Bacon from 'baconjs'

function initialize() {
  return {
    queryTracks
  }

  function queryTracks() {
    return Bacon.once([{
      "date": "2015-09-12T21:00:00.000Z",
      "route": {
        "coordinates": dummyTrack,
        "type": "LineString"
      }
    }])
  }
}

module.exports = initialize


const dummyTrack = [
  [24.92908833, 60.16096],
  [24.92874333, 60.16108333],
  [24.92775667, 60.16093667],
  [24.92695333, 60.16033],
  [24.92484333, 60.15942],
  [24.92451833, 60.15845],
  [24.92474833, 60.15717167],
  [24.92463167, 60.15614167],
  [24.923115, 60.15368833],
  [24.91990167, 60.15086333],
  [24.91928333, 60.15006333],
  [24.91914333, 60.14961833],
  [24.91963333, 60.148935],
  [24.91681333, 60.14681333],
  [24.91295667, 60.14484167],
  [24.911985, 60.14418667],
  [24.91068833, 60.14295167],
  [24.90756333, 60.13916],
  [24.90702333, 60.13768833],
  [24.90621667, 60.12825333],
  [24.90563, 60.12466167],
  [24.90499667, 60.122085],
  [24.90439333, 60.11776333],
  [24.903615, 60.11370167],
  [24.90346833, 60.11191833],
  [24.90361833, 60.111485],
  [24.90347, 60.11123333],
  [24.89799167, 60.10720333],
  [24.89496333, 60.10476667],
  [24.886915, 60.09952167],
  [24.881305, 60.09628833],
  [24.87474167, 60.09287],
  [24.87222833, 60.092015],
  [24.86859, 60.09202833],
  [24.86418833, 60.09156333],
  [24.861075, 60.09156833],
  [24.85545667, 60.09123333],
  [24.82868167, 60.092265],
  [24.82256, 60.093525],
  [24.80822833, 60.09555333],
  [24.806815, 60.09742667],
  [24.80533833, 60.09978167],
  [24.804705, 60.10182167],
  [24.80423833, 60.10438667],
  [24.80378167, 60.10836],
  [24.802325, 60.11174167],
  [24.80118167, 60.11354333],
  [24.80063333, 60.11473833],
  [24.79798, 60.11574833],
  [24.79440667, 60.11672167],
  [24.78841667, 60.117675],
  [24.78689167, 60.11805833],
  [24.786635, 60.11830667],
  [24.78680333, 60.118935],
  [24.78824, 60.12085833],
  [24.79051333, 60.12318333],
  [24.79388667, 60.12534667],
  [24.796865, 60.12681667],
  [24.800175, 60.12871],
  [24.801405, 60.12992333],
  [24.80265667, 60.13165667],
  [24.80341833, 60.13354167]
]