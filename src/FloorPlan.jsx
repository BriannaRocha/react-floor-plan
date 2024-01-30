import Bedroom from "./Bedroom"
import Kitchen from "./Kitchen"
import Bath from "./Bath"
import LivingRoom from "./LivingRoom"


function FloorPlan() {
  return (
    <>
      <Bedroom bedNum={1} />
      <Kitchen />
      <Bath size='Full Bath' />
      <Bedroom bedNum={2} />
      <LivingRoom />
      <Bath size='Half Bath' />
      <Bedroom bedNum={3} />
      
    </>
  )
}

export default FloorPlan